import { useEffect, useState } from "react";
import { Button, Card} from "react-bootstrap";
import { getCount, removeLesson } from "../../../http/teacherAPI";

const TeacherProfileItem = ({lesson, setLessons, lessons}) => {
    let d = new Date(lesson.date_lesson);
    const [count, setCount] = useState([]);
    
    const click = (id) => {
        removeLesson(lesson.lesson_id)
        let newArray = lessons.filter((n) => {return n.lesson_id !== id});
        setLessons(newArray)
    }

    useEffect(() => {
		getCount(lesson.lesson_id).then((data) => {
		setCount(data);
		})
	}, []);

    return ( 
        <Card style={{width: 200, cursor: 'pointer', marginTop: "10px",marginBottom: "10px", marginLeft:"10px"}} bg="light" className="card text-center">
                    {
                        count.map((count, i) => 
                        <Card.Header key={i} count={count}>Записалось: {count.get_countsigned} чел.</Card.Header>)
                    }
                    <Card.Body>
                        <Card.Title>{lesson.discipline_name}</Card.Title>
                        <Card.Text>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Text>
                        <Card.Text>{lesson.time_lesson}</Card.Text>
                        {(d > new Date())
                        ?
                            <Button variant="outline-danger"
                            onClick={() => click(lesson.lesson_id)}>
                                Отменить
                            </Button>
                        :
                            <div></div>
                        }
                        
                    </Card.Body>
            </Card>
     );
}
export default TeacherProfileItem;