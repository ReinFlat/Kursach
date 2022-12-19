import { useContext, useState } from "react";
import { Button, Card} from "react-bootstrap";
import { signOne } from "../http/studentAPI";
import jwt_decode from 'jwt-decode';
import { Context } from "..";

const ScheduleItem = ({lesson}) => {
    const [ width] = useState(0);
    const styles = { width: `${width}px` };
    let d = new Date(lesson.date_lesson);

    const {user} = useContext(Context)
    if (user.isAuth===true) {
        var token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
    }

    const addBasket = () => {
        signOne({
            lesson_id: lesson.lesson_id,
            user_id: decoded.id
        })
    };

    return ( 
            <Card bg="light" style={{styles}} className="card text-center">
                <Card.Header>{lesson.fio}</Card.Header>
                    <Card.Body>
                        <Card.Title>{lesson.discipline_name}</Card.Title>
                        <Card.Text>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</Card.Text>
                        <Button variant="outline-success"
                        onClick={() => addBasket()}>
                            Записаться
                        </Button>
                    </Card.Body>
            </Card>
     );
}
 
export default ScheduleItem;