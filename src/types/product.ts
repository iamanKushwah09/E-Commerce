// ye batata hai "product me kya-kya hoga"

export type Product = {
  id: number;
  title: string;
  category: string;

  images: string[];     // multiple images

  price: number;
  oldPrice?: number;    // ? = optional

  rating: number;
  reviews: number;

  colors?: string[];
  sizes?: string[];

  stock: number;
  badge?: string;
};
