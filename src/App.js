import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

const promise = loadStripe(
  "pk_test_51KND7jK6jfjgEuSCOsS9fZJRk3pzKu95oYy6NkscgBB0H7bwZHwJsGgqvqBCVM1DwNvusY8THHOfJ1QWCgEEW7ww00sHzWpU4C"
);

function App() {
  const [query, setQuery] = useState("");
  const [nightMode, setNightMode] = useState(false);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className={`App ${nightMode ? "App_night" : ""}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header
                  nightMode={nightMode}
                  setNightMode={setNightMode}
                  setQuery={setQuery}
                  query={query}
                />
                <Checkout nightMode={nightMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header
                  nightMode={nightMode}
                  setNightMode={setNightMode}
                  setQuery={setQuery}
                  query={query}
                />
                <Home nightMode={nightMode} query={query} />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header
                  nightMode={nightMode}
                  setNightMode={setNightMode}
                  setQuery={setQuery}
                  query={query}
                />
                <Elements stripe={promise}>
                  <Payment nightMode={nightMode} />
                </Elements>
                <Footer />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header
                  nightMode={nightMode}
                  setNightMode={setNightMode}
                  setQuery={setQuery}
                  query={query}
                />
                <Orders nightMode={nightMode} />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
