import React from "react";

const fetchSinglePost = async (id: number) => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/api/posts/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      // throw new Error("could not get post data");
      console.log("------>", response);
    }
    return response.json();
  } catch (error) {
    console.log("------error------", error);
  }
};

const ContactDetails = async ({ params }: any) => {
  const singelPost = await fetchSinglePost(params.id);
  return (
    <div>
      <h3>{singelPost.content}</h3>
    </div>
  );
};

export default ContactDetails;
