import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { FormControlLabel, Switch } from "@material-ui/core";

function Header({ nightMode, setNightMode, setQuery, query }) {
  const [{ basket, user }] = useStateValue();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const getInput = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    navigate("/");
  };

  const handleChange = () => {
    setNightMode(!nightMode);
  };
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          onClick={() => setQuery("")}
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <FormControlLabel
        control={
          <Switch checked={nightMode} onChange={handleChange} color="primary" />
        }
      />
      <form className="header__search" onSubmit={getQuery}>
        <input
          onChange={getInput}
          value={search}
          placeholder={query}
          className="header__searchInput"
          type="text"
        />
        <button type="submit">
          <SearchIcon className="header__searchIcon" />
        </button>
      </form>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
