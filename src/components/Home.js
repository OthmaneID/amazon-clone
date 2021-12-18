import React from "react";
import SmoothList from "react-smooth-list";
import "./Home.css";
import Product from "./Product";


const Home = () => {
  return (
    <div className="home">
      <div className="home__container">

        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <SmoothList>
          <div className="home__row">
            <Product
              id="12321341"
              title="the lean startup: How  Constant Innovation Creates Radically Successful Businesses PaperBack"
              price={20.67}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={4}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand mixer for Baking, Stylish Kitchen Mixer with K-beater,
           Dough hook and whisk, 5 litre Glass Bowl"
              price={239.0}
              image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SS450_.jpg"
              rating={5}
            />

            <Product
              id="4903850"
              title="Sumsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric "
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />

            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch,Wi-Fi,128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </SmoothList>
      </div>
    </div>
  );
};

export default Home;
