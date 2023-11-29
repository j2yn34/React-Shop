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

export const productsListSelector = selector<Product[]>({
  key: "productsListSelector",
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

export const fashionListSelector = selector<Product[]>({
  key: "fashionListSelector",
  get: ({ get }) => {
    const productsList = get(productsListSelector);
    return (
      productsList.filter((product) => product.category.includes("clothing")) ||
      []
    );
  },
});

export const digitalListSelector = selector<Product[]>({
  key: "digitalListState",
  get: ({ get }) => {
    const productsList = get(productsListSelector);
    return (
      productsList.filter((product) => product.category == "electronics") || []
    );
  },
});

export const AccessoryListSelector = selector<Product[]>({
  key: "accessoryListSelector",
  get: ({ get }) => {
    const productsList = get(productsListSelector);
    return (
      productsList.filter((product) => product.category == "jewelery") || []
    );
  },
});
