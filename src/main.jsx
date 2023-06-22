import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Authprovider from './Provider/Authprovider'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}>
      </RouterProvider>
    </Authprovider>
    <ToastContainer autoClose={1000} />
  </React.StrictMode>,
)
