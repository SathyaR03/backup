import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 py-4">
      © {new Date().getFullYear()} Fact of the Day
    </footer>
  );
};

export default Footer;

