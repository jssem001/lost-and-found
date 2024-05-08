import React from 'react';
import CommentsForm from './CommentsForm';

function CommentsList() {

    const comments = [];

  return (
    <div className="CommentsList">
      <h4>Comments</h4>
       {/* Display comments */}
      {comments.map(comment => (
        <div className="" key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.text}</p>
        </div>
      ))}
      <CommentsForm />
    </div>
  );
}

export default CommentsList;
