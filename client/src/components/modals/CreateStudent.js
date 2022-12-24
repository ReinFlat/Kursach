import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const CreateStudent = observer(({show, onHide}) => {
    const [showAddPosition, setShowAddPosition] = useState(false)

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
                    <FormControl placeholder="Введите email сотрудника"/>
                    <FormControl className="mt-2 mb-2" placeholder="Введите пароль"/>
                    <FormControl className="mt-2 mb-2" placeholder="Введите ФИО сотрудника"/>
                    <FormControl className="mt-2 mb-2" placeholder="Введите образование"/>
                    <Form className="d-flex justify-content-between mt-2 pl-3 pr-3 ">
                        <Dropdown>
                            <DropdownToggle variant="outline-dark">Выберите компанию</DropdownToggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Газпром</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownToggle variant="outline-dark" >Выберите должность</DropdownToggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Бурильщик</Dropdown.Item>
                                <Dropdown.Item className="text-primary" onClick={() => setShowAddPosition(true)}>+ Добавить новую</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form>
                    {
                        showAddPosition
                        ?
                        <InputGroup className="mt-2">
                            <Button variant="outline-secondary" id="button-addon1">
                            +
                            </Button>
                            <FormControl placeholder="Добавить должность"/>
                        </InputGroup>
                        :
                        <div></div>
                    }
                    
                </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex">
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success">Добавить</Button>
            </Modal.Footer>
        </Modal>
     );
})
 
export default CreateStudent;