import { Card, Container, Form } from "react-bootstrap";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect, useState } from "react";
import { getAverageMark, getCountPassed, getStudents, getTraffic } from "../../../http/adminAPI";

const AdminProfileItem = ({company}) => {
    const [traffic, setTraffic] = useState([]);
    const [average, setAverage] = useState([]);
    const [passed, setPassed] = useState([]);
    const [countstudents, setCountstudents] = useState('');
    const [students, setStudents] = useState([]);


    useEffect(()=> {
        getTraffic(company.id).then((data) => {
            setTraffic(data);
        })
    }, []);

    useEffect(()=> {
        getAverageMark(company.id).then((data) => {
            setAverage(data);
        })
    }, []);

    useEffect(()=> {
        getCountPassed(company.id).then((data) => {
            setPassed(data);
        })
    }, []);

    useEffect(()=> {
        getStudents(company.id).then((data) => {
            setCountstudents(data.length);
        })
    }, []);

    useEffect(()=> {
        getStudents(company.id).then((data) => {
            setStudents(data);
        })
    }, []);

    return ( 
        <Container className="mt-3">
            <Card>
                <CardHeader className="bg-white fw-bold">{company.company_name}</CardHeader>
                <Form className="d-flex justify-content-between">
                    <Card.Body> 

                        <Card.Text>Сотрудников обучается: {countstudents}</Card.Text>
                    
                        {traffic.map((traffic,i) => 
                            <Card.Text key={i} traffic={traffic}>Посещаемость: {traffic.get_traffic}%</Card.Text>)
                        }

                        {passed.map((passed,i) => 
                            <Card.Text key={i} passed={passed}>Уже сдали экзамен: {passed.get_countpassed}</Card.Text>)
                        }

                        {average.map((average, i) => 
                            <Card.Text key={i} average={average}>Средний бал: {average.get_averagemark}</Card.Text>)
                        }

                    </Card.Body>
                    <MDBListGroup style={{width: 500}}>
                        <div className='fw-bold'>Сотрудники:</div>
                        {students.map((students, i) =>
                            <MDBListGroupItem noBorders key={i} students={students}>
                                {students.fio}
                            </MDBListGroupItem>)
                        }

                    </MDBListGroup>
                </Form>
            </Card>
        </Container>
     );
}
 
export default AdminProfileItem;