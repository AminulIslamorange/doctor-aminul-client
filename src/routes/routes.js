import { createBrowserRouter } from 'react-router-dom'
import AddService from '../components/AddService'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home/Home'
import HomeServices from '../components/Home/HomeServices'
import LoadingSpinner from '../components/LoadingSpinner'
import Login from '../components/Login'
import Myreviews from '../components/Myreviews'
import Register from '../components/Register'
import Services from '../components/Services'
import SingleService from '../components/SingleService'
import Main from '../layout/Main'
import PrivateRoute from './PrivateRoute'



const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: '/',
                element: <Home />
               
            },
            {
                path: '/home',
                element: <Home />,
             

            },
            {
                path: '/services',
                element: <Services />,
               
            },
            {
                path: '/add-service',
                element: <PrivateRoute>
                    <AddService />
                </PrivateRoute>,

            },
            {
                path: '/my-reviews',
                element: <PrivateRoute>
                    <Myreviews />
                </PrivateRoute>,

            },

            {
                path: '/service/:id',
                element: <SingleService />,


            },
            {
                path: '/login',
                element: <Login />,

            },
            {
                path: '/register',
                element: <Register />,

            },
        ],
    },
])

export default router
