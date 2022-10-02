
    
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card} from 'react-bootstrap';


function Resident_Card() {
    return(
        <Card className="text-dark shadow p-1">
                                
            <Card.Text className="mt-5 pt-5 text-center">Residental Fecility for</Card.Text>
            <Card.Title className="mb-5 pb-5 h1 display-3 text-center">Teachers</Card.Title>

        </Card>
    )
}
export default Resident_Card;