import { Map, Placemark, SearchControl, YMaps } from "@pbe/react-yandex-maps";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { updateAddresses } from "../../http/adminAPI";

const ChooseAddress = observer(({show, onHide, address}) => {

    const [ addressName, setAddressName ] = useState(address.address)
    const [coords, setCoords] = useState([address.coords.x, address.coords.y]);
    const searchRef = useRef(null);

    useEffect(() => {
        if (addressName && searchRef.current) {
          // Меняем текст searchcontrol при изменении addressName
          searchRef.current.search(addressName);
        }
      }, [addressName]);

    const getCoords = e => {
        window.ymaps.geocode(e.get('coords')).then(res => {
            let firstGeoObject = res.geoObjects.get(0);
            setCoords(firstGeoObject.geometry._coordinates)
            setAddressName(firstGeoObject.getAddressLine())
        })
    }

    const getSearch = e => {
        window.ymaps.geocode(e.originalEvent.target._yandexState._model.request).then(res => {
            let firstGeoObject = res.geoObjects.get(0);
            setCoords(firstGeoObject.geometry._coordinates)
            setAddressName(firstGeoObject.getAddressLine())
        })
    }

    const click = () => {
        console.log(`[${coords[0]},${coords[1]}]`)
        updateAddresses({
            user_id: address.user_id,
            address: addressName,
            coords: `${coords[0]},${coords[1]}`
        })
        window.location.reload();
    }
    
    return ( 
        <Modal
        show={show}
        onHide={onHide}
        centered>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Выберите адрес
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YMaps query={{
                apikey: '3a1a2903-1e56-44e6-8754-b628cb64d32a',
                ns: "ymaps",
                }}>
                <Map 
                width={465} height={650} 
                defaultState={{ center: [57.150417, 65.548863], zoom: 12 }}
                modules= {["geolocation", "geocode"]}
                onClick={e => getCoords(e)}>

                    <SearchControl
                    instanceRef={ref => {
                        if (ref) searchRef.current = ref;
                    }}
                    onChange={e => getSearch(e)}/>

                    <Placemark
                    geometry={{
                        type: 'Point',
                        coordinates: coords,
                      } }
                    properties={{
                        iconContent: addressName,   
                      }}
                      options={{
                        preset: 'islands#blackStretchyIcon',
                      }}
                    /> 
                </Map>
            </YMaps>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={() => onHide + window.location.reload()}>Закрыть</Button>
            <Button variant="outline-success" onClick={() => click()} >Добавить</Button>
        </Modal.Footer>
        </Modal>
     );
})
export default ChooseAddress;