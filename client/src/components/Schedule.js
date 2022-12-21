import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import {Container, Table} from 'react-bootstrap';
import ScheduleItem from './ScheduleItem';
import {getAll} from "../http/lessonAPI";

const Schedule = observer(() => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
		getAll().then((data) => {
            console.log(data)
		setLessons(data);
		})
	}, []);

    return ( 
        <Container>
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
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    const uslovie = (lesson.time_lesson === '09:45:00' && n===1);
                                    return (uslovie &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> ))
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '09:45:00' && n===2) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '09:45:00' && n===3) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '09:45:00' && n===4) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '09:45:00' && n===5) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>11:30 - 13:05</td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '11:30:00' && n===1) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '11:30:00' && n===2) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '11:30:00' && n===3) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '11:30:00' && n===4) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '11:30:00' && n===5) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>13:45 - 15:20</td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '13:45:00' && n===1) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '13:45:00' && n===2) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '13:45:00' && n===3) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '13:45:00' && n===4) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '13:45:00' && n===5) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>15:30 - 17:05</td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '15:30:00' && n===1) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '15:30:00' && n===2) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '15:30:00' && n===3) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '15:30:00' && n===4) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '15:30:00' && n===5) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>17:15 - 18:50</td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '17:15:00' && n===1) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '17:15:00' && n===2) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '17:15:00' && n===3) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '17:15:00' && n===4) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                        <td>
                            {
                                lessons.map(lesson => {
                                    let d = new Date(lesson.date_lesson);
                                    let n = d.getDay();
                                    return (lesson.time_lesson === '17:15:00' && n===5) &&
                                    (<ScheduleItem key={lesson.id} lesson={lesson}/> )
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
     );
});
 
export default Schedule;