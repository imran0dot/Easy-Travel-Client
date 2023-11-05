import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import router from '@/routes/index.jsx'
import axios from 'axios';
import AuthProvider from './Providers/AuthProvider';


axios.defaults.baseURL = 'http://localhost:3000/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
