import { Col, Container, Row } from 'react-bootstrap';
import teacher1 from '../assets/teacher1.png'
import teacher2 from '../assets/teacher2.png'
import teacher3 from '../assets/teacher3.png'

const Teachers = () => {
    return ( 
        <Container className="mt-5 mb-5">
            <h2>
                Наши преподаватели
            </h2>
            <Row>
                <Col>
                    <div>
                        <img src={teacher1} height={400} width={300}/>
                        <h3>Михал Палыч</h3>
                        <p>Эксперт по современной разработке месторождений. Один из наших сильнейших преподавателей</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={teacher2} height={400} width={300}/>
                        <h3>Вадим Лёха</h3>
                        <p>Представитель группы Лес</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={teacher3} height={400} width={300}/>
                        <h3>Марина</h3>
                        <p>Марина — потомственный педагог, спец по безопасности технологических процессов и производств</p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Teachers;