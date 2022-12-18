import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import jwt_decode from 'jwt-decode';
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { getOne } from "../http/lessonAPI";
import StudentProfile from "../components/StudentProfile";
import TeacherProfile from "../components/TeacherProfile";

const Profile = () => {
    const {user} = useContext(Context);
    const [teachers, setTeachers] = useState([]);
    
    if (user.isAuth===true) {
        var token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
        var role = decoded.role;
    }

    useEffect(() => {
		getOne(decoded.id).then((data) => {
            console.log(data);
		setTeachers(data);
		})
	}, []);

    return ( 
        <Container>
            <Row>
                {(role === "TEACHER")
                    ?
                    teachers.map((teacher, i) =>
                        (<TeacherProfile key={i} teacher={teacher}/>)
                    )
                    :
                    (role === "STUDENT")
                    ?
                    <StudentProfile/>
                    :
                    <ButtonGroup className="d-flex justify-content-center align-items-center"
                    style={{height: window.innerHeight - 54}}>
                        <Button variant={"outline-dark"}>Профиль студента</Button>
                        <Button variant={"outline-dark"}>Профиль учителя</Button>
                    </ButtonGroup>
                }
            </Row>
        </Container>
     );
}
 
export default Profile;