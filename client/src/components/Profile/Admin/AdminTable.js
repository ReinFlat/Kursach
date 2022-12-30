import { useEffect, useState } from "react";
import { Card, CloseButton, Dropdown, FormControl, Table, Button, InputGroup } from "react-bootstrap";
import { getPosition, getStudents, removeCompany, removeStudent, updateCompany, updateStudent } from "../../../http/adminAPI";
import StudentFio from "./StudentFio";
import StudentObraz from "./StudentObraz";
import StudentPosition from "./StudentPosition";
import StudentBirth from "./StudentBirth";

const AdminTable = ({company, setCompanys, companys}) => {
    const [students, setStudents] = useState([]);
    const [compName, setCompName] = useState(company.company_name);
    const [compTel, setCompTel] = useState(company.telephone);
    const [compInn, setCompInn] = useState(company.inn);
    const [position, setPosition] = useState([]);
    const [sotrBirth, setSotrBirth] = useState('');
    const [sotrFio, setSotrFio] = useState('');
    const [sotrObraz, setSotrObraz] = useState('');
    const [positionId, setPositionId] = useState('');
    const [usid, setUsid] = useState('');
    const [showPosition, setShowPosition] = useState('')

    useEffect(()=> {
        getStudents(company.id).then((data) => {
            setStudents(data);
        })
        getPosition().then((data) => {
            setPosition(data);
        })
    }, []);

    const click = (id) => {
        removeStudent(id)
        let newArray = students.filter((n) => {return n.user_id !== id});
        setStudents(newArray)
    }

    const clickCompany = (id) => {
        removeCompany(company.id)
        let newArray = companys.filter((n) => {return n.id !== id});
        setCompanys(newArray)
    }

    const updateComp = () => {
        if(compName === ''){
            setCompName(company.company_name)
        }
        if(compTel === ''){
            setCompTel(company.telephone)
        }
        if(compInn === ''){
            setCompInn(company.inn)
        }
            updateCompany({
                id: company.id, 
                company_name: compName, 
                telephone: compTel, 
                inn: compInn
            })
    }

    const updateSotr = (index) => {
        if(sotrBirth === ''){
            students.map(student => {
                if(student.user_id === index){
                    setSotrBirth(student.birth_date)
                }
            })
        }
        if(sotrObraz === ''){
            students.map(student => {
                if(index === student.user_id){
                    setSotrObraz(student.obrazovanie)
                }
            })
        }
        if(sotrFio === ''){
            students.map(student => {
                if(index === student.user_id){
                    setSotrFio(student.fio)
                }
            })
        }
        if(positionId === ''){
            students.map(student => {
                if(index === student.user_id){
                    setPositionId(student.position_name)
                }
            })
        }
        if(sotrBirth === '' || sotrObraz === '' || sotrFio === '' || positionId === ''){
            students.map(student => {
                if(index === student.user_id){
                    setSotrBirth(student.birth_date)
                    setSotrObraz(student.obrazovanie)
                    setSotrFio(student.fio)
                    setPositionId(student.position_name)
                }
            })
        }
        updateStudent({
            user_id: index,
            birth_date: sotrBirth,
            obrazovanie: sotrObraz,
            fio: sotrFio,
            position_id: positionId
        })
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
                    </tr>
                </thead>
                {
                students.map(student => {
                    return(
                    <tbody key={student.user_id}>
                    <tr>
                    <StudentBirth item={student} setSotrBirth={setSotrBirth}/>
                    <StudentFio item={student} setSotrFio={setSotrFio}/>
                    <StudentObraz item={student} setSotrObraz={setSotrObraz}/>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline" className="border-secondary border-opacity-25">{student.position_name}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    position.map((position) => 
                                        <StudentPosition key={position.id} item={position} setPositionId={setPositionId}/>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>
                        <textarea readOnly className="form-control" rows="1" value={student.department_name}/>
                    </td>
                    <td>
                        <Button variant="white" className="text-success mb-2" title="Применить изменения" onClick={() => updateSotr(student.user_id)}>✓</Button>
                        <CloseButton className="mt-2" title="Удалить сотрудника" onClick={() => click(student.user_id)}/>
                    </td>
                    </tr>
                </tbody>)  
                })
            }
            </Table>
        </Card>
     );
}
 
export default AdminTable;