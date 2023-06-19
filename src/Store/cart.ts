import { atom } from "recoil";
import { Product } from "./Products";

export const cartState = atom<Product[]>({
  key: "cartState",
  default: [],
});
