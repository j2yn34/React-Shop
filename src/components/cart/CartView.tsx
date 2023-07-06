import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Breadcrumb from "../common/Breadcrumb";
import { Product } from "../../store/products";
import { cartState } from "../../store/cart";
import Confirm from "../common/Confirm";
import CartList from "./CartList";

const CartView = () => {
  const getCartList = useRecoilValue<Product[]>(cartState);
  const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>(
    () => {
      const storedItemCounts = localStorage.getItem("itemCounts");
      return storedItemCounts
        ? JSON.parse(storedItemCounts)
        : Object.fromEntries(getCartList.map((item) => [item.id, 1]));
    }
  );
  const [totalPrice, setTotalPrice] = useState<number>(() => {
    const storedTotalPrice = localStorage.getItem("totalPrice");
    return storedTotalPrice ? Number(storedTotalPrice) : 0;
  });

  useEffect(() => {
    if (getCartList.length > 0) {
      setItemCounts((prevItemCounts) => {
        const updatedItemCounts = { ...prevItemCounts };
        getCartList.forEach((item) => {
          if (!updatedItemCounts[item.id]) {
            updatedItemCounts[item.id] = 1;
          }
        });
        return updatedItemCounts;
      });
    }
  }, [getCartList]);

  useEffect(() => {
    if (getCartList.length > 0) {
      setItemCounts((prevItemCounts) => {
        const existingItemIds = getCartList.map((item) => item.id);
        const newItemCounts = { ...prevItemCounts };
        for (const id in newItemCounts) {
          if (!existingItemIds.includes(Number(id))) {
            delete newItemCounts[id];
          }
        }
        for (const id of existingItemIds) {
          if (!(id in newItemCounts)) {
            newItemCounts[id] = 1;
          }
        }
        return newItemCounts;
      });
    }
  }, [getCartList]);

  useEffect(() => {
    calculateTotalPrice();
  }, [getCartList, itemCounts]);

  useEffect(() => {
    localStorage.setItem("itemCounts", JSON.stringify(itemCounts));
    localStorage.setItem("totalPrice", totalPrice.toString());
  }, [itemCounts, totalPrice]);

  const calculateTotalPrice = () => {
    let sumPrice = 0;
    for (let i = 0; i < getCartList.length; i++) {
      const item = getCartList[i];
      const count = itemCounts[item.id] || 1;
      sumPrice += item.price * count;
    }
    const formattedPrice = Number(sumPrice.toFixed(2));
    setTotalPrice(formattedPrice);
  };

  const handleItemCountChange = (id: number, count: number) => {
    const updatedItemCounts = { ...itemCounts };
    updatedItemCounts[id] = count;
    setItemCounts(updatedItemCounts);
  };

  return (
    <>
      <Breadcrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {getCartList.length === 0 ? (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to="/" className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        ) : null}
      </div>
      <div className="lg:flex justify-between mb-20">
        <CartList
          cartItems={getCartList}
          itemCounts={itemCounts}
          onItemCountChange={handleItemCountChange}
        />
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">
            총: ${totalPrice.toFixed(2)}
          </span>
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
