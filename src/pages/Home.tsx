import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to The ARK</h1>
        <p className="text-xl text-gray-300">Discover premium products for everyone</p>
      </div>

      {/* PRODUCTS */}
      <div className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
