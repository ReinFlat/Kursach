import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PersonalBar from "./PersonalBar";
import StudentProfileExam from "./StudentProfileExam";
import StudentProfileItem from "./StudentProfileItem";
import jwt_decode from 'jwt-decode';
import { Context } from "..";
import { getOne, getSigned } from "../http/studentAPI";
import { getExam } from "../http/studentAPI";

const StudentProfile = () => {
    const {user} = useContext(Context);
    const [student, setStudent] = useState([]);
    const [signed, setSigned] = useState([]);
    const [exam, setExam] = useState([]);

    if (user.isAuth===true) {
        var token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
        var role = decoded.role;
    }

    useEffect(()=> {
        getOne(decoded.id).then((data) => {
            setStudent(data);
        })
    }, []);

    useEffect(() => {
        getSigned(decoded.id).then((data) => {
            console.log(data);
            setSigned(data);
        })
    }, [])

    useEffect(() => {
        getExam(decoded.id).then((data) => {
            setExam(data);
        })
    }, [])

    return (
        <Container className="mt-4 bg-light">
            <Row >
                <Col md={3} className="bg-white">
                    {
                        student.map((student, i) => 
                            <PersonalBar key={i} student={student}/>
                        )
                    }
                    
                </Col>
                <Col mt={2} md={9}>
                    {
                        student.map((student, i) => 
                            <h1 key={i} student={student}>{student.fio}</h1>
                        )
                    }
                    <Container style={{marginBottom: "500px"}}>
                    <h3 style={{marginTop: 30}}>Вы записались на: </h3>
                    <Row>
                        {
                            signed.map((signed, i) => 
                            <StudentProfileItem key={i} signed={signed}/>)
                        }
                    </Row>
                    <h3 style={{marginTop: 30}}>Ближайшие экзамены: </h3>
                    <Row>
                        {
                            exam.map((exam, i) => 
                            <StudentProfileExam key={i} exam={exam}/>)
                        }
                    </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
     );
}
 
export default StudentProfile;