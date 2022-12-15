import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import {Container, Table} from 'react-bootstrap';
import { Context } from '..';
import ScheduleItem from './ScheduleItem';
import {getAll} from "../http/lessonAPI";

const Schedule = observer(() => {
    const {lesson} = useContext(Context)
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
		getAll().then((data) => {
		setLessons(data);
		})
	}, []);

    return ( 
        <Container>
            <h1 style={{marginTop: '10px'}} className="text-center">Запись на занятие</h1>
            <Table style={{tableLayout: 'fixed', marginTop: '20px'}} striped bordered hover>
                <thead>
                    <tr>
                        <th width={70}></th>
                        <th>Понедельник</th>
                        <th>Вторник</th>
                        <th>Среда</th>
                        <th>Четверг</th>
                        <th>Пятница</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>9:45 - 11:20</td>
                        <td>           
                            {
                                lessons.map(lesson => 
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                )
                            }
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11:30 - 13:05</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>13:45 - 15:20</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>15:30 - 17:05</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>17:15 - 18:50</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
     );
});
 
export default Schedule;