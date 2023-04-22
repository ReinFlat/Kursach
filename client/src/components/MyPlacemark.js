import { Placemark } from '@pbe/react-yandex-maps';
import { getOne } from "../http/studentAPI";
import { useEffect, useState } from "react";

const MyPlacemark = ({address, placeId}) => {
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
                    <Placemark student={student} key={i}
                        geometry={[address.coords.x , address.coords.y]} 
                        options={{
                        preset: 'islands#blackRunIcon'}}
                        properties={{
                            id: student.user_id,
                            hintContent: student.fio,
                            balloonContentHeader: student.fio,
                            balloonContentBody: `Должность: ${student.name_position}`,
                            balloonContentFooter: `Компания: ${student.company_name}`
                          }}
                        modules= {['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        instanceRef={ref => {ref && placeId===address.user_id && ref.balloon.open()}}
                        />
                )
            }
        </div>
     );
}
 
export default MyPlacemark;