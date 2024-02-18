import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from './pages/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route
          path="/"
          element={<App />}
      >
          <Route index element={<Home />}/>
          
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
