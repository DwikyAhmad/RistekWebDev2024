import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from './pages/HomePage/Home.jsx';
import Login from './pages/users/Login.jsx';
import Register from './pages/users/Register.jsx';
import {loader as HomeLoader} from './pages/HomePage/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route index element={<Home />} loader={HomeLoader}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
