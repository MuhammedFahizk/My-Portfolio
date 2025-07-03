import React from "react";
import { Nav, Social, Theme } from "./Index";
import Cursor from "../Cursor.jsx";

export const Background = ({ children }) => {



  return (
    <div className="relative min-h-screen bg-gradient-to-bl  bg-light   overflow-hidden    dark:bg-dark  dark:text-white  ">
      <Cursor/>
      <Nav />
      <div className=" mx-auto ">{children}</div>
      <Theme />
      <Social />
    </div>
  );
};
