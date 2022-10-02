
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row, Card} from 'react-bootstrap';

function Card_Item_Transport() {
    return(
        <>
            <Card className="bg-transparent border-0 shadow mx-auto d-block my-3">
                <Card.Body>
                    <h3>Our Transportation</h3>
                    <h5>We Have 4 vehicles for transportation</h5>
                    <p className="text-muted">Student Bus: <span className="h6">1</span> Teachers Bus: <span className="h6">2</span> Ambulance: <span className="h6">1</span></p>
                    <a href="#" class="btn btn-outline-dark text-center px-3">View Details</a>
                </Card.Body>
            </Card>
        </>
    )
}
export default Card_Item_Transport;