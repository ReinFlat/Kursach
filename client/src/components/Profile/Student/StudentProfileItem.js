import { Card } from "react-bootstrap";

const StudentProfileItem = ({signed}) => {
    let d = new Date(signed.date_lesson);

    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="white" className="card text-center">
                <Card.Header style={{backgroundColor: "white"}}>{signed.fio}</Card.Header>
                    <Card.Body>
                        <Card.Title>{signed.discipline_name}</Card.Title>
                        <Card.Text>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Text>
                        <Card.Text>{signed.time_lesson}</Card.Text>
                    </Card.Body>
            </Card>
     );
}
 
export default StudentProfileItem;