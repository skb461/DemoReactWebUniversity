import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row, Card} from 'react-bootstrap';

function Card_Item_Club() {
    return(
        <>
            <Card className="bg-transparent border-0 shadow mx-auto d-block my-3">
                <Card.Body>
                    <h3>Our Clubs</h3>
                    <h5>In Total We Have more then 10 clubs</h5>
                    <p className="text-muted">Total Exucative Members: <span className="h6">300+</span> Total Members: <span className="h6">1000+</span></p>
                    <a href="#" class="btn btn-outline-dark text-center px-3">View Details</a>
                </Card.Body>
            </Card>
        </>
    )
}
export default Card_Item_Club;