import { format } from 'date-fns';
import { useState } from 'react';
import { FormControl } from 'react-bootstrap';

const StudentBirth = ({item, setSotrBirth}) => {
    const [value, setValue] = useState(item)
    let d = new Date(value.birth_date);
    let date = format(d, 'yyyy-MM-dd')
    return ( 
        <td>
            <FormControl
            name="doj" 
            type="date" 
            defaultValue={date} 
            onChange={e => setValue(e.target.value) + setSotrBirth(new Date(e.target.value))}/>
        </td>
     );
}
 
export default StudentBirth;