import React, {useState} from 'react';
import CommentsForm from './CommentsForm';

function CommentsList() {

    const [comments,setComments]=useState([]);

    const handleAddComment =(newComment) =>{
      setComments([...comments,newComment]);
    };
    

  return (
    <div className="CommentsList">
      <h4>Comments</h4>
      <CommentsForm onAddComment={handleAddComment}/>
       {/* Display comments */}

      {comments.map(comment => (
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
