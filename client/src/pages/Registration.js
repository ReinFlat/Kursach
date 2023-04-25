import { useEffect, useState} from "react";
import { ButtonGroup, Card, Col, Container, Row} from "react-bootstrap";
import CreateCompany from "../components/modals/CreateCompany";
import CreateStudent from "../components/modals/CreateStudent";
import AdminTable from "../components/Profile/Admin/AdminTable";
import { getCompany } from "../http/adminAPI";
import { getAddresses } from "../http/adminAPI";
import { YMaps, Map, Circle, Placemark, Button} from '@pbe/react-yandex-maps';
import MyPlacemark from "../components/MyPlacemark";
import AddressCard from "../components/AddressCard";

const Registration = () => {
    const [companyVisible, setCompanyVisible] = useState(false)
    const [studentVisible, setStudentVisible] = useState(false)
    const [companys, setCompanys] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [placeId, setPlaceId] = useState();
    const [center, setCenter] = useState([55.76, 37.64]); // начальные координаты центра круга
    const [addCircle, setAddCircle] = useState(false);

    const handleCircleDrag = (event) => {
        setCenter(event.originalEvent.target.geometry.getCoordinates()); // обновляем координаты центра круга при его перетаскивании
    };

    useEffect(()=> {
        getCompany().then((data) => {
            setCompanys(data);
        })
    }, []);

    useEffect(()=> {
        getAddresses().then((data) => {
            setAddresses(data);
        })
    }, []);

    return ( 
        <Container style={{marginBottom: 300}}>
            <ButtonGroup>
                <Button variant={"outline-dark"} className="mt-2" onClick={() => setCompanyVisible(true)}>
                    Добавить компанию
                </Button>
                <Button variant={"outline-dark"} className="mt-2" onClick={() => setStudentVisible(true)}>
                    Добавить студента
                </Button>
                <CreateCompany show={companyVisible} onHide={() => setCompanyVisible(false)}/>
                <CreateStudent show={studentVisible} onHide={() => setStudentVisible(false)}/>
            </ButtonGroup>
            {
                companys.map((company, i) => 
                <AdminTable key={i} setCompanys={setCompanys} companys={companys} company={company}/>)
            }
            <YMaps>
                <Card border="dark" className="mt-3">
                    <Row style={{marginTop:25, marginBottom:25}}>
                        <Col xs={3}>
                            <Container style={{height: 650 ,overflowY: "scroll"}}>
                            {
                                addresses.map(address =>
                                <AddressCard setPlaceId={setPlaceId} key={address.user_id} address={address}/>)
                            }
                            </Container>

                        </Col>
                        <Col>
                            <Container style={{ width:800, height:680}}>
                            <Map width={800} height={650} 
                            defaultState={{ center: [57.150417, 65.548863], zoom: 14 }}
                            onActionEnd={(event) => {
                                setCenter(event.get('target').getCenter()); // обновляем координаты центра карты при ее перемещении
                              }}>
                                {
                                    addCircle 
                                    ?
                                    <>
                                        <Button
                                        options={{ selectOnClick: false, maxWidth: 800 }}
                                        onClick={() => setAddCircle(false)}
                                        data={{ content: `Центр круга: ${center.join(', ')}` }}/>

                                        <Circle
                                            options={{
                                                draggable: true,
                                                fillColor: '#cbcbcb77',
                                                strokeColor: '#8b8b8b',
                                                strokeOpacity: 0.8,
                                                strokeWidth: 5,
                                            }}
                                            geometry={[center, 1000]}
                                            onDragEnd={handleCircleDrag}
                                        />
                                    </>
                                    :
                                        <Button
                                        options={{ selectOnClick: false, maxWidth: 800 }}
                                        onClick={() => setAddCircle(true)}
                                        data={{ content:"✚" }}/>

                                }
                            
                            <Circle geometry={[[57.150417, 65.548863], 1000]} />
                            <Placemark geometry={[57.150417, 65.548863]} 
                            options={{
                                preset: 'islands#blueEducationIcon',
                            }}
                            properties={{
                                balloonContentHeader: 'LevelUp',
                                balloonContentBody: 'Володарского 56',
                            }}  
                            />
                            {
                                addresses.map((address) =>
                                <MyPlacemark placeId={placeId} key={address.user_id} address={address} />)
                            }
                            </Map>
                            </Container>
                        </Col>
                    </Row>
                </Card>
            </YMaps>
            
        </Container>
     );
}
 
export default Registration;