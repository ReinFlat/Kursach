import { observer } from 'mobx-react-lite';
import React from 'react';
import CarouselInfo from '../components/CarouselInfo';
import {Container, Row } from 'react-bootstrap';
import Advantages from '../components/Advantages';
import Teachers from '../components/Teachers';

const Main = observer(() => {
    return ( 
        <Container>
            <Row className="mt-2">
                <CarouselInfo/>
                <Advantages/>
                <Teachers/>
            </Row>
        </Container>
     );
});
 
export default Main;