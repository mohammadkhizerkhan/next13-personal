import React from "react";
import { User } from "../../../../interfaces/main";

async function getUserData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SingleUser = async ({ params }) => {
  const userData: User = await getUserData(params.userId);
  return (
    <div>
      <h2>email : {userData.email}</h2>
    </div>
  );
};

export default SingleUser;
