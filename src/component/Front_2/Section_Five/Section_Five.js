import {Container,Col,Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Event_Section_Five from "./Event_Section_Five";

function Section_Five() {
    return(
        <div className="p-5 my-5">
            <Container>
                <Row>
                    <Col>
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <a href="#" className="btn btn-outline-light my-3 col-5">Read More</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section_Five;