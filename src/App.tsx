import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/index";
import Fashion from "./views/fashion";
import Accessory from "./views/accessory";
import Digital from "./views/digital";
import Detail from "./views/detail";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Product } from "./Store/Products";
import { cartState } from "./Store/cart";
import Header from "./Componants/Common/Header";
import Footer from "./Componants/Common/Footer";

const App = (): JSX.Element => {
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
          <section className="main">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/accessory" element={<Accessory />} />
              <Route path="/digital" element={<Digital />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
            <Footer />
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
};

// 메인페이지 index 접속했을때
// 악세서리 / 패션 / 디지털 카테고리 페이지
// 상세페이지
// 바구니

export default App;
