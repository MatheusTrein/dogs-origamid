import React from 'react';

import { Wrapper, Image, Skeleton } from './styles';

const ImageSkeleton = ({ alt, setLoadsCount, ...props }) => {
  const [skeletonActive, setSkeletonActive] = React.useState(true);

  function handleLoad({ target }) {
    if (setLoadsCount) setLoadsCount(loadCount => loadCount + 1);
    setSkeletonActive(false);
    target.style.opacity = 1;
  }
  return (
    <Wrapper>
      {skeletonActive && <Skeleton />}
      <Image onLoad={handleLoad} alt="" {...props} />
    </Wrapper>
  );
};

export default ImageSkeleton;
