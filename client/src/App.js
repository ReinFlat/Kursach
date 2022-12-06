import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import {BrowserRouter} from "react-router-dom"
import { Context } from '.';
import AppRouter from "./components/AppRouter"
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';
import jwt_decode from 'jwt-decode';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, []);

  if(loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
});

export default App;
