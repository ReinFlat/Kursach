import { useEffect, useState } from "react";

const StudentFio = ({item, setSotrFio}) => {
    const [value, setValue] = useState(item.fio);

    return ( 
        <td>
            <textarea 
            className="form-control" 
            rows="1" 
            onChange={e => setValue(e.target.value) + setSotrFio(e.target.value)}>
                {value}
            </textarea>
        </td>
    );
}
 
export default StudentFio;