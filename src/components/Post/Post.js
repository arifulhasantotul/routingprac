import React from "react";
import { useHistory } from "react-router";

const Post = (props) => {
   const { id, title } = props.post;

   const history = useHistory();
   const handleClick = () => {
      history.push(`/post/${id}`);
   };

   return (
      <div>
         <h3>
            {id} {title}
         </h3>
         <button onClick={handleClick}>See more...</button>
      </div>
   );
};

export default Post;
