import React from "react";

const Footer = () => {
  const date=new Date();
  const year=date.getFullYear();
  return (
    <div className="text-center pt-10">
      <hr className="w-full text-gray-700" />
      <div className="text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <p className="text-sm sm:text-base">© {year} Janardhan Reddy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
