import React from 'react';

import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api/api';
import { LoadContext } from '../../contexts/LoadContext';

import { GridPhotos } from './styles';

import FeedPhotoItem from '../FeedPhotoItem';
import Error from '../Error';

const FeedPhotos = ({
  page,
  total,
  user,
  setModalPhoto,
  setInfinite,
  setLoadsCount,
  setMessage,
}) => {
  const [photos, setPhotos] = React.useState(null);

  const { loading, error, request } = useFetch();

  const { setGeneralLoading } = React.useContext(LoadContext);

  React.useEffect(() => {
    setGeneralLoading(loading);
  }, [loading]);

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if (response.ok && page === 1 && json.length === 0) {
        setMessage('Você não tem fotos ainda.');
      }

      if (response.ok && page === 1) {
        window.scrollTo(0, 0);
      }

      if (response.ok) {
        setPhotos(json);
      }

      if (response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, []);

  if (error) return <Error error={error} />;
  return (
    <GridPhotos className="animeLeftFeedPhoto">
      {photos &&
        photos.map(photo => {
          return (
            <FeedPhotoItem
              onClick={() => setModalPhoto(photo)}
              key={photo.id}
              src={photo.src}
              alt={`Foto postada pelo usuário: ${photo.author}`}
              hits={photo.acessos}
              setLoadsCount={setLoadsCount}
            />
          );
        })}
    </GridPhotos>
  );
};

export default FeedPhotos;
