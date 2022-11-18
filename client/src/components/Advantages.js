import { Col, Container, Row } from "react-bootstrap";

const Advantages = () => {
    return ( 
        <Container className="mt-5">
            <h2>
                Почему нас выбирают?
            </h2>
            <Row>
                    <Col>
                        <i>
                            <img src="https://ucngk.ru/wp-content/themes/laika/src/image/adv1.svg" alt=""/>
                        </i>
                        <div>
                            <p className="fw-bold">
                                Онлайн-обучение
                            </p>
                            <p>
                                Предоставляем возможность проходить обучение в дистанционном формате
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <i>
                            <img src="https://ucngk.ru/wp-content/themes/laika/src/image/adv2.svg" alt=""/>
                        </i>
                        <div>
                            <p className="fw-bold">
                                Трудоустройство
                            </p>
                            <p>
                                По окончанию обучения помогаем с рабочим местом
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <i>
                            <img src="https://ucngk.ru/wp-content/themes/laika/src/image/adv3.svg" alt=""/>
                        </i>
                        <div>
                            <p className="fw-bold">
                                Эффективные программы
                            </p>
                            <p>
                                Темы изучаются по специальным программам
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <i>
                            <img src="https://ucngk.ru/wp-content/themes/laika/src/image/adv4.svg" alt=""/>
                        </i>
                        <div>
                            <p className="fw-bold">
                                Доступность
                            </p>
                            <p>
                                Образовательная программа уложена в один учебный год
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <i>
                            <img src="https://ucngk.ru/wp-content/themes/laika/src/image/adv5.svg" alt=""/>
                        </i>
                        <div>
                            <p className="fw-bold">
                                Удостоверение
                            </p>
                            <p>
                                По окончанию обучения выдаются документы соответствующего образца
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <i>
                            <img src="https://ucngk.ru/wp-content/themes/laika/src/image/adv6.svg" alt=""/>
                        </i>
                        <div>
                            <p className="fw-bold">
                                Профессионализм
                            </p>
                            <p>
                                В изучении материалов вам будут помогать профессионалы своего дела 
                            </p>
                        </div>
                    </Col>
            </Row>
        </Container>
    );
}
 
export default Advantages;