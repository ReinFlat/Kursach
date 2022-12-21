import { Card } from "react-bootstrap";

const StudentProfileExam = ({exam}) => {
    let d = new Date(exam.date_exam);
    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="light" className="card text-center">
        <Card.Header>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Header>
            <Card.Body>
                <Card.Title>{exam.discipline_name}</Card.Title>
                <Card.Text>{exam.time_exam}</Card.Text>
            </Card.Body>
        </Card> 
    );
}
 
export default StudentProfileExam;