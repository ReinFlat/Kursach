import { observer } from "mobx-react-lite";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

const CreateCompany = observer(({show, onHide}) => {
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
                    <FormControl placeholder="Название компании"/>
                    <FormControl className="mt-2 mb-2" placeholder="Введите телефон компании"/>
                    <FormControl className="mt-2 mb-2" placeholder="Введите ИНН компании"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success">Добавить</Button>
            </Modal.Footer>
        </Modal>
     );
})
export default CreateCompany;