import React from 'react'
import ReactDOM from 'react-dom/client'
import Login  from './login.jsx'
import Client from './Client.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/main",
    element: <Client />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
)
