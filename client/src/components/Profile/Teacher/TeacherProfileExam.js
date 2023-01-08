import { useEffect, useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { addMark, getMark, removeExam } from "../../../http/teacherAPI";

const TeacherProfileExam = ({exam, setExams, exams}) => {
    const [marks, setMarks] = useState([]);
    const [newMark, setNewMark] = useState('')
    let d = new Date(exam.date_exam);

    const click = (id) => {
        removeExam(exam.exam_id)
        let newArray = exams.filter((n) => {return n.exam_id !== id});
        setExams(newArray)
    }

    useEffect(() => {
        getMark(exam.exam_id).then((data) => {
            setMarks(data);
            console.log(data[0])
        })
    }, [])

    const add = (id) => {
        if(newMark === ''){
            return(alert("Введите количество баллов"))
        }
        addMark({
            exam_id: id,
            mark: newMark
        })
        window.location.reload();
    }

    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="light" className="card text-center">
        <Card.Header>{exam.fio}</Card.Header>
            <Card.Body>
                <Card.Title>{exam.discipline_name}</Card.Title>
                <Card.Text>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Text>
                <Card.Text>{exam.time_exam}</Card.Text>
                {(d > new Date())
                ?
                    <Button variant="outline-danger"
                    onClick={() => click(exam.exam_id)}>
                        Отменить
                    </Button>
                :
                    (marks[0]===undefined)
                    ?
                        <div>
                        <h5>Оценка:</h5>
                        <InputGroup>
                        <FormControl type="number" onChange={(e) => setNewMark(e.target.value)}></FormControl>
                        <Button variant="outline-success" onClick={() => add(exam.exam_id)}>+</Button>
                        </InputGroup>
                        </div>
                    :
                        <div>
                        <h5>Оценка:</h5>
                        <h6>{marks[0].mark} балл[ов]</h6>
                        </div>
                }
                
            </Card.Body>
        </Card> 
    );
}
 
export default TeacherProfileExam;