import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row, Card} from 'react-bootstrap';

function Card_Item_program() {
    return(
        <>
            <Card className="bg-transparent border-0 shadow mx-auto d-block my-3">
                <Card.Body>
                    <h3>Our Programs</h3>
                    <h5>In Total We Have 5 Department</h5>
                    <p className="text-muted">Total faculty: <span className="h6">77</span> Total Student: <span className="h6">1900+</span></p>
                    <a href="#" class="btn btn-outline-dark text-center px-3">View Details</a>
                </Card.Body>
            </Card>
        </>
    )
}
export default Card_Item_program;