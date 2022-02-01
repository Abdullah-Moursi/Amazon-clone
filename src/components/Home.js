import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import CircularProgress from "@mui/material/CircularProgress";

const Home = ({ nightMode, query }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products?.filter((el) => {
    if (query === "") {
      return el;
    } else if (el.title.toLowerCase().includes(query.toLowerCase())) {
      return el;
    }
  });

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />

        <div className="home__items">
          {products.length === 0 && <CircularProgress color="secondary" />}

          {filteredProducts.length === 0 && products.length !== 0 && (
            <h1
              className={`home__items__empty ${
                nightMode ? "home__items__empty_night" : ""
              }`}
            >
              Nothing matches your search!
            </h1>
          )}
          {filteredProducts.map((el) => (
            <div className="home__item" key={el.id}>
              <Product
                nightMode={nightMode}
                id={el.id}
                image={el.image}
                rating={Math.round(el.rating.rate)}
                title={el.title}
                price={el.price}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
