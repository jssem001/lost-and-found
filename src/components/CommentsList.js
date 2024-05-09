import React from 'react';

function CommentsList(item) {

  return (
    <div className="CommentsList">
      <h4>Comments</h4>
       {/* Display comments */}

      {
      item.comments && item.comments.map((comment) => (
        <div className="" key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.text}</p>

       {/* <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
          </ul> */}

        </div>
      ))}
  </div>
  
      
      /*<CommentsForm />*/
    )}

export default CommentsList;
