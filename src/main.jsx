import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import router from '@/routes/index.jsx'
import axios from 'axios';
import { Provider } from 'react-redux'
import AuthProvider from './Providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import store from './redux/store';

const queryClient = new QueryClient()

axios.defaults.baseURL = 'http://localhost:3500/';
// axios.defaults.baseURL = 'https://easy-travel-server-gamma.vercel.app/';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Provider store={store}>
          <ToastContainer />
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
