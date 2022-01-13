import React from 'react';

import { Button } from './styles';
import useFecth from '../../hooks/useFetch';
import { PHOTO_DELETE } from '../../api/api';

const PhotoDelete = ({ photo, ...props }) => {
  const { loading, request } = useFecth();

  async function handleClick(event) {
    event.preventDefault();

    // eslint-disable-next-line no-alert
    const deleteConfirm = window.confirm(
      `Are you sure you want to delete ${photo.title}`,
    );

    if (deleteConfirm) {
      const { url, options } = PHOTO_DELETE({ id: photo.id });
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <Button disabled onClick={handleClick} {...props}>
          deletando...
        </Button>
      ) : (
        <Button onClick={handleClick} {...props}>
          deletar
        </Button>
      )}
    </>
  );
};

export default PhotoDelete;
