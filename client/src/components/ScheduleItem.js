import { Button, Card} from "react-bootstrap";

const ScheduleItem = ({lesson}) => {
    return ( 
            <Card bg="light" style={{width: 192}}>
                <Card.Header>Михал Палыч</Card.Header>
                    <Card.Body>
                        <Card.Title>Бурение очка</Card.Title>
                        <Card.Text>30/11/2022</Card.Text>
                        <Button style={{marginLeft: 26}}
                        variant="outline-success"
                        >
                            Записаться
                        </Button>
                    </Card.Body>
            </Card>
     );
}
 
export default ScheduleItem;