import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Roues.jsx';
import AuthProvider from './Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='max-w-screen-xl mx-auto '>
    <RouterProvider router={router} />
    </div>
    <ToastContainer/>
    </AuthProvider>
  </React.StrictMode>,
)
