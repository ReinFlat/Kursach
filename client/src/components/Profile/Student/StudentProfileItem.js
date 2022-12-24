import { Button, Card } from "react-bootstrap";
import { removeSign } from "../../../http/studentAPI";

const StudentProfileItem = ({signed, signeds, setSigned}) => {
    let d = new Date(signed.date_lesson);

    const click = (id) => {
        removeSign(signed.lesson_id)
        let newArray = signeds.filter((n) => {return n.lesson_id != id});
        setSigned(newArray)
    }

    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="white" className="card text-center">
                <Card.Header style={{backgroundColor: "white"}}>{signed.fio}</Card.Header>
                    <Card.Body>
                        <Card.Title>{signed.discipline_name}</Card.Title>
                        <Card.Text>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Text>
                        <Card.Text>{signed.time_lesson}</Card.Text>
                        <Button variant="outline-danger"
                            onClick={() => click(signed.lesson_id)}>
                                Отменить
                            </Button>
                    </Card.Body>
            </Card>
     );
}
 
export default StudentProfileItem;