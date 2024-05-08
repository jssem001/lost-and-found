import React,{useState} from 'react';

function CommentsForm({onAddComment}) {
  const [newComment,setNewComment] =useState("");

  const handleSubmit=(e) => {
    e.preventDefault();
    if(!newComment.trim())
    return;
  onAddComment(newComment);
  setNewComment("");
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
        
      </form>
      
   
  );
}

export default CommentsForm;
