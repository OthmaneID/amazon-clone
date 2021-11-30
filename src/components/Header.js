import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo" />

      <div className="header_search">
        <input type="text" className="header_serchInput" />
        {/* search Logo */}

        {/* ------ */}
      </div>
    
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello user</span>

          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>

          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>

          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
