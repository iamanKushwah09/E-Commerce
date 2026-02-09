import { useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { Category } from "../types/category";
import { useShop } from "../context/ShopContext";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(Category.ALL);
  const [sortBy, setSortBy] = useState<string>("featured");
  const { searchQuery } = useShop();

  let filteredProducts = products.filter((product) => {
    // Filter by category
    const categoryMatch = selectedCategory === Category.ALL || 
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    // Filter by search query
    const searchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  // Apply sorting
  if (sortBy === "priceLowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.id - a.id);
  } else if (sortBy === "bestSelling") {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  }

  return (
    <>
    <div className="pt-24">
      <Hero 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <div className="p-6"> 
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Home;
