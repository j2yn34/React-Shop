import { selector } from "recoil";

const productsURL = import.meta.env.VITE_FAKE_STORE_API;

interface Rating {
  readonly rate?: 0;
  readonly count?: 0;
}

export interface Product {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: Rating;
}

export const productsListState = selector<Product[]>({
  key: "productsListState",
  get: async () => {
    try {
      const response = await fetch(productsURL as string);
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});

export const fashionListState = selector<Product[]>({
  key: "fashionListState",
  get: ({ get }) => {
    const productsList = get(productsListState);
    return (
      productsList.filter((product) => product.category.includes("clothing")) ||
      []
    );
  },
});

export const digitalListState = selector<Product[]>({
  key: "digitalListState",
  get: ({ get }) => {
    const productsList = get(productsListState);
    return (
      productsList.filter((product) => product.category == "electronics") || []
    );
  },
});
