import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Foods() {
    const { id } = useParams();
    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch('/product.json')
          .then(res => res.json())
          .then(data => {
            const selectedUser = data.find(u => u.id.toString() === id);
            setFood(selectedUser);
          });
      }, [id]);

      if (!food) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p className="text-lg text-gray-600">Loading food details...</p>
          </div>
        );
      }
  return (
    <div className='flex justify-center items-center h-screen'>
      
          <div  className="card bg-base-100 w-80 shadow-md">
            <figure className="px-10 pt-10">
              <img
                src={food.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                alt={food.name}
                className="rounded-xl h-40 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{food.name}</h2>
              <p className="text-sm">{food.description || 'No description available'}</p>
              <div className="card-actions">
                <button className=" btn btn-dark">Add to cart</button>
              </div>
            </div>
          </div>
       
    </div>
  );
}

export default Foods;
