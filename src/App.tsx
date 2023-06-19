import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import Fashion from "./views/Fashion";
import Accessory from "./views/Accessory";
import Digital from "./views/Digital";
import Detail from "./Componants/products/ProductView";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { Product } from "./store/products";
import { cartState } from "./store/cart";
import Header from "./Componants/common/Header";
import Footer from "./Componants/common/Footer";
import Error from "./Componants/common/Error";
import Drawer from "./Componants/common/Drawer";
import Cart from "./views/Cart";

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
          <section className="main pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/error" element={<Error />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/accessory" element={<Accessory />} />
              <Route path="/digital" element={<Digital />} />
              <Route path="/product/:id" element={<Detail />} />
            </Routes>
          </section>
          <Footer />
        </div>
        <Drawer overlay={overlay} />
      </div>
    </BrowserRouter>
  );
};

// 메인페이지 index 접속했을때
// 악세서리 / 패션 / 디지털 카테고리 페이지
// 상세페이지
// 바구니

export default App;
