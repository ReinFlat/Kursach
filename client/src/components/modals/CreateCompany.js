import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { createCompany } from "../../http/adminAPI";

const CreateCompany = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [inn, setInn] = useState('')

    const click = () => {
            if(name === ''){
                return(alert("Введите название компании!"));
            }
            if(telephone === ''){
                return(alert("Введите телефон!"));
            }
            if(inn === ''){
                return(alert("Введите ИНН!"));
            }
            createCompany({
                company_name: name, 
                telephone: telephone, 
                inn: inn
            })
            window.location.reload();
    };

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
                    <FormControl placeholder="Название компании" onChange={e => setName(e.target.value )}/>
                    <FormControl type="number" className="mt-2 mb-2" placeholder="Введите телефон компании" onChange={e => setTelephone(e.target.value)}/>
                    <FormControl type="number" className="mt-2 mb-2" placeholder="Введите ИНН компании" onChange={e => setInn(e.target.value)}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => click()} >Добавить</Button>
            </Modal.Footer>
        </Modal>
     );
})
export default CreateCompany;