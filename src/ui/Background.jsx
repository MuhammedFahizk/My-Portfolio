import React from "react";
import { Nav, Social, Theme } from "./Index";

export const Background = ({ children }) => {



  return (
    <div className="relative min-h-screen bg-gradient-to-bl  bg-light   overflow-hidden    dark:bg-dark  dark:text-white  ">
      <Nav />
      <div className=" mx-auto ">{children}</div>
      <Theme />
      <Social />
    </div>
  );
};
