import AddLesson from "./pages/AddLesson";
import Auth from "./pages/Auth"
import SignLesson from "./pages/SignLesson"
import Main from "./pages/Main"
import { SIGNL_ROUTE, ADDL_ROUTE, MAIN_ROUTE, LOGIN_ROUTE} from "./utils/consts";

export const teacherRoutes = [
    {
        path: ADDL_ROUTE,
        Component: AddLesson
    }
]

export const studentRoutes = [
    {
        path: SIGNL_ROUTE,
        Component: SignLesson
    },
    {
        path: ADDL_ROUTE,
        Component: AddLesson
    }
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