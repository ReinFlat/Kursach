import { Container, Row } from "react-bootstrap";
import jwt_decode from 'jwt-decode';
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { getOne } from "../http/teacherAPI";
import StudentProfile from "../components/Profile/Student/StudentProfile";
import TeacherProfile from "../components/Profile/Teacher/TeacherProfile";
import AdminProfile from "../components/Profile/Admin/AdminProfile";

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
                    <AdminProfile/>
                }
            </Row>
        </Container>
     );
}
 
export default Profile;