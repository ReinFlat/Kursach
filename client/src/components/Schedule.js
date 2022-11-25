import {Container, Table} from 'react-bootstrap';
import ScheduleItem from './ScheduleItem';

const Schedule = () => {
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
                        <td><ScheduleItem/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11:30 - 13:05</td>
                        <td></td>
                        <td><ScheduleItem/></td>
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
                        <td><ScheduleItem/></td>
                    </tr>
                    <tr>
                        <td>15:30 - 17:05</td>
                        <td></td>
                        <td><ScheduleItem/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>17:15 - 18:50</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><ScheduleItem/></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
     );
}
 
export default Schedule;