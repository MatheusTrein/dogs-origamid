import React from 'react';

const useMedia = media => {
  const [match, setMedia] = React.useState(null);

  React.useEffect(() => {
    function changeMedia() {
      const { matches } = window.matchMedia(media);
      setMedia(matches);
    }
    changeMedia();
    window.addEventListener('resize', changeMedia);

    return () => {
      window.addEventListener('resize', changeMedia);
    };
  }, []);

  return match;
};

export default useMedia;
