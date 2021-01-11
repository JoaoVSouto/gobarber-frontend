import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import jwt from 'jsonwebtoken';

import api from 'services/api';

import { useAuth, AuthProvider } from 'hooks/auth';

const apiMock = new MockAdapter(api);

jest.mock('jsonwebtoken');

const { decode } = jwt as jest.Mocked<typeof import('jsonwebtoken')>;

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      user: {
        id: 'user-id',
        name: 'John Doe',
        email: 'john@doe.com',
      },
      token: 'user-token',
    };

    apiMock.onPost('sessions').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(useAuth, { wrapper: AuthProvider });

    await act(() =>
      result.current.signIn({
        email: apiResponse.user.email,
        password: '123123',
      }),
    );

    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:token',
      apiResponse.token,
    );
    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:user',
      JSON.stringify(apiResponse.user),
    );

    expect(result.current.user.email).toEqual(apiResponse.user.email);
  });

  it('should restore saved data from storage when auth inits', () => {
    decode.mockReturnValue({ exp: Infinity });

    const user = {
      id: 'user-id',
      name: 'John Doe',
      email: 'john@doe.com',
    };

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@GoBarber:token':
          return 'user-token';

        case '@GoBarber:user':
          return JSON.stringify(user);

        default:
          return null;
      }
    });

    const { result } = renderHook(useAuth, { wrapper: AuthProvider });

    expect(result.current.user.email).toEqual(user.email);
  });

  it('should log user out when token expires', () => {
    decode.mockReturnValue({ exp: 0 });

    const user = {
      id: 'user-id',
      name: 'John Doe',
      email: 'john@doe.com',
    };

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@GoBarber:token':
          return 'user-token';

        case '@GoBarber:user':
          return JSON.stringify(user);

        default:
          return null;
      }
    });

    const { result } = renderHook(useAuth, { wrapper: AuthProvider });

    expect(result.current.user).toBeUndefined();
  });

  it('should be able to sign out', () => {
    decode.mockReturnValue({ exp: Infinity });

    const user = {
      id: 'user-id',
      name: 'John Doe',
      email: 'john@doe.com',
    };

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@GoBarber:token':
          return 'user-token';

        case '@GoBarber:user':
          return JSON.stringify(user);

        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(useAuth, { wrapper: AuthProvider });

    act(result.current.signOut);

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });

  it('should be able update user data', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(useAuth, { wrapper: AuthProvider });

    const user = {
      id: 'user-id',
      name: 'John Doe',
      email: 'john@doe.com',
    };

    act(() => result.current.updateUser(user));

    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:user',
      JSON.stringify(user),
    );

    expect(result.current.user).toEqual(user);
  });
});
