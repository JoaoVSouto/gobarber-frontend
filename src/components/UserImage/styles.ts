import styled from 'styled-components';

interface ImageProps {
  $width: number;
}

interface ImagePlaceholderProps {
  $width: number;
}

export const Image = styled.img<ImageProps>`
  width: ${({ $width }) => $width}rem;
  height: ${({ $width }) => $width}rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImagePlaceholder = styled.small<ImagePlaceholderProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ $width }) => ($width * 43) / 100}rem;
  width: ${({ $width }) => $width}rem;
  height: ${({ $width }) => $width}rem;
  border-radius: 50%;
  background-color: #312e38;
  user-select: none;
`;
