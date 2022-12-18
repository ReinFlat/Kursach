import { Card, Container, Row } from "react-bootstrap";
import TeacherProfileItem from "./TeacherProfileItem";
import {getAll} from "../http/lessonAPI";
import { useEffect, useState } from "react";

const TeacherProfile = ({teacher}) => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
		getAll().then((data) => {
            console.log(data)
		setLessons(data);
		})
	}, []);

    return ( 
        <Container style={{marginBottom: "300px"}}>
            <Card className="d-flex justify-content-center align-items-center">
                <h1>{teacher.fio}</h1>
                <h2>{teacher.discipline_name}</h2>
            </Card>
            <Row className="d-flex m-3">
                {
                 lessons.map((lesson,i) => {
                        const uslovie = (lesson.fio === teacher.fio);
                        return (uslovie &&
                        (<TeacherProfileItem key={i} lesson={lesson}/> ))
                    })
                }
            </Row>
        </Container>
     );
}
 
export default TeacherProfile;