import { useEffect, useState} from "react";
import { Button, ButtonGroup, Card, Col, Container, Row } from "react-bootstrap";
import CreateCompany from "../components/modals/CreateCompany";
import CreateStudent from "../components/modals/CreateStudent";
import AdminTable from "../components/Profile/Admin/AdminTable";
import { getCompany } from "../http/adminAPI";
import { getAddresses } from "../http/adminAPI";
import { YMaps, Map, Circle, Placemark, ListBox, ListBoxItem } from '@pbe/react-yandex-maps';
import MyPlacemark from "../components/MyPlacemark";

const Registration = () => {
    const [companyVisible, setCompanyVisible] = useState(false)
    const [studentVisible, setStudentVisible] = useState(false)
    const [companys, setCompanys] = useState([]);
    const [addresses, setAddresses] = useState([]);


    useEffect(()=> {
        console.log('aboba222')
        getCompany().then((data) => {
            setCompanys(data);
        })
    }, []);

    useEffect(()=> {
        getAddresses().then((data) => {
            setAddresses(data);
            console.log(data[0].address)
            console.log(data[1].user_id)
            console.log(data[2].address.x)
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
                        <Col xs={3}/>
                        <Col>
                            <Map width={800} height={650} defaultState={{ center: [57.150417, 65.548863], zoom: 12 }}>
                            <Circle geometry={[[57.150417, 65.548863], 1000]} />
                            <Placemark geometry={[57.150417, 65.548863]} 
                            options={{
                                preset: 'islands#blueEducationIcon'
                            }} />
                            {
                                addresses.map(address =>
                                <MyPlacemark key={address.user_id} address={address} />)
                            }
                            <ListBox data={{ content: 'Select city' }}>
                                <ListBoxItem data={{ content: 'Moscow' }} />
                                <ListBoxItem data={{content: 'Saint Petersburg',}}/>
                            </ListBox>
                            </Map>
                        </Col>
                    </Row>
                </Card>
            </YMaps>
            
        </Container>
     );
}
 
export default Registration;