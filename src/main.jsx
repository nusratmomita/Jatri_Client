import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Authentication/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ToastContainer></ToastContainer>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
)
