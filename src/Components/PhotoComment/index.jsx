import React from 'react';

import { Comments } from './styles';
import PhotoCommentForm from '../PhotoCommentForm';

const PhotoComment = ({ id, allComments }) => {
  const [comments, setComments] = React.useState(() => allComments);

  const commentsRef = React.useRef();

  React.useEffect(() => {
    commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <Comments ref={commentsRef}>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
              </li>
            );
          })}
        </ul>
      </Comments>
      <PhotoCommentForm id={id} setComments={setComments} />
    </>
  );
};

export default PhotoComment;
