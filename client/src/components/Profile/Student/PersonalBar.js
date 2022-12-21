import { Container } from "react-bootstrap"
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { getCountLesson } from "../../../http/studentAPI";
import { useEffect, useState } from "react";
import { getMark } from "../../../http/examAPI";

const PersonalBar = ({student}) => {
    let d = new Date(student.birth_date);
    const [countlesson, setCountLesson] = useState([]);
    const [mark, setMark] = useState([]);
    
    useEffect(() => {
        getCountLesson(student.user_id).then((data) => {
            setCountLesson(data);
        })
    }, []);

    useEffect(() => {
        getMark(student.user_id).then((data) => {
            setMark(data);
        })
    }, [])

    return ( 
        <Container className="mt-2" style={{height: "100%"}}>
            <MDBListGroup>
                <MDBListGroupItem noBorders>
                    <div className='fw-bold'>День рождения: </div>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>
                <div className='fw-bold'>Образование: </div>{student.obrazovanie}
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>
                <div className='fw-bold'>Компания: </div>{student.company_name}
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>
                <div className='fw-bold'>Должность: </div>{student.name_position}
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>
                <div className='fw-bold'>Подразделение: </div>{student.name}
                </MDBListGroupItem>
                {
                    countlesson.map((countlesson,i) => 
                    <MDBListGroupItem noBorders key={i} countlesson={countlesson}>
                    <div className='fw-bold'>Занятий посетил: </div>{countlesson.get_countlessons}
                    </MDBListGroupItem>)
                }
                {
                    mark.map((mark, i) => 
                    <MDBListGroupItem noBorders key={i} mark={mark}>
                    <div className='fw-bold'>Баллов за экзамен</div>{mark.discipline_name}: {mark.mark}
                    </MDBListGroupItem>)
                }

            </MDBListGroup>
        </Container>
     );
}
 
export default PersonalBar;