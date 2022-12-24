import { Button, Card } from "react-bootstrap";
import { removeExam } from "../../../http/teacherAPI";

const TeacherProfileExam = ({exam, setExams, exams}) => {
    let d = new Date(exam.date_exam);

    const click = (id) => {
        removeExam(exam.exam_id)
        let newArray = exams.filter((n) => {return n.exam_id !== id});
        setExams(newArray)
    }

    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="light" className="card text-center">
        <Card.Header>{exam.fio}</Card.Header>
            <Card.Body>
                <Card.Title>{exam.discipline_name}</Card.Title>
                <Card.Text>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Text>
                <Card.Text>{exam.time_exam}</Card.Text>
                <Button variant="outline-danger"
                            onClick={() => click(exam.exam_id)}>
                                Отменить
                            </Button>
            </Card.Body>
        </Card> 
    );
}
 
export default TeacherProfileExam;