export type Product = {
  id: number;
  title: string;
  category: string;

  images: string[];

  price: number;
  oldPrice?: number;

  rating: number;
  reviews: number;

  colors?: string[];
  sizes?: string[];

  stock: number;
  badge?: string;
};
