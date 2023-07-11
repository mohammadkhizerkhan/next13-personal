import Link from "next/link";
import React from "react";
import Image from "next/image";

async function getPostData() {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/posts", {
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
}

const About = async () => {
  // const contacts = ["admin", "moderator", "captain"];
  const data = await getPostData();
  console.log("=====> postsdata", data);
  return (
    <div>
      <h2>About page</h2>
      {data.map((post: any) => {
        return (
          <>
            <Link href={`/aboutus/${post._id}`} key={post.id}>
              {post.title}
            </Link>
            <Image
              src={post.image}
              width="100"
              height="100"
              alt="city landscape"
            />
            <h3>{post.content}</h3>
          </>
        );
      })}
    </div>
  );
};

export default About;
