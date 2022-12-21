import { useEffect, useState } from "react";
import { Button, Card, Container, Dropdown, Form } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale} from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import { createExam } from "../http/examAPI";
import { createLesson } from "../http/lessonAPI";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { getAll } from "../http/studentAPI";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
registerLocale('ru', ru)

const LessonAdd = ({teacher}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [examlesson, setExamlesson] = useState('Добавление занятия');
    const [allstudents, setAllstudents] = useState([]);
    const [name, setName] = useState('');
    const [studentid, setStudentid] = useState('');

    useEffect(() => {
		getAll().then((data) => {
		setAllstudents(data);
		})
	}, []);

    const click = () => {
        if(examlesson === "Добавление экзамена"){
            createExam({
                date_exam: startDate, 
                time_exam: time, 
                user_id: studentid, 
                discipline_id: teacher.discipline_id
            })
        }
        if(examlesson === 'Добавление занятия'){
            createLesson({
                date_lesson: startDate,
                time_lesson: time,
                discipline_id: teacher.discipline_id
            })
        }
    };

    return ( 
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>

            <Card style={{width: 600}} className="p-5">

            <h2 className="m-auto">{examlesson || 'Добавление занятия'}</h2>
            
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
                    {(examlesson === "Добавление занятия")
                        ?
                            <Button className="mt-4" variant="outline-dark" onClick={() => setExamlesson("Добавление экзамена")}>Добавить экзамен</Button>
                        :
                        <Form className="d-flex mt-4 justify-content-between">
                            <Button variant="outline-dark" onClick={() => setExamlesson("Добавление занятия")}>Добавить занятие</Button>
                            <Dropdown>
                                <Dropdown.Toggle>{ name ||"Выберите студента"}</Dropdown.Toggle>
                                <DropdownMenu>
                                    {
                                        allstudents.map((allstudents, i) => 
                                        <DropdownItem key={i} allstudents={allstudents} onClick={() => setName(allstudents.fio) + setStudentid(allstudents.user_id)}>
                                            {allstudents.fio}
                                        </DropdownItem>)
                                    }
                                </DropdownMenu>
                            </Dropdown>
                        </Form>
                    }
                    <Form className="d-flex mt-4">
                    <DatePicker locale="ru" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <Button variant="success" onClick={() => click()} >Добавить</Button>
                </Form>
            </Card>
        </Container>
     );
}
 
export default LessonAdd;