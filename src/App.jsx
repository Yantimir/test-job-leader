import { useContext, useEffect } from "react";

import { HomePage } from "../src/pages/HomePage";
import { CartPage } from "../src/pages/CartPage";
import { Routes, Route } from "react-router-dom";
import { ShopContext } from "./context/context";

import { data } from "./data/data";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {

  const { setGoods } = useContext(ShopContext);

  useEffect(() => {
    setGoods(data);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
