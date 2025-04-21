import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreProvider';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { foodMenu } = useContext(StoreContext);

  // Group food items by category
  const groupedByCategory = foodMenu?.reduce((acc, { category, ...item }) => {
    acc[category] = acc[category] || [];
    acc[category].push({ category, ...item });
    return acc;
  }, {});

  const categories = Object.keys(groupedByCategory || []);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredItems = selectedCategory
    ? groupedByCategory[selectedCategory]
    : foodMenu;

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10" style={{ color: '#00A149' }}>
        Poco Menu
      </h1>

      {/* Category Filter */}
      <div className="mb-6 flex flex-col items-center sm:items-start">
        <label htmlFor="category" className="text-xl font-semibold text-gray-700 mb-2 text-center sm:text-left">
          Filter by Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md w-full max-w-xs"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display Items */}
      <div>
        {filteredItems.length > 0 ? (
          <div className='flex flex-col'>
            <h2 className="text-3xl font-semibold mb-6 text-center sm:text-left" style={{ color: '#00A149' }}>
              {selectedCategory ? selectedCategory : 'All Items'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs mx-auto flex flex-col justify-between h-full"
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-contain rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    <div className="flex justify-between items-center mt-3 flex-wrap gap-2">
                      <span className="text-lg font-bold text-gray-800">${item.price}</span>
                      {item.todaySpecial && (
                        <span className="text-xs bg-yellow-300 text-black font-semibold px-2 py-1 rounded">
                          Today Special
                        </span>
                      )}
                      {item.popular && (
                        <span className="text-xs bg-pink-300 text-black font-semibold px-2 py-1 rounded">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <Link to={`/menu/${item.id}`}>
                  <button className="mt-4 w-full bg-[#00A149] hover:bg-green-700 text-white text-sm py-2 px-4 rounded">
                    View Details
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500">No items found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
