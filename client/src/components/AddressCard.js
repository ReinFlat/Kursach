import { Card, Form } from "react-bootstrap";
import { getOne } from "../http/studentAPI";
import { useEffect, useState } from "react";

const AddressCard = ({address, setPlaceId}) => {
    const [student, setStudent] = useState([]);

    useEffect(()=> {
        getOne(address.user_id).then((data) => {
            setStudent(data);
        })
    }, []);

    return ( 
        <div>
            {
                student.map((student, i) =>
                    <Card 
                    className="mt-2" student={student} key={i}
                    onClick={() => setPlaceId(address.user_id)}>
                        <Card.Header>{student.fio}</Card.Header>
                        <Card.Body>
                            Должность: {student.name_position}{"\n"}
                            Компания: {student.company_name}
                        </Card.Body>
                        <Card.Footer>{address.address}</Card.Footer>
                    </Card> 
                )
            }
        </div>
     );
}
 
export default AddressCard;