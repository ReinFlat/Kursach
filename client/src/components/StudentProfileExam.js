import { Card } from "react-bootstrap";

const StudentProfileExam = ({exam}) => {
    let d = new Date(exam.date_exam);
    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="light" className="card text-center">
        <Card.Header>{exam.fio}</Card.Header>
            <Card.Body>
                <Card.Title>{exam.discipline_name}</Card.Title>
                <Card.Text>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</Card.Text>
            </Card.Body>
        </Card> 
    );
}
 
export default StudentProfileExam;