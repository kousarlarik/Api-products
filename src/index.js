import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import App from './App'
import ProductDetails from './component/productdetail/ProductDetails';
import Layout from './component/layout/layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Layout />,
    children: [
      {
        path: "",
        element: < App />
      },
      {
        path: "product-details/:product_id",
        element: <ProductDetails />
      }
    ],
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);