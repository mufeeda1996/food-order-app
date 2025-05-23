import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function PopularProduct() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    axios.get('/product.json')
      .then(response => {
        const data = response.data;

        // Create a Map to hold one product per category
        const productMap = new Map();

        data.forEach(item => {
          if (!productMap.has(item.category)) {
            productMap.set(item.category, item); // First item from each category
          }
        });

        // Convert map values to array
        const uniqueCategoryProducts = Array.from(productMap.values());
        setPopularProducts(uniqueCategoryProducts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <small className='text-center block mt-5 pt-5'>Quick select</small>
      <h2 className='text-center text-xl font-bold mb-4'>Popular Products</h2>
      <div className="flex  gap-4">
        {popularProducts.map((item, index) => (
          <div key={index} className="card bg-base-100 w-80 shadow-md">
            <figure className="px-10 pt-10">
              <img
                src={item.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                alt={item.name}
                className="rounded-xl h-40 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-sm">{item.description || 'No description available'}</p>
              <div className="card-actions">
                <button className=" btn btn-dark"><Link to={`./foods/${item.id}`}>know more</Link>  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProduct;
