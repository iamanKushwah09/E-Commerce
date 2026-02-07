import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    category: "Audio",
    images: [
      "https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1770416629652-962a91120bf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    ],
    price: 199.99,
    oldPrice: 249.99,
    rating: 4,
    reviews: 328,
    colors: ["black", "blue"],
    stock: 10,
    badge: "Best Seller",
  },

  {
    id: 2,
    title: "Luxury Smartwatch",
    category: "Watches",
    images: [
      "https://images.unsplash.com/photo-1770074051176-76dc5019be0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1770135878277-73e589248b43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 399,
    rating: 5,
    reviews: 542,
    sizes: ["40mm", "44mm"],
    stock: 5,
    badge: "New",
  },
];
