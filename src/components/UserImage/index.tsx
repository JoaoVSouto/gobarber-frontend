import React from 'react';

import getUserInitials from '../../utils/getUserInitials';

import { Image, ImagePlaceholder } from './styles';

interface Props {
  url?: string;
  width?: number;
  alt: string;
}

const UserImage: React.FC<Props> = ({ url, alt, width = 5.6 }) => {
  return url ? (
    <Image src={url} alt={alt} $width={width} />
  ) : (
    <ImagePlaceholder $width={width}>{getUserInitials(alt)}</ImagePlaceholder>
  );
};

export default UserImage;
