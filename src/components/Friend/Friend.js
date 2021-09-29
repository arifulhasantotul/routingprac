import React from "react";
import { useHistory } from "react-router";
import "./Friend.css";

const Friend = (props) => {
   const { id, name, email } = props.friend;

   const URL = `/friend/${id}`;

   const history = useHistory();
   const handleClick = () => {
      history.push(URL);
   };

   return (
      <div className="friend">
         <h3>
            {id} {name}
         </h3>
         <h4>Email: {email}</h4>
         <button onClick={handleClick}>See details...</button>
      </div>
   );
};

export default Friend;
