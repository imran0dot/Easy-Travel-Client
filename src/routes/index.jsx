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
import TourPackage from '../Dashboard/Pages/TourPackage';
import PrivateRoute from '../Providers/PrivateRoute';
import Login from '../pages/Login';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndCondition from '../pages/TermsAndCondition';
import StudentVisaList from '../Dashboard/Pages/StudentVisa';
import TouristVisaList from '../Dashboard/Pages/TouristVisa';
import AddPost from '../Dashboard/Pages/addPost';
import UpdatePost from '../Dashboard/Pages/updatePost';
import DashboardMain from '../Dashboard/Pages/main';

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
                path: `/:url/:params`,
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
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/terms-and-condition",
                element: <TermsAndCondition />
            }
        ]
    },
    {
        path: "/dashboard",
        element:
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>,
        children: [
            // Dashboar Routs  
            {
                path: "/dashboard",
                element: <DashboardMain />
            },
            // Tour package routes 
            {
                path: "/dashboard/tour-packages",
                element: <TourPackage />,
            },
            {
                path: "/dashboardtour-packages/add-new",
                element: <UpdatePost category={true} />

            },
            // Tourist Visa routes 
            {
                path: "/dashboard/tourist-visa",
                element: <TouristVisaList />
            },
            {
                path: "/dashboard/tourist-visa/update/:id",
                element: <UpdatePost />
            },
            // Student Visa routes 
            {
                path: "/dashboard/student-visa",
                element: <StudentVisaList />,
            },
            {
                path: "/dashboard/student-visa/add-new",
                element: <AddPost />,
            },
            {
                path: "/dashboard/student-visa/update/:id",
                element: <UpdatePost />,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;