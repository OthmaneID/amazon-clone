import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider"
import { auth } from "../firebase";

const Header = () => {

  const [{ basket, user }, dispatch] = useStateValue();
  var userName;
  var count = 0;

  function basketCount() {

    if (basket?.length > 0) {
      Array(basket.length).fill().map((_, i) => (
        count += basket[i].count
      ))
    } else {
      count = 0
    }
    return count
  }

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  if (user) {
    userName = auth.currentUser.email.replace('@gmail.com', '');
  } else {
    userName = 'USER'
  }

  return (

    <div className="header">

      <Link to='/'>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="" className="header_logo" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* search Logo */}
        <SearchIcon className="header_searchIcon" />
        {/* ------ */}
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Welcome {userName} </span>

            <span className="header_optionLineTwo">

              {user ? 'Sign Out' : 'Sign In'}
            </span>

          </div>
        </Link>
        <Link to={user ? '/orders' : '/'} style={{ textDecoration: 'none' }}>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        {/* Basket */}
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className="header_optionBasket">
            {/* Basket Logo */}
            <ShoppingBasketIcon className="Basket__logo" />
            <span className="header_optionLineTwo header_basketCount">
              {/* {basket?.length} */}

              {basketCount()}

              {/* {basketCount} */}
            </span>
            {/* ---Logo--- */}
          </div>
          {/* --basket-- */}
        </Link>

      </div>
    </div>
  );
};

export default Header;
