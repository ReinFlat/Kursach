import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import CreateCompany from "../components/modals/CreateCompany";
import CreateStudent from "../components/modals/CreateStudent";
import AdminTable from "../components/Profile/Admin/AdminTable";
import { getCompany } from "../http/adminAPI";

const Registration = () => {
    const [companyVisible, setCompanyVisible] = useState(false)
    const [studentVisible, setStudentVisible] = useState(false)
    const [companys, setCompanys] = useState([]);

    useEffect(()=> {
        console.log('aboba222')
        getCompany().then((data) => {
            setCompanys(data);
        })
    }, []);

    return ( 
        <Container style={{marginBottom: 300}}>
            <ButtonGroup>
                <Button variant={"outline-dark"} className="mt-2" onClick={() => setCompanyVisible(true)}>
                    Добавить компанию
                </Button>
                <Button variant={"outline-dark"} className="mt-2" onClick={() => setStudentVisible(true)}>
                    Добавить студента
                </Button>
                <CreateCompany show={companyVisible} onHide={() => setCompanyVisible(false)}/>
                <CreateStudent show={studentVisible} onHide={() => setStudentVisible(false)}/>
            </ButtonGroup>
            {
                companys.map((company, i) => 
                <AdminTable key={i} setCompanys={setCompanys} companys={companys} company={company}/>)
            }
        </Container>
     );
}
 
export default Registration;