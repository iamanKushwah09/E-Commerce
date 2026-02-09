import { useState } from "react";
import type { Product } from "../types/product";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, addToWishlist, isInWishlist } = useShop();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToWishlist(product);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* IMAGE PART */}
      <div className="relative h-60 overflow-hidden rounded-t-xl group">
        <img
          src={product.images[activeImage]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* BADGE */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        
        {/* WISHLIST BUTTON - TOP RIGHT */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 text-2xl transition hover:scale-110"
        >
          {inWishlist ? "❤️" : "🤍"}
        </button>

        {/* IMAGE SWITCH */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onMouseEnter={() => setActiveImage(index)}
              className="w-8 h-8 object-cover rounded border cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 bg-white grow flex flex-col">
        <p className="text-xs text-gray-500 uppercase">
          {product.category}
        </p>

        <h3 className="font-semibold text-sm mt-1 line-clamp-2">
          {product.title}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-2">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-2 flex gap-2 items-center">
          <span className="font-bold">${product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-sm">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* COLORS */}
        {product.colors && (
          <div className="flex gap-2 mt-2">
            {product.colors.map((c) => (
              <span
                key={c}
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}

        {/* ADD TO CART BUTTON - APPEARS ON HOVER */}
        {isHovered && (
          <button
            onClick={handleAddToCart}
            className={`w-full mt-4 py-2 rounded-lg font-semibold transition ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
