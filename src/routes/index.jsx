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
import AddTourPackage from '../Dashboard/Pages/AddTourPackage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndCondition from '../pages/TermsAndCondition';
import StudentVisaList from '../Dashboard/Pages/StudentVisa/list';
import AddStudentVisa from '../Dashboard/Pages/StudentVisa/addNew';
import TouristVisaList from '../Dashboard/Pages/TouristVisa/list';
import AddTouristVisa from '../Dashboard/Pages/TouristVisa/addNew';

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
                path: "/dashboard/tourist-visa/add-new",
                element: <AddTouristVisa />
            },
            {
                path: "/dashboard/student-visa",
                element: <StudentVisaList />,
            },
            {
                path: "/dashboard/student-visa/add-new",
                element: <AddStudentVisa />,
            },
            {
                path: "/dashboard/student-visa/update-one/:id",
                element: <AddStudentVisa />,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;