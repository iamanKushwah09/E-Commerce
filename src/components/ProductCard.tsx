import { useState } from "react";
import { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">

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
      <div className="p-4 bg-white">
        <p className="text-xs text-gray-500 uppercase">
          {product.category}
        </p>

        <h3 className="font-semibold text-sm mt-1">
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
      </div>
    </div>
  );
};

export default ProductCard;
