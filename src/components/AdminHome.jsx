import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

function AdminHome() {
  const [category, setCategory] = useState('1');
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [food, setFood] = useState(false);

  const [categoryName, setCategoryName] = useState('');
  const [categoryList, setCategoryList] = useState(() => {
    return JSON.parse(localStorage.getItem('categories')) || [];
  });

  const [foodData, setFoodData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    category: ''
  });

  const [foodList, setFoodList] = useState(() => {
    return JSON.parse(localStorage.getItem('foods')) || [];
  });

  const dashboardItems = [
    { id: '1', label: 'Category Management' },
    { id: '2', label: 'Food Management' }
  ];

  const handleDeleteCategoryClick = () => {
    setShowCategoryForm(true);
    setShowProductList(true);
  };

  const handleAddCategory = () => {
    if (categoryName.trim() === '') return;
    const updatedList = [...categoryList, categoryName];
    setCategoryList(updatedList);
    localStorage.setItem('categories', JSON.stringify(updatedList));
    setCategoryName('');
  };

  const handleAddFood = () => {
    if (!foodData.name || !foodData.category) return;
    const updatedFoods = [...foodList, foodData];
    setFoodList(updatedFoods);
    localStorage.setItem('foods', JSON.stringify(updatedFoods));
    setFoodData({
      name: '',
      description: '',
      image: '',
      price: '',
      category: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h1>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Manage</h2>
          <ul className="space-y-3">
            {dashboardItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setCategory(item.id);
                  setShowCategoryForm(false);
                  setShowProductList(false);
                  setFood(false);
                }}
                className={`p-3 rounded cursor-pointer font-medium ${
                  category === item.id
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200 text-gray-800'
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="w-3/4 bg-white p-6 rounded shadow-md">
          {category === '1' && (
            <>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Category Management</h2>
              <div className="flex gap-4 mb-4">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => setShowCategoryForm(true)}
                >
                  <FaPlus /> Add Category
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={handleDeleteCategoryClick}
                >
                  <FaTrash /> Show Categories
                </button>
              </div>

              {showCategoryForm && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Add Category Form</h3>
                  <input
                    type="text"
                    placeholder="Enter Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddCategory}
                  >
                    Save
                  </button>
                </div>
              )}

              {showProductList && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">All Categories</h3>
                  <ul className="list-disc list-inside">
                    {categoryList.map((cat, i) => (
                      <li key={i}>{cat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {category === '2' && (
            <>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Food Management</h2>
              <div className="flex gap-4">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => setFood(true)}
                >
                  <FaPlus /> Add Food
                </button>
              </div>

              {food && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Add Food</h3>
                  {['name', 'description', 'image', 'price', 'category'].map((field) => (
                    <input
                      key={field}
                      type="text"
                      placeholder={field}
                      value={foodData[field]}
                      onChange={(e) =>
                        setFoodData({ ...foodData, [field]: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                  ))}
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddFood}
                  >
                    Save
                  </button>
                </div>
              )}

              {foodList.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mt-4 mb-2">All Foods</h3>
                  <ul className="list-disc list-inside">
                    {foodList.map((item, i) => (
                      <li key={i}>
                        {item.name} - {item.category} - ₹{item.price}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
