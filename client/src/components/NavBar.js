import {Navbar, Nav, Button, Container, ButtonGroup} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import React , {useContext} from 'react';
import {Context} from "../index";
import { useNavigate } from 'react-router-dom';
import {LOGIN_ROUTE, MAIN_ROUTE, PROF_ROUTE } from '../utils/consts';
import jwt_decode from 'jwt-decode';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', null)
    }

    if (user.isAuth===true) {
        var token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
        var role = decoded.role;
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={MAIN_ROUTE}>Повышение квалификации</Navbar.Brand>
                {user.isAuth 
                ? 
                    role==='ADMIN'
                    ?
                    <Nav className="ml-auto">
                        <Nav.Link href="/signl">Записаться на занятие</Nav.Link>
                        <Nav.Link href="/addl">Добавить занятие</Nav.Link>
                        <ButtonGroup>
                            <Button variant={"outline-light"} style={{marginLeft:'10px'}} onClick={() => navigate(PROF_ROUTE)}>
                                Личный кабинет
                            </Button>
                            <Button variant={"outline-light"} onClick={() => logOut()}
                                >Выйти
                            </Button>
                        </ButtonGroup>
                    </Nav>
                    :
                    role==='TEACHER'
                    ?
                    <Nav className="ml-auto">
                        <Nav.Link href="/addl">Добавить занятие</Nav.Link>
                        <ButtonGroup>
                            <Button variant={"outline-light"} style={{marginLeft:'10px'}} onClick={() => navigate(PROF_ROUTE)}>
                                Личный кабинет
                            </Button>
                            <Button variant={"outline-light"} onClick={() => logOut()}
                                >Выйти
                            </Button>
                        </ButtonGroup>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link href="/signl">Записаться на занятие</Nav.Link>
                        <ButtonGroup>
                            <Button variant={"outline-light"} style={{marginLeft:'10px'}} onClick={() => navigate(PROF_ROUTE)}>
                                Личный кабинет
                            </Button>
                            <Button variant={"outline-light"} onClick={() => logOut()}
                                >Выйти
                            </Button>
                        </ButtonGroup>
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