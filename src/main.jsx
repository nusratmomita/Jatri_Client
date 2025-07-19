import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Authentication/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'aos/dist/aos.css';
import Aos from 'aos'

Aos.init();

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ToastContainer></ToastContainer>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
)
