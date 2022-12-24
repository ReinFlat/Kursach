import { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import CreateCompany from "../components/modals/CreateCompany";
import CreateStudent from "../components/modals/CreateStudent";
import AdminTable from "../components/Profile/Admin/AdminTable";

const Registration = () => {
    const [companyVisible, setCompanyVisible] = useState(false)
    const [studentVisible, setStudentVisible] = useState(false)
    return ( 
        <Container>
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
            <AdminTable/>
        </Container>
     );
}
 
export default Registration;