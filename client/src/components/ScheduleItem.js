import { useState } from "react";
import { Button, Card} from "react-bootstrap";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const ScheduleItem = ({lesson}) => {
    const [ width, setWidth ] = useState(0);
    const onChange = e => setWidth(e.target.value);
    const styles = { width: `${width}px` };

    return ( 
            <Card bg="light" style={{styles}} className="card text-center">
                <Card.Header>Михал Палыч</Card.Header>
                    <Card.Body>
                        <Card.Title>Бурение очка</Card.Title>
                        <Card.Text>{lesson.date_lesson}</Card.Text>
                        <Button variant="outline-success">
                            Записаться
                        </Button>
                    </Card.Body>
            </Card>
     );
}
 
export default ScheduleItem;