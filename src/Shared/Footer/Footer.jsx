import React from "react";
import logo from "../../../public/logo1.png";

const Footer = () => {
  return (
    <footer>
      
      <div className="footer-center p-4 bg-base-300 text-base-content flex justify-center">
        
        <img className="rounded-full border-double border-2 border-[#c76617] me-2" src={logo} style={{width:'60px', }} alt="" />
        <p>Copyright © 2023 - All right reserved by Kamrul-Hasan-Ridoy</p>
        
      </div>
    </footer>
  );
};

export default Footer;
