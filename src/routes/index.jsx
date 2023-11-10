import { createBrowserRouter } from 'react-router-dom';
import MainContainer from '@/layouts/Main';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import TouristVisa from '../pages/TouristVisa';
import TourPackages from '../pages/TourPackages';
import StudentVisa from '../pages/StudentVisa';
import AirTicket from '../pages/AirTicket';
import HotelBooking from '../pages/HotelBooking';
import AboutUs from '../pages/AboutUs';
import SingleTourPackage from '../pages/SIngleTourPackage';
import DashboardLayout from '../Dashboard/Layout';
import TourPackageList from '../Dashboard/Pages/TourPackageList';
import PrivateRoute from '../Providers/PrivateRoute';
import Login from '../pages/Login';
import StudentVisaList from '../Dashboard/Pages/StudentVisaList';
import TouristVisaList from '../Dashboard/Pages/TouristVisaList';
import AddTouristVisa from '../Dashboard/Pages/AddTourist';
import AddTourPackage from '../Dashboard/Pages/AddTourPackage';
import AddStudentVisa from '../Dashboard/Pages/AddStudentVisa';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainContainer />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tour-packages",
                element: <TourPackages />,
            },
            {
                path: `/tour-packages/:params`,
                element: <SingleTourPackage />,
            },
            {
                path: "/tourist-visa",
                element: <TouristVisa />,
            },
            {
                path: "/student-visa",
                element: <StudentVisa />
            },
            {
                path: "/air-ticket",
                element: <AirTicket />
            },
            {
                path: "/hotel-booking",
                element: <HotelBooking />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "/dashboard/tour-packages-list",
                element: <TourPackageList />,
            },
            {
                path: "/dashboard/add-tour-package",
                element: <AddTourPackage />
            },
            {
                path: "/dashboard/tourist-visa",
                element: <TouristVisaList />
            },
            {
                path: "/dashboard/add-tourist-visa",
                element: <AddTouristVisa />
            },
            {
                path: "/dashboard/student-visa",
                element: <StudentVisaList />
            },
            {
                path: "/dashboard/add-student-visa",
                element: <AddStudentVisa />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;