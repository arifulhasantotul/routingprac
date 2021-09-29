import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const FriendDetails = () => {
   const { friendId } = useParams();
   const [friend, setFriend] = useState({});

   useEffect(() => {
      const URL = `https://jsonplaceholder.typicode.com/users/${friendId}`;
      fetch(URL)
         .then((res) => res.json())
         .then((data) => setFriend(data));
   }, [friendId]);

   const history = useHistory();
   const handleBack = () => {
      history.push("/friends");
   };

   return (
      <div>
         <h3>Name: {friend.name}</h3>
         <h4>Email: {friend.email}</h4>
         <h4>Codename: {friend.username}</h4>
         <h4>Address: {friend.address?.city}</h4>
         <h4>Contact: {friend.phone}</h4>
         <h4>Website: {friend.website}</h4>
         <h4>Works at {friend.company?.name}</h4>
         <button onClick={handleBack}>Go back</button>
      </div>
   );
};

export default FriendDetails;
