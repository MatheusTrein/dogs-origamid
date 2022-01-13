import React from 'react';

import { PhotoItem, Hits } from './styled';
import ImageSkeleton from '../ImageSkeleton';

const FeedPhotoItem = ({ src, alt, hits, onClick, setLoadsCount }) => {
  return (
    <PhotoItem onClick={onClick}>
      <ImageSkeleton setLoadsCount={setLoadsCount} src={src} alt={alt} />
      <Hits>{hits}</Hits>
    </PhotoItem>
  );
};

export default FeedPhotoItem;
