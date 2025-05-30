import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Userroot from './root/Userroot.jsx';
import Adminroot from './root/Adminroot.jsx';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './styles/global.css'
import Foods from './components/Foods.jsx';
import CategoryDishes from './components/CategoryDishes.jsx';

const router = createBrowserRouter([
  
       
  {
    path: '/',
    element: <Userroot />,
    children: [
      {
        index: '/', 
        element: <App />,
      },
      {
        path: "foods/:id",
        element: <Foods/>,
      },
      {
        path: "/category/dishes/:categoryName",
        element: <CategoryDishes/>
      },
      // {
      //   path: "users/userdetails/:id", 
      //   element: <Userdetails />,
      // }
    ],
  }
,  
  {
    path: '/admin',
    element: <Adminroot />,
  children: [
    {
      index: '/admin', 
      element: <App />,
    },
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
