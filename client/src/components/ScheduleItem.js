import { useState } from "react";
import { Button, Card} from "react-bootstrap";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const ScheduleItem = ({lesson}) => {
    const [ width, setWidth ] = useState(0);
    const onChange = e => setWidth(e.target.value);
    const styles = { width: `${width}px` };
    let d = new Date(lesson.date_lesson);


    return ( 
            <Card bg="light" style={{styles}} className="card text-center">
                <Card.Header>{lesson.fio}</Card.Header>
                    <Card.Body>
                        <Card.Title>{lesson.discipline_name}</Card.Title>
                        <Card.Text>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</Card.Text>
                        <Button variant="outline-success">
                            Записаться
                        </Button>
                    </Card.Body>
            </Card>
     );
}
 
export default ScheduleItem;