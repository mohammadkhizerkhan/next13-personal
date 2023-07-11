import React from "react";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/16811800/pexels-photo-16811800/free-photo-of-city-road-landscape-vacation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width="100"
        height="100"
        alt="city landscape"
      />
      {children}
    </>
  );
};

export default layout;
