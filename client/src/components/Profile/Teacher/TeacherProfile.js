import { Card, Container, Row } from "react-bootstrap";
import TeacherProfileItem from "./TeacherProfileItem";
import {getAll} from "../../../http/lessonAPI";
import { useEffect, useState } from "react";
import { getExam } from "../../../http/examAPI";
import TeacherProfileExam from "./TeacherProfileExam";

const TeacherProfile = ({teacher}) => {
    const [lessons, setLessons] = useState([]);
    const [exams, setExams] = useState([]);
    
    useEffect(() => {
		getAll().then((data) => {
		setLessons(data);
		})
	}, []);

    useEffect(() => {
        getExam().then((data) => {
            setExams(data);
        })
    }, [])


    return ( 
        <Container style={{marginBottom: "500px"}}>
            <Card className="d-flex justify-content-center align-items-center">
                <h1>{teacher.fio}</h1>
                <h2>{teacher.discipline_name}</h2>
            </Card>
            <Row className="d-flex m-3">
                <h2>Ближайшие занятия:</h2>
                {
                 lessons.map((lesson,i) => {
                        const uslovie = (lesson.fio === teacher.fio);
                        return (uslovie &&
                        (<TeacherProfileItem setLessons={setLessons} lessons={lessons} key={i} lesson={lesson}/> ))
                    })
                }
            </Row>
            <Row className="d-flex m-3">
                <h2>Ближайшие экзамены:</h2>
                {
                 exams.map((exam,i) => {
                        const uslovie = (exam.discipline_id === teacher.discipline_id);
                        return (uslovie &&
                        (<TeacherProfileExam key={i} setExams={setExams} exams={exams} exam={exam}/> ))
                    })
                }
            </Row>
        </Container>
     );
}
 
export default TeacherProfile;