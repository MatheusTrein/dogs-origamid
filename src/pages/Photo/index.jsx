import React from 'react';

import { useParams } from 'react-router-dom';
import FeedModal from '../../Components/FeedModal';
import Head from '../../Components/Head';

const Photo = () => {
  const { id, title } = useParams();

  return (
    <>
      <Head title={title} description={`Você está visualizando o ${title}`} />
      <FeedModal id={id} photoPage={true} />
    </>
  );
};

export default Photo;
