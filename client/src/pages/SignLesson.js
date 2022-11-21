import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Schedule from '../components/Schedule';
const SignLesson = () => {
    return ( 
        <Container>
            <Row>
                <Schedule/>
            </Row>
        </Container>
     );
}
 
export default SignLesson;