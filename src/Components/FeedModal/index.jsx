import React from 'react';

import { Screen } from './styles';

import { PHOTO_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import PhotoContent from '../PhotoContent';
import Loading from '../Loading';

const FeedModal = ({ id, setModalPhoto, photoPage }) => {
  const { loading, data, request } = useFetch();

  const screenElement = React.useRef(null);

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET({ id });
      await request(url, options);
    }
    fetchPhoto();
  }, [id]);

  function exitModal(event) {
    if (photoPage) return;
    if (event.target === screenElement.current) {
      setModalPhoto(null);
    }
  }

  return (
    <Screen ref={screenElement} onClick={exitModal}>
      {loading && <Loading />}
      {!loading && data ? <PhotoContent data={data} /> : null}
    </Screen>
  );
};

export default FeedModal;
