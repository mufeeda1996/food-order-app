import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // ✅ Import Provider
import { store } from './redux/store';  // ✅ Import your Redux store

import Userroot from './root/Userroot.jsx';
import Adminroot from './root/Adminroot.jsx';
import UserApp from './UserApp.jsx';
import AdminApp from './AdminApp.jsx';
import Checkout from './components/Checkout';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './styles/global.css';
import Foods from './components/Foods.jsx';
import CategoryDishes from './components/CategoryDishes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Userroot />,
    children: [
      {
        index: '/',
        element: <UserApp />,
      },
      {
        path: "foods/:id",
        element: <Foods />,
      },
      {
        path: "/category/dishes/:categoryName",
        element: <CategoryDishes />
      },
      {path: "/checkout" ,
      element: <Checkout />
     }
    ],
  },
  {
    path: '/admin',
    element: <Adminroot />,
    children: [
      {
        index: '/admin',
        element: <AdminApp />,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
