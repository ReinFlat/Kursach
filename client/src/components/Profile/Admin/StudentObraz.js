import { useState } from "react";

    const StudentObraz = ({item, setSotrObraz}) => {
    const [value, setValue] = useState(item.obrazovanie);

    return ( 
    <td>
        <textarea 
        className="form-control" 
        rows="1" 
        onChange={e => setValue(e.target.value) + setSotrObraz(e.target.value)}>
            {value}
        </textarea>
    </td> 
    );
}
 
export default StudentObraz;