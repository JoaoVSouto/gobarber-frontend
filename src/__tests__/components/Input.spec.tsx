import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Input from 'components/Input';

const FIELD_NAME = 'email';
const PLACEHOLDER_TEXT = 'E-mail';

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldName: FIELD_NAME,
    defaultValue: '',
    error: '',
    registerField: jest.fn(),
  }),
}));

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name={FIELD_NAME} placeholder={PLACEHOLDER_TEXT} />,
    );

    expect(getByPlaceholderText(PLACEHOLDER_TEXT)).toBeTruthy();
  });

  it('should keep icon orange color when input is filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name={FIELD_NAME} placeholder={PLACEHOLDER_TEXT} />,
    );

    const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);
    const containerElement = getByTestId('input-container');

    fireEvent.change(inputElement, { target: { value: 'john@doe.com' } });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('color: #ff9000');
    });
  });
});
