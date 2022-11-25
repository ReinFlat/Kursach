import { useState } from "react";
import { Button, Card, Container, Dropdown, Form} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale} from  "react-datepicker";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)
const AddLesson = () => {
    const [startDate, setStartDate] = useState(new Date());
    return ( 
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">Добавление занятия</h2>
                <Form className="mt-3 d-flex">
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите время</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                9:45 - 11:20
                            </Dropdown.Item>
                            <Dropdown.Item>
                                11:30 - 13:05
                            </Dropdown.Item>
                            <Dropdown.Item>
                                13:45 - 15:20
                            </Dropdown.Item>
                            <Dropdown.Item>
                                15:30 - 17:05
                            </Dropdown.Item>
                            <Dropdown.Item>
                                17:15 - 18:50
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={{marginLeft: 135}} className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите дисциплину</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                Бурение очка
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Безопасность анальных процессов
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
                <Form.Control
                    className="mt-3"
                    width={200}
                    placeholder="Введите ФИО"
                />
                <Form className="d-flex mt-4">
                    <DatePicker locale="ru" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <Button variant="success">Добавить</Button>
                </Form>
            </Card>
        </Container>
     );
}
 
export default AddLesson;