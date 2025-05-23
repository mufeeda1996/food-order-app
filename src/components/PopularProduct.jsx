import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function PopularProduct() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    axios.get('/product.json')
      .then(response => {
        const data = response.data;

        
        const productMap = new Map();

        data.forEach(item => {
          if (!productMap.has(item.category)) {
            productMap.set(item.category, item); 
          }
        });

        
        const uniqueCategoryProducts = Array.from(productMap.values());
        setPopularProducts(uniqueCategoryProducts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="px-4 md:px-10">
  <small className="text-center block mt-5 pt-5 text-sm md:text-base">Quick select</small>

  <h2 className="text-center text-xl md:text-3xl font-bold mb-4">
    Popular Products
  </h2>

  <div className="flex flex-col md:flex-row  justify-center gap-4">
    {popularProducts.map((item, index) => (
      <div
        key={index}
        className="card bg-base-100 w-full sm:w-72 md:w-80 shadow-md"
      >
        <figure className="px-10 pt-10">
          <img
            src={
              item.image ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt={item.name}
            className="rounded-xl h-40 object-cover w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <p className="text-sm">
            {item.description || "No description available"}
          </p>
          <div className="card-actions">
            <button className="btn btn-dark">
              <Link className="link" to={`./foods/${item.id}`}>
                know more
              </Link>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default PopularProduct;
