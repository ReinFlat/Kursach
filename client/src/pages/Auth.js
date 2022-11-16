import { Card, Container, Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { login } from "../http/userAPI";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { useContext, useState } from "react";
import {observer} from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
                let data;
                data = await login(email, password);
                user.setUser(data)
                user.setIsAuth(true) 
                navigate(MAIN_ROUTE)
            } catch (e) {
            alert(e.response.data.message)
        }
    }

    return ( 
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                        type = 'password'
                    />
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3 ">
                        <Button 
                        variant="outline-success"
                        onClick={click}
                        >
                            Войти
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
     );
});
 
export default Auth;