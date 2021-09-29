import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const PostDetails = () => {
   const { id } = useParams();

   const [post, setPost] = useState({});
   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((res) => res.json())
         .then((data) => setPost(data));
   }, [id]);

   const history = useHistory();
   const handleHome = () => {
      history.push("/home");
   };
   return (
      <div>
         <h3>
            {post.id} {post.title}
         </h3>
         <h4>Post: {post.body}</h4>
         <button onClick={handleHome}>Go back</button>
      </div>
   );
};

export default PostDetails;
