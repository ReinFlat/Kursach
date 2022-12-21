import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { getCompany } from "../../../http/adminAPI";
import AdminProfileItem from "./AdminProfileItem";

const AdminProfile = () => {
    const [company, setCompany] = useState([]);

    useEffect(()=> {
        getCompany().then((data) => {
            console.log(data)
            setCompany(data);
        })
    }, []);

    return ( 
        <div>
            <h1 className="mt-2 d-flex justify-content-center">Статистика по предприятиям</h1>
            <Container className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 100}}>
                <Row>
                    {
                        company.map((company, i) => 
                        <AdminProfileItem key={i} company={company}/>)
                    }
                </Row>
                
            </Container>
        </div>
     );
}
 
export default AdminProfile;