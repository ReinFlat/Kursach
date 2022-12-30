import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Button, Dropdown, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { createDepartment, createPosition, createStudent, getCompany, getDepartment, getEmails, getIds, getPosition} from "../../http/adminAPI";

const CreateStudent = observer(({show, onHide}) => {
    const [date, setDate] = useState();
    const [showAddPosition, setShowAddPosition] = useState(false);
    const [showAddDepartment, setShowAddDepartment] = useState(false);
    const [company, setCompany] = useState([]);
    const [position, setPosition] = useState([]);
    const [department, setDepartment] = useState([]);
    const [name, setName] = useState('');
    const [nameposition, setNamePosition] = useState('');
    const [namedepartment, setNameDepartment] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [email, setEmail] = useState([]);
    const [nameemail, setNameEmail] = useState('');
    const [callposition, setCallposition] = useState(false);
    const [calldepartment, setCalldepartment] = useState(false);
    const [password, setPassword] = useState('');
    const [fio, setFio] = useState('');
    const [obrazovanie, setObrazovanie] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [ids, setIds] = useState([]);
    const [positionId, setPositionId] = useState('');
    const [typedepartment, setTypedepartment] = useState('')
    const [typeposition, setTypeposition] = useState('')

    useEffect(()=> {
        getEmails().then((data) => {
            setEmail(data);
        })
    }, []);

    useEffect(()=> {
        getIds().then((data) => {
            setIds(data);
        })
    }, []);

    useEffect(()=> {
        getCompany().then((data) => {
            setCompany(data);
        })
    }, []);

    useEffect(()=> {
        getPosition().then((data) => {
            setPosition(data);
        })
    }, [callposition]);

    useEffect(()=> {
        getDepartment().then((data) => {
            setDepartment(data);
        })
    }, [calldepartment]);

    const addPosition = () => {
        if(departmentId === ''){
            return(alert("Выберите подразделение для добавления должности"))
        }
        if(typeposition === ''){
            return(alert("Введите название должности"))
        }
        createPosition({
            name_position: typeposition,
            department_id: departmentId
        })
        setTimeout(() => {setCallposition(!callposition)},100)
    }

    const addDepartment = async() => {
        if(typedepartment === ''){
            return(alert("Введите название подразделения"))
        }
        createDepartment({
            name: typedepartment    
        })
        setTimeout(() => {setCalldepartment(!calldepartment)},102)
    }

    const addStudent = () => {
        console.log(positionId)
        console.log(departmentId)
        let last = ids[ids.length-1].id + 1
        let normData = new Date(date)
        if(JSON.stringify(email).includes(nameemail)){
            return(alert("Этот email занят"))
        }
        if(nameemail === ''){
            return(alert("Введите email"))
        }
        if(password === ''){
            return(alert("Введите пароль"))
        }
        if(!date || date === ''){
            return(alert("Выберите дату рождения"))
        }
        if(fio === ''){
            return(alert("Введите ФИО сотрудника"))
        }
        if(obrazovanie === ''){
            return(alert("Введите образование сотрудника"))
        }
        if(companyId === '' || !companyId){
            return(alert("Выберите компанию в которой работает сотрудник"))
        }
        if(departmentId === '' || !departmentId || namedepartment === ''){
            return(alert("Выберите подразделение"))
        }
        if(nameposition === ''){
            return(alert("Выберите должность"))
        }
        createStudent({
            id: last,
            email: nameemail,
            password: password,
            role: "STUDENT",
            birth_date: normData,
            obrazovanie: obrazovanie,
            fio: fio,
            company_id: companyId,
            position_id: positionId,
        })
        window.location.reload();
    }

    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered>
             <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить студента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl placeholder="Введите email сотрудника" onChange={e => setNameEmail(e.target.value)}/>
                    <FormControl className="mt-2 mb-2" placeholder="Введите пароль" onChange={e => setPassword(e.target.value)}/>
                    <InputGroup>
                        <FormControl readOnly placeholder="Выберите дату рождения"/>
                        <FormControl type="date" onChange={e => setDate(e.target.value)}/>
                    </InputGroup>
                    <FormControl className="mt-2 mb-2" placeholder="Введите ФИО сотрудника" onChange={e => setFio(e.target.value)}/>
                    <FormControl className="mt-2 mb-2" placeholder="Введите образование" onChange={e => setObrazovanie(e.target.value)}/>
                        <Dropdown>
                            <DropdownToggle variant="outline-dark">{name ||"Выберите компанию"}</DropdownToggle>
                            <Dropdown.Menu>
                                {
                                    company.map((company) => 
                                    <Dropdown.Item key={company.id} company={company} onClick={() => setName(company.company_name) + setCompanyId(company.id)}>{company.company_name}</Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form className="d-flex justify-content-between mt-2 pl-3 pr-3 ">
                        <Dropdown>
                            <DropdownToggle variant="outline-dark">{namedepartment ||"Выберите подразделение"}</DropdownToggle>
                            <Dropdown.Menu>
                                {
                                    department.map((department) => 
                                    <Dropdown.Item key={department.id} department={department} onClick={() => setNameDepartment(department.name) + setDepartmentId(department.id)}>
                                        {department.name}
                                    </Dropdown.Item>)
                                }
                                <Dropdown.Item className="text-primary" onClick={() => setShowAddDepartment(true)}>+ Добавить новое</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {
                        showAddDepartment
                        ?
                        <InputGroup>
                            <Button onClick={() => setShowAddDepartment(false) + addDepartment()} variant="outline-secondary" id="button-addon1">
                            +
                            </Button>
                            <FormControl placeholder="Добавить подразделение" onChange={e => setTypedepartment(e.target.value)}/>
                        </InputGroup>
                        :
                        <div></div>
                        }
                    </Form>

                    <Form className="d-flex justify-content-between mt-2 pl-3 pr-3 ">
                        <Dropdown>
                            <DropdownToggle variant="outline-dark">{nameposition ||"Выберите должность"}</DropdownToggle>
                            <Dropdown.Menu>
                                {
                                    position.map((position) => 
                                    <Dropdown.Item key={position.id} position={position} onClick={() => setNamePosition(position.name_position) + setPositionId(position.id)}>{position.name_position}</Dropdown.Item>)
                                }
                                <Dropdown.Item className="text-primary" onClick={() => setShowAddPosition(true)}>+ Добавить новую</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {
                        showAddPosition
                        ?
                        <InputGroup>
                            <Button onClick={() => setShowAddPosition(false) + addPosition()} variant="outline-secondary" id="button-addon1">
                            +
                            </Button>
                            <FormControl placeholder="Добавить должность" onChange={e => setTypeposition(e.target.value)}/>
                        </InputGroup>
                        :
                        <div></div>
                        }
                    </Form>
                </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex">
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => addStudent()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
     );
})
 
export default CreateStudent;