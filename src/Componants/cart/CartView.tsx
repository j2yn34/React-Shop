import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Breadcrumb from "../common/Breadcrumb";
import { Product } from "../../store/products";
import { cartState } from "../../store/cart";
import Confirm from "../common/Confirm";
import CartList from "./CartList";

const CartView = () => {
  const getCartList = useRecoilValue<Product[]>(cartState);

  const [totalPrice, setTotalPrice] = useState(0);

  React.useEffect(() => {
    // setTotalPrice(getCartList.reduce((a, b) => a + b.price, 0));
    let sumPrice = 0;
    for (const cart of getCartList) {
      sumPrice += cart.price;
    }
    setTotalPrice(sumPrice);
  }, [getCartList.length]);

  return (
    <>
      <Breadcrumb category="홈" crumb="장바구니" />
      {getCartList.length == 0 ? (
        <div className="mt-6 md:mt-14 px-2 lg:px-0">
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to="/" className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        </div>
      ) : null}
      <div className="lg:flex justify-between mb-20">
        <div>
          {getCartList.map((now) => {
            return <div key={now.id}>{JSON.stringify(now)}</div>;
          })}
          <CartList />
        </div>
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">총: ${totalPrice}</span>
          <label
            htmlFor="confirm-modal"
            className="modal-button btn btn-primary ml-5"
          >
            구매하기
          </label>
        </div>
      </div>
      <Confirm />
    </>
  );
};

export default CartView;
