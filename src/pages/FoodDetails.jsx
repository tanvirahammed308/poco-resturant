import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreProvider';

const FoodDetails = () => {
  const { id } = useParams();
  const { foodMenu, addToCart, cartItems } = useContext(StoreContext);

  // Default cartItems to an empty array if it's undefined
  const cart = cartItems || [];

  // Convert id to number if your dataset uses numeric IDs
  const selectedItem = foodMenu?.find((item) => item.id === Number(id));

  if (!selectedItem) {
    return <div className="text-center text-xl mt-10">Item not found.</div>;
  }

  const relatedItems = foodMenu?.filter(
    (item) => item.category === selectedItem.category && item.id !== selectedItem.id
  );

  // Check if the item is already in the cart
  const isInCart = cart.some((item) => item.id === selectedItem.id);

  // Get the quantity of the selected item in the cart
  const itemInCart = cart.find((item) => item.id === selectedItem.id);
  const [quantity, setQuantity] = useState(itemInCart ? itemInCart.quantity : 1);

  // Function to handle quantity change
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to render stars for the rating
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars).fill().map((_, index) => (
          <span key={`full-star-${index}`} className="text-yellow-500">&#9733;</span>
        ))}
        {halfStars && <span className="text-yellow-500">&#9733;</span>}
        {Array(emptyStars).fill().map((_, index) => (
          <span key={`empty-star-${index}`} className="text-gray-300">&#9733;</span>
        ))}
      </div>
    );
  };

  // Random chef names and ingredients
  const chefs = ['Chef Gordon Ramsay', 'Chef Jamie Oliver', 'Chef Nigella Lawson', 'Chef Bobby Flay', 'Chef Alice Waters'];
  const ingredientsList = ['Tomato', 'Lettuce', 'Cheese', 'Bacon', 'Chicken', 'Olives', 'Onions', 'Peppers', 'Mushrooms', 'Avocado'];

  // Function to get random chef and ingredients
  const getRandomChef = () => chefs[Math.floor(Math.random() * chefs.length)];
  const getRandomIngredients = () => {
    const numIngredients = Math.floor(Math.random() * 4) + 3; // Randomly choose between 3 and 6 ingredients
    return Array.from({ length: numIngredients }, () => ingredientsList[Math.floor(Math.random() * ingredientsList.length)]);
  };

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="w-full md:w-1/2">
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="w-full h-[300px] object-contain rounded-lg shadow"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#00A149]">{selectedItem.name}</h2>
          <p className="text-gray-700 text-lg mb-4">{selectedItem.description}</p>

          {/* Price and Rating Flex */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold text-gray-800">${selectedItem.price}</p>

            {/* Rating */}
            <div>
              <span className="text-gray-700 font-bold">Rating: </span>
              {renderRatingStars(selectedItem.rating || 0)} {/* Default rating to 0 if undefined */}
            </div>
          </div>

          {/* Chef's Name and Ingredients Flex */}
          <div className="space-y-2 mb-3">
          <div>
  <span className="text-gray-700 font-semibold">Ingredients: </span>
  <ul className="flex gap-4 pl-0">
    {getRandomIngredients().map((ingredient, index) => (
      <li key={index} className="text-gray-600 flex-none">{ingredient}</li>
    ))}
  </ul>
</div>

            <p className="text-sm text-gray-600"><span className="font-semibold">Chef: </span>{getRandomChef()}</p>

            
          </div>

          <div className="flex gap-2 flex-wrap">
            {selectedItem.todaySpecial && (
              <span className="text-sm bg-yellow-300 text-black font-semibold px-2 py-1 rounded">
                Today Special
              </span>
            )}
            {selectedItem.popular && (
              <span className="text-sm bg-pink-300 text-black font-semibold px-2 py-1 rounded">
                Popular
              </span>
            )}
          </div>

          <div className='flex items-center  gap-4 mt-4'>
            {/* Quantity Selector */}
            <div className="flex gap-4 items-center">
              <button 
                onClick={() => handleQuantityChange('decrease')} 
                className="px-3 py-1 bg-gray-300 rounded text-gray-600 disabled:opacity-50" 
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')} 
                className="px-3 py-1 bg-gray-300 rounded text-gray-600"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(selectedItem, quantity)}
              className={`w-[150px] bg-[#00A149] hover:bg-green-700 text-white text-sm py-2 px-4 rounded ${isInCart ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isInCart}
            >
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-[#00A149]">Related Food</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs mx-auto"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain rounded-md mb-3"
              />
              <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="mt-2 text-gray-800 font-bold">${item.price}</div>
              <div className="mt-4 flex justify-between">
                {/* View Details Button */}
                <Link to={`/menu/${item.id}`} className="text-sm text-[#00A149] hover:text-green-700">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
