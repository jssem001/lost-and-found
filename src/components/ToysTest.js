import React from "react";

function ToysTest({name,image,likes}){
    return(
        <div>
            <h1>Name: {name}</h1>
            <img alt="loading..." src={image}/>
            <p>Likes: {likes}</p>
        </div>
    );

}

export default ToysTest;