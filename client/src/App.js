import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import {BrowserRouter} from "react-router-dom"
import { Context } from '.';
import AppRouter from "./components/AppRouter"
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = observer(() => {
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=<3a1a2903-1e56-44e6-8754-b628cb64d32a>" type="text/javascript"></script>
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
