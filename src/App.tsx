import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { Product } from "./store/products";
import { cartState } from "./store/cart";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";

const App = (): JSX.Element => {
  const $hamburgur = useRef<HTMLInputElement>(null);
  const overlay = () => {
    $hamburgur?.current?.click();
  };

  const setCartList = useSetRecoilState<Product[]>(cartState);

  useEffect(() => {
    const cartListString = localStorage.getItem("cart");
    if (cartListString) {
      const cartList = JSON.parse(cartListString);
      setCartList(cartList);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="drawer">
        <input id="side-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          <section className="main pt-16 ">
            <Router />
          </section>
          <Footer />
        </div>
        <Drawer overlay={overlay} />
      </div>
    </BrowserRouter>
  );
};

export default App;
