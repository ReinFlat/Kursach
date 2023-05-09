import { useEffect, useRef, useState} from "react";
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
    const [placeCoord, setPlaceCoord] = useState([null]);
    const [oldPlace, setOldPlace] = useState([null]);
    const [center, setCenter] = useState([55.76, 37.64]); // начальные координаты центра круга
    const [addCircle, setAddCircle] = useState(false);
    const map = useRef(null);

    const handleCircleDrag = (event) => {
        setCenter(event.originalEvent.target.geometry.getCoordinates()); // обновляем координаты центра круга при его перетаскивании
    };
    
    const addRoute = () => {
        const pointA = placeCoord; // Москва
        const pointB = [57.150417, 65.548863]; // Санкт-Петербург
    
        const multiRoute = new window.ymaps.multiRouter.MultiRoute(
          {
            referencePoints: [pointA, pointB],
            params: {
              routingMode: "pedestrian",
              results: 1
            }
          },
          {
            boundsAutoApply: true
          }
        );

        if((placeCoord!==null) && (oldPlace[0]!==placeCoord[0]))
        {
            map.current.geoObjects.remove(map.current.geoObjects._map.geoObjects._parentArray._baseArrayComponent._children[9]);
            map.current.geoObjects.add(multiRoute);
            setOldPlace(placeCoord);
        }

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

    function calculateDistance(targetPoint) {
        let totalDistance = 0;
        for (let i = 0; i < addresses.length; i++) {
          const distance = Math.sqrt(Math.pow(addresses[i].coords.x - targetPoint[0], 2) + Math.pow(addresses[i].coords.y - targetPoint[1], 2));
          totalDistance += distance;
        }
        const averageDistance = Math.round((totalDistance / addresses.length)*100000);
        return averageDistance;
    } 

    return ( 
        <Container style={{marginBottom: 300}}>
        <YMaps
            query={{
                apikey: '3a1a2903-1e56-44e6-8754-b628cb64d32a',
                ns: "ymaps"
                }}>
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
                <AdminTable YMaps={YMaps} key={i} setCompanys={setCompanys} companys={companys} company={company}/>)
            }
                <Card border="dark" className="mt-3">
                    <Row style={{marginTop:25, marginBottom:25}}>
                        <Col xs={3}>
                            <Container style={{height: 650 ,overflowY: "scroll"}}>
                            {
                                addresses.map(address =>
                                <AddressCard setPlaceCoord={setPlaceCoord} addRoute={addRoute} key={address.user_id} address={address}/>)
                            }
                            </Container>

                        </Col>
                        <Col>
                            <Container style={{ width:800, height:680}}>
                            <Map 
                            modules={["multiRouter.MultiRoute", "geocode", "geolocation"]}
                            instanceRef={map}
                            width={800} height={650} 
                            defaultState={{ center: [57.150417, 65.548863], zoom: 12 }}
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
                                        data={{ content: `Центр круга: ${center.join(', ')} | Среднее общее расстояние: ${calculateDistance(center)} м.` }}/>

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
                                balloonContentBody: `Адрес:<b>Володарского 56</b> <br>
                                Среднее общее расстояние до офиса: <b>${calculateDistance([57.150417, 65.548863])} м.</b>`,
                            }}  
                            />
                            {
                                addresses.map((address) =>
                                <MyPlacemark key={address.user_id} address={address} />)
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