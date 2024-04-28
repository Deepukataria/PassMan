/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">Man/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with <img className="w-5 mx-1" src="/icons/heart.png" alt="" />
        by Deepanshu
      </div>
    </div>
  );
};

export default Footer;
