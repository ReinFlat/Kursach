import { Card } from "react-bootstrap";
import { getOne } from "../http/studentAPI";
import { useEffect, useState } from "react";
import { Placemark } from "@pbe/react-yandex-maps";
import MyPlacemark from "./MyPlacemark";

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
                        <Card.Body> Должность: {student.name_position}</Card.Body>
                        <Card.Body> Компания: {student.company_name}</Card.Body>
                    </Card> 
                )
            }
        </div>
     );
}
 
export default AddressCard;