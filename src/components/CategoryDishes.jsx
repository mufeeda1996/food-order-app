import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoryDishes() {
  const { categoryName } = useParams();
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/product.json')
      .then(response => {
        const filteredDishes = response.data.filter(
          item => item.category === categoryName
        );
        setDishes(filteredDishes);
      })
      .catch(error => {
        console.error('Error fetching dishes:', error);
      });
  }, [categoryName]);

  // 🟡 Search filtering (case-insensitive match on dish name)
  const filteredData = dishes.filter(dish =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <div className='flex justify-center items-center  flex-wrap gap-4 dishes'>
  {filteredData.map((dish, index) => (
    <div key={index} className="card bg-base-100 w-80 shadow-md">
      <figure className="px-10 pt-10">
        <img
          src={dish.image || "https://tse2.mm.bing.net/th/id/OIP.6gJLB6gSIwf9yzUF6ISrhAHaHa?rs=1&pid=ImgDetMain"}
          alt={dish.name}
          className="rounded-xl h-40 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dish.name}</h2>
        <div className="card-actions">
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    </div>
  ))}
</div>


</>
  );
}

export default CategoryDishes;
