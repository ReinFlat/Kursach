import { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Dropdown, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale} from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import { createLesson } from "../http/lessonAPI";
registerLocale('ru', ru)

const LessonAdd = ({teacher}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('');

    const getData = () => {
        createLesson({
            date_lesson: startDate,
            time_lesson: time,
            discipline_id: teacher.discipline_id
        })
    };

    return ( 
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>

            <Card style={{width: 600}} className="p-5">

            <h2 className="m-auto">Добавление занятия</h2>
            
                <Form className="mt-3 d-flex">
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{time || 'Выберите время'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            
                            <Dropdown.Item onClick={() => setTime("09:45:00")}>
                                9:45 - 11:20
                            </Dropdown.Item>
                            <Dropdown.Item  onClick={() => setTime("11:30:00")}>
                                11:30 - 13:05
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setTime("13:45:00")}>
                                13:45 - 15:20
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setTime("15:30:00")}>
                                15:30 - 17:05
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setTime("17:15:00")}>
                                17:15 - 18:50
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        className="mt-2 mb-2" 
                        disabled
                        placeholder={teacher.fio}
                    />
                </Form>
                <Form.Control
                    disabled
                    className="mt-3"
                    width={200}
                    placeholder={teacher.discipline_name}
                />
                <Form className="d-flex mt-4">
                    <DatePicker locale="ru" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <Button variant="success" onClick={() => getData()} >Добавить</Button>
                </Form>
            </Card>
        </Container>
     );
}
 
export default LessonAdd;