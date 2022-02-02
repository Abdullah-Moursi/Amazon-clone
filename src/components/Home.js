import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import Fade from "react-reveal/Fade";
import { CircularProgress } from "@mui/material";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import ReactModal from "react-modal";

const Home = ({ nightMode, query }) => {
  const [products, setProducts] = useState([]);
  const [productModal, setProductModal] = useState(null);

  const openModal = (product) => {
    setProductModal(product);
  };

  const closeModal = () => {
    setProductModal(null);
  };
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
        <Fade bottom cascade>
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
                  openModal={() => openModal(el)}
                  nightMode={nightMode}
                  id={el.id}
                  image={el.image}
                  rating={Math.round(el.rating.rate)}
                  title={el.title}
                  price={el.price}
                />{" "}
                {productModal === el && (
                  <ReactModal
                    style={
                      nightMode
                        ? {
                            overlay: {
                              backgroundColor: "rgb(133, 133, 134)",
                            },
                            content: {
                              backgroundColor: "rgb(5, 5, 12)",

                              color: "white",
                            },
                          }
                        : {
                            content: {
                              backgroundColor: "white",

                              color: "black",
                            },
                          }
                    }
                    isOpen={true}
                    onRequestClose={closeModal}
                  >
                    <Zoom>
                      <Product
                        openModal={() => openModal(el)}
                        nightMode={nightMode}
                        id={el.id}
                        description={el.description}
                        image={el.image}
                        rating={Math.round(el.rating.rate)}
                        title={el.title}
                        price={el.price}
                        closeModal={closeModal}
                        modal
                      />
                    </Zoom>
                  </ReactModal>
                )}
              </div>
            ))}
          </div>{" "}
        </Fade>
      </div>
    </div>
  );
};

export default Home;
