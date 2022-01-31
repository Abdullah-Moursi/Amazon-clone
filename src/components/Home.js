import React from "react";
import "./Home.css";
import Product from "./Product";

const products = [
  {
    id: "5789635",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
    rating: 5,
    title: "The lean startup",
    price: 34.44,
  },
  {
    id: "4369635",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51aAHuClgTL._AC_UL600_SR600,600_.jpg",
    rating: 4,
    title: "Kenwood Stand Mixer",
    price: 40.32,
  },
  {
    id: "5783333",
    image:
      "https://media.btech.com/media/catalog/product/cache/22b1bed05f04d71c4a848d770186c3c4/i/t/item_xxl_23092025_32550328.jpg",
    rating: 5,
    title: "Apple iPad Pro",
    price: 340.4,
  },
  {
    id: "546635",
    image:
      "https://media.btech.com/media/catalog/product/cache/c23a5bd7efa02ec70c7142d7ac342c43/c/a/capture_3_6.png",
    rating: 3,
    title: "Samsung LED Monitor",
    price: 49.99,
  },
  {
    id: "5789767",
    image:
      "https://www.bigw.com.au/medias/sys_master/images/images/h81/h7d/16181955067934.jpg",
    rating: 5,
    title: "Amazon Echo Speaker",
    price: 20.1,
  },
  {
    id: "5746653",
    image:
      "https://brain-images-ssl.cdn.dixons.com/0/5/10202550/u_10202550.jpg",
    rating: 2,
    title: "LED Gaming Monitor - Super Ultra Wide",
    price: 640.32,
  },
  {
    id: "5746653",
    image:
      "https://www.mytrendyphone.eu/images/Forever-Music-Soul-BHS-300-Bluetooth-Headphones-with-Microphone-Black-5900495738110-17072019-01-p.jpg",
    rating: 3,
    title: " Music Soul headphones ",
    price: 70.32,
  },
];
const Home = ({nightMode}) => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />

        <div className="home__items">
          {products.map((product) => (
            <div className="home__item">
              <Product
              nightMode={nightMode}
                id={product.id}
                image={product.image}
                rating={product.rating}
                title={product.title}
                price={product.price}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
