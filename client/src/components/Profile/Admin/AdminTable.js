import { useEffect, useState } from "react";
import { Card, CloseButton, Table, Button, InputGroup, Spinner } from "react-bootstrap";
import { getPosition, getStudents, removeCompany, updateCompany} from "../../../http/adminAPI";
import StudentRow from "./StudentRow";

const AdminTable = ({YMaps, company, setCompanys, companys}) => {
    const [students, setStudents] = useState([]);
    const [compName, setCompName] = useState(company.company_name);
    const [compTel, setCompTel] = useState(company.telephone);
    const [compInn, setCompInn] = useState(company.inn);
    const [position, setPosition] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getStudents(company.id).then((data) => {
            setStudents(data);
        })
        getPosition().then((data) => {
            setPosition(data);
        }).finally(() => setLoading(false))
    }, []);
    if(loading) {
        return <Spinner animation={"grow"}/>
    }

    const clickCompany = (id) => {
        removeCompany(company.id)
        let newArray = companys.filter((n) => {return n.id !== id});
        setCompanys(newArray)
    }

    const updateComp = () => {
        updateCompany({
            id: company.id, 
            company_name: compName, 
            telephone: compTel, 
            inn: compInn
        })
        window.location.reload();
    }


    return ( 
        <Card border="dark" className="mt-3">
            <Card.Header className="d-flex">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    Название
                    </InputGroup.Text>
                    <textarea className="form-control" rows="1" onChange={e => setCompName(e.target.value)}>{compName}</textarea>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    Телефон
                    </InputGroup.Text>
                    <textarea className="form-control" rows="1" onChange={e => setCompTel(e.target.value)}>{compTel}</textarea>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    ИНН
                    </InputGroup.Text>
                    <textarea className="form-control" rows="1" onChange={e => setCompInn(e.target.value)}>{compInn}</textarea>
                </InputGroup>
                <Button variant="outline-light" className="text-success" title="Применить изменения" style={{height: 20}} onClick={() => updateComp()}>✓</Button>
                <CloseButton className="m-2" title="Удалить компанию" onClick={() => clickCompany(company.id)}/>
            </Card.Header>
            <Table>
                <thead>
                    <tr>
                    <th>Дата рождения</th>
                    <th>ФИО</th>
                    <th>Образование</th>
                    <th>Должность</th>
                    <th>Подразделение</th>
                    <th>Адрес</th>
                    </tr>
                </thead>
                {
                    students.map(student => {
                        const uslovie = (company.id === student.company_id)
                        return(uslovie && 
                            (<StudentRow
                                position={position} 
                                student={student}
                                students={students} 
                                setStudents={setStudents}
                                key={student.user_id}
                                YMaps={YMaps} 
                            />)
                        )
                    })  
                }
            </Table>
        </Card>
     );
}
 
export default AdminTable;