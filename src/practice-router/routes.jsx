import AppRouter from "./AppRouter";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <AppRouter />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
];

export default routes;