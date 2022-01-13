import React from 'react';

import { UserContext } from '../../contexts/UserContext';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api/api';

import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import { Form } from './styles';
import Error from '../Error';

const PhotoCommentForm = ({ id, setComments }) => {
  const { login } = React.useContext(UserContext);

  const { error, loading, request } = useFetch();

  const [comment, setComment] = React.useState('');

  const textAreaRef = React.useRef();
  const formRef = React.useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    const token = JSON.parse(window.localStorage.getItem('token'));

    const body = JSON.stringify({
      comment,
    });

    const { url, options } = COMMENT_POST({ id, body, token });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments(comments => [...comments, json]);
    }
  }

  React.useEffect(() => {
    async function submitOnEnter(event) {
      if (event.which === 13) {
        return handleSubmit(event);
      }
      return null;
    }
    window.addEventListener('keypress', submitOnEnter);

    return () => {
      window.removeEventListener('keypress', submitOnEnter);
    };
  }, [comment, loading]);

  return (
    <div>
      {login && (
        <>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <textarea
              id="comment"
              name="comment"
              placeholder="Comente..."
              value={comment}
              onChange={({ target }) => setComment(target.value)}
              ref={textAreaRef}
            />
            <button>
              <Enviar />
            </button>
          </Form>
          <Error error={error} />
        </>
      )}
    </div>
  );
};

export default PhotoCommentForm;
