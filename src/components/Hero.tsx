import { categories } from '../data/categories'

interface HeroProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const Hero = ({ selectedCategory, onCategoryChange, sortBy, onSortChange }: HeroProps) => {
  return (
    <section className='text-black items-center flex justify-center mx-auto flex-col text-center mt-30 px-6'>
        <div>
            <h1 className='font-bold text-[40px] mb-2'>Spring Collection 2026</h1>
            <p className='text-gray-500 font-sans text-[17px] text-lg mb-8'>Discover the latest trends in fashion and lifestyle</p>
        </div>
        
        <div className='w-full flex justify-between items-center mb-8'>
          <div className='flex gap-3 flex-wrap'>
            {categories.map((category) => (
              <button 
                key={category.value}
                onClick={() => onCategoryChange(category.value)}
                className={`cursor-pointer px-6 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category.value 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black border border-gray-300 hover:border-gray-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div>
            <select 
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className='border border-gray-300 rounded-lg px-4 py-2 font-medium cursor-pointer bg-white hover:border-gray-400'
            >
              <option value="featured">Sort by: Featured</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="bestSelling">Best Selling</option>
            </select>
          </div>
        </div>
    </section>
  )
}

export default Hero