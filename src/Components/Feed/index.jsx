import React from 'react';

import { NoMorePost } from './styles';
import useMedia from '../../hooks/useMedia';
import { LoadContext } from '../../contexts/LoadContext';

import FeedModal from '../FeedModal';
import FeedPhotos from '../FeedPhotos';
import Loading from '../Loading';
import Container from '../Container';

const Feed = ({ total, user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const mobile = useMedia('(max-width: 40rem)');
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  const [wait, setWait] = React.useState(true);
  const [loadsCount, setLoadsCount] = React.useState(0);
  const [message, setMessage] = React.useState(null);

  const { generalLoading } = React.useContext(LoadContext);

  React.useEffect(() => {
    if (loadsCount === total * pages.length) {
      setWait(false);
    }
  }, [loadsCount]);

  React.useEffect(() => {
    function nextPage() {
      const scrollY = window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (
        !wait &&
        infinite &&
        ((mobile && scrollY > maxScroll - 64) ||
          scrollY > maxScroll - 1 ||
          maxScroll === 0)
      ) {
        setWait(true);
        setPages(pv => [...pv, pv.length + 1]);
      }
    }

    window.addEventListener('scroll', nextPage);
    // window.addEventListener('wheel', nextPage);

    return () => {
      // window.removeEventListener('wheel', nextPage);
      window.removeEventListener('scroll', nextPage);
    };
    // eslint-disable-next-line no-restricted-globals
  }, [infinite, loadsCount, wait]);

  return (
    <>
      {generalLoading && <Loading />}
      {modalPhoto && (
        <FeedModal setModalPhoto={setModalPhoto} id={modalPhoto.id} />
      )}
      <div className="container animeLeft">
        {message && <span>{message}</span>}
        {pages.map(page => {
          return (
            <FeedPhotos
              key={page}
              page={page}
              total={total}
              user={user}
              setModalPhoto={setModalPhoto}
              setInfinite={setInfinite}
              setLoadsCount={setLoadsCount}
              setMessage={setMessage}
              setWait={setWait}
            />
          );
        })}
        {!message && !infinite && (
          <Container>
            <NoMorePost>Não existem mais postagens...</NoMorePost>
          </Container>
        )}
      </div>
    </>
  );
};
export default Feed;
