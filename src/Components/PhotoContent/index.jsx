import React from 'react';

import { Link } from 'react-router-dom';

import { Modal, ModalPhoto, ModalInfo, InfoDetails } from './styles';
import PhotoDelete from '../PhotoDelete';
import PhotoComment from '../PhotoComment';
import ImageSkeleton from '../ImageSkeleton';
import { UserContext } from '../../contexts/UserContext';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  const userContext = React.useContext(UserContext);

  return (
    <Modal>
      <ModalPhoto>
        <ImageSkeleton src={photo.src} alt={photo.title} />
      </ModalPhoto>
      <ModalInfo>
        <InfoDetails>
          <p>
            {userContext.data && userContext.data.nome === photo.author ? (
              <PhotoDelete photo={photo} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.title}/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}
            </li>
          </ul>
        </InfoDetails>
        <PhotoComment id={photo.id} allComments={comments} />
      </ModalInfo>
    </Modal>
  );
};

export default PhotoContent;
