import {Navbar, Nav, Button, Container} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import React , {useContext} from 'react';
import {Context} from "../index";
import { useNavigate } from 'react-router-dom';
import {LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', null)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={MAIN_ROUTE}>Повышение квалификации</Navbar.Brand>
                {user.isAuth 
                ?
                    <Nav className="ml-auto">
                        <Nav.Link href="/signl">Записаться на занятие</Nav.Link>
                        <Nav.Link href="/addl">Добавить занятие</Nav.Link>
                        <Button variant={"outline-light"} style={{marginLeft:'10px'}} onClick={() => logOut()}
                            >Выйти
                        </Button>
                    </Nav>
                :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} style={{marginLeft:'10px'}} onClick={() => navigate(LOGIN_ROUTE)}
                            >Войти
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;