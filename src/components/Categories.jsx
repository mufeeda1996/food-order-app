import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/product.json')
      .then(response => {
        const data = response.data;
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {categories.map((category, index) => (
      <div key={index}>
        <div className="category-card text-xl font-semibold"><Link to={`/category/dishes/${category}`}>{category}</Link>
</div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Categories;
