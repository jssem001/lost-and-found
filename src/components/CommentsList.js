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
       <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
          </ul>
        </div>
  );
      
      /*<CommentsForm />*/
    }

export default CommentsList;
