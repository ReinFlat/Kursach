import { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale} from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import {getOne} from '../http/lessonAPI';
import { Context } from '../index';
import jwt_decode from 'jwt-decode';
import LessonAdd from "../components/LessonAdd";
import { observer } from "mobx-react-lite";
registerLocale('ru', ru)


const AddLesson = observer(() => {
    const [teachers, setTeachers] = useState([]);
    const {id} = useParams();

    const {user} = useContext(Context)
    if (user.isAuth===true) {
        var token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
    }

    useEffect(() => {
		getOne(decoded.id).then((data) => {
		setTeachers(data);
		})
	}, []);

    return ( 
        <div>
            {teachers.map((teacher, i) =>
                (<LessonAdd key={i} teacher={teacher}/>)
            )}
        </div>
     )
});
 
export default AddLesson;