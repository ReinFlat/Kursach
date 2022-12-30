import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const StudentPosition = ({item, setPositionId}) => {
    
    const [value, setValue] = useState(item);

    return ( 
        <Dropdown.Item 
        
        onClick={() => setPositionId(value.id)}>
                {value.name_position}
        </Dropdown.Item>
    );
}
 
export default StudentPosition;