import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Col, Container, Row } from 'react-bootstrap';
import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';

const Footer = () => {
  return (
    <MDBFooter className=' bg-dark'>
      <div style={{height: 30}}></div>
      <div className='bg-secondary' style={{marginBottom: '30px', height: 1, 
      marginLeft:'5%', marginRight:'5%', width: '90%'}}/>
      <Container>
        <Row>
          <Col xs={4}>
            <h4 className='text-light mt-4 mb-4'>Повышение квалификации</h4>
            <p className='text-light mb-4'>Открыты с 10:00 до 22:00</p>
            <p className='text-light mb-1'>Тюмень</p>
            <p className='text-light mb-1'>Володарского 56</p>
            <p className='text-light mb-1'>+7(922)262-44-11</p>
            <p className='text-light'>LevelUp@mail.ru</p>
          </Col>
          <Col xs={1} />
          <Col xs={5}>
              <YMaps style={{marginTop: "100px"}}>
                  <Map width={600} height={350} defaultState={{center: [57.150417, 65.548863], zoom: 14 }}>
                  <Placemark geometry={[57.150417, 65.548863]} 
                    options={{
                        preset: 'islands#blueEducationIcon'
                    }} />
                      <ZoomControl options={{ float: 'left' }} />
                  </Map>
              </YMaps>
          </Col>
        </Row>
      </Container>
      <div className='bg-secondary' style={{marginTop: '30px', height: 1, 
      marginLeft:'5%', marginRight:'5%', width: '90%'}}/>
      <div className='text-secondary text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-secondary' href='/'>
          LevelUp
        </a>
      </div>
    </MDBFooter>
  );
}
 
export default Footer;
