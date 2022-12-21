import { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import { getCount } from "../../../http/lessonAPI";

const TeacherProfileItem = ({lesson}) => {
    let d = new Date(lesson.date_lesson);
    const [count, setCount] = useState([]);

    useEffect(() => {
		getCount(lesson.lesson_id).then((data) => {
		setCount(data);
		})
	}, []);
    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="light" className="card text-center">
                    {
                        count.map((count, i) => 
                        <Card.Header key={i} count={count}>Записалось: {count.count} чел.</Card.Header>)
                    }
                    <Card.Body>
                        <Card.Title>{lesson.discipline_name}</Card.Title>
                        <Card.Text>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Text>
                        <Card.Text>{lesson.time_lesson}</Card.Text>
                        
                    </Card.Body>
            </Card>
     );
}
export default TeacherProfileItem;