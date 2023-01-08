import { Card, Container, Form } from "react-bootstrap";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect, useState } from "react";
import { getAverageMark, getCountPassed, getStats, getStudents, getTraffic } from "../../../http/adminAPI";

const AdminProfileItem = ({company}) => {
    const [traffic, setTraffic] = useState([]);
    const [stats, setStats] = useState([]);
    const [countstudents, setCountstudents] = useState('');
    const [students, setStudents] = useState([]);


    useEffect(()=> {
        getTraffic(company.id).then((data) => {
            setTraffic(data);
        })
    }, []);

    useEffect(()=> {
        getStats().then((data) => {
            console.log(data[0].company_id, company.id)
            setStats(data);
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

                        {stats.map((stat,i) => {
                            const uslovie = (stat.company_id === company.id) 
                            return ( uslovie &&
                            (<Card.Text key={i} stat={stat}>
                                Уже сдали экзамен: {stat.countpassed}
                            </Card.Text>)
                            )
                        })}  
                        
                        {stats.map((stat,i) => {
                            const uslovie = (stat.company_id === company.id) 
                            return ( uslovie &&
                            (<Card.Text key={i} stat={stat}>
                                Средний бал: {stat.averagemark}
                            </Card.Text>)
                            )
                        })}  

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