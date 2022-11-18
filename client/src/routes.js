import AddLesson from "./pages/AddLesson";
import Auth from "./pages/Auth"
import SignLesson from "./pages/SignLesson"
import Main from "./pages/Main"
import { SIGNL_ROUTE, ADDL_ROUTE, MAIN_ROUTE, LOGIN_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: ADDL_ROUTE,
        Component: AddLesson
    },
    {
        path: SIGNL_ROUTE,
        Component: SignLesson
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]