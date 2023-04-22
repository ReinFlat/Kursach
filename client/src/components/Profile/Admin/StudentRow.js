import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { getAddresses, removeStudent, updateStudent } from "../../../http/adminAPI";
import { CloseButton, Dropdown, FormControl, Button} from "react-bootstrap";
import ChooseAddress from "../../modals/ChooseAddress";


const StudentRow = ({position = [], student, students, setStudents}) => {
    const [sotrBirth, setSotrBirth] = useState(format(new Date(student.birth_date), 'yyyy-MM-dd'));
    const [sotrFio, setSotrFio] = useState(student.fio);
    const [sotrObraz, setSotrObraz] = useState(student.obrazovanie);
    const [positionId, setPositionId] = useState(position?.find((item) => item?.id === student?.position_id)?.id);
    const [showPosition, setShowPosition] = useState(position?.find((item) => item?.id === student?.position_id)?.name_position);
    const [addresses, setAddresses] = useState([]);
    const [addressVisible, setAddressVisible] = useState(false)

    useEffect(() => {
        getAddresses().then((data) => {
            setAddresses(data);
        })
    }, [showPosition])

    const updateUser = () => {
        updateStudent({
            user_id: student.user_id,
            birth_date: sotrBirth,
            obrazovanie: sotrObraz,
            fio: sotrFio,
            position_id: positionId
        })
        window.location.reload();
    }

    const deleteUser = () => {
        removeStudent(student.user_id)
        let newArray = students.filter((n) => {return n.user_id !== student.user_id});
        setStudents(newArray)
    }
    
    return ( 
        <tbody>
            <tr>
                <td>
                    <FormControl
                    name="doj" 
                    type="date" 
                    defaultValue={sotrBirth} 
                    onChange={e => setSotrBirth(new Date(e.target.value))}/>
                </td>
                <td>
                    <textarea 
                    className="form-control" 
                    rows="1" 
                    onChange={e => setSotrFio(e.target.value)}>
                        {sotrFio}
                    </textarea>
                </td>
                <td>
                    <textarea 
                    className="form-control" 
                    rows="1" 
                    onChange={e => setSotrObraz(e.target.value)}>
                        {sotrObraz}
                    </textarea>
                </td>             
                <td>
                <Dropdown>
                    <Dropdown.Toggle variant="outline" className="border-secondary border-opacity-25">
                       {showPosition}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            position.map((position, i) => 
                                <Dropdown.Item 
                                    key={i} 
                                    position={position}
                                    onClick={() => setShowPosition(position.name_position) + setPositionId(position.id)}
                                >
                                    {position.name_position}
                                </Dropdown.Item>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
                </td>
                <td>
                    <textarea readOnly className="form-control" rows="1" value={student.department_name}/>
                </td>
                    {
                        addresses.map(address => {
                            const uslovie = (student.user_id === address.user_id)
                            return(uslovie &&
                                (<td key={address.user_id}>
                                    <textarea onClick={() => setAddressVisible(true)} readOnly className="form-control" rows="1" value={address.address}/>
                                    <ChooseAddress address={address} show={addressVisible} onHide={() => setAddressVisible(false)}/>
                                </td>)
                            )
                        })
                    }
                <td>
                    <Button 
                        variant="white" 
                        className="text-success mb-2" 
                        title="Применить изменения" 
                        onClick={() => updateUser()}
                    >
                        ✓
                    </Button>
                    <CloseButton
                        className="mt-2"
                        title="Удалить сотрудника" 
                        onClick={() => deleteUser()}
                    />
                </td>
            </tr>
        </tbody>
    );
}
 
export default StudentRow;