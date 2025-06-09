import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/productSlice.js';



function CategoryDishes() {
  const { categoryName } = useParams();
  const allProducts = useSelector((state) => state.products.allProducts);
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (allProducts.length > 0 && categoryName) {
      const filteredDishes = allProducts.filter(item => item.category === categoryName);
      setDishes(filteredDishes);
    }
  }, [allProducts, categoryName]);

  const filteredData = dishes.filter(dish =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Dishes in {categoryName}</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded w-full mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 dishes">
        {filteredData.length > 0 ? (
          filteredData.map((dish, index) => (
            <div key={index} className="card bg-base-100 w-80 shadow-md">
              <figure className="px-10 pt-10">
                <img
                  src={dish.image || "https://static.vecteezy.com/system/resources/previews/007/101/704/non_2x/exciting-new-cafe-bar-restaurant-menu-coming-soon-flat-design-vector.jpg"}
                  alt={dish.name}
                  className="rounded-xl h-40 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{dish.name}</h2>
                <div className="card-actions">
                  <button className="btn btn-dark" onClick={() => handleAddToCart(dish)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No dishes found.</p>
        )}
      </div>
    </>
  );
}

export default CategoryDishes;
