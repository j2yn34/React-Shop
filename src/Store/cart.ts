import { atom } from "recoil";
import { Product } from "./products";

export const cartState = atom<Product[]>({
  key: "cartState",
  default: [],
});
