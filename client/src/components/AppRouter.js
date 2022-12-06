import { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { studentRoutes, teacherRoutes, adminRoutes, publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../index';
import jwt_decode from 'jwt-decode';

const AppRouter = () => {
    const {user} = useContext(Context)

    if (user.isAuth===true) {
        var token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
    }

    return ( 
        <Routes>
            {user.isAuth && (decoded.role === "ADMIN") && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {user.isAuth && (decoded.role === "TEACHER") && teacherRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {user.isAuth && (decoded.role === "STUDENT") && studentRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
             <Route path='*' element={<Navigate to={MAIN_ROUTE}/>} />
        </Routes>
     );
}
 
export default AppRouter;