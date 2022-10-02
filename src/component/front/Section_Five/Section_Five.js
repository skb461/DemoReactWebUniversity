import {Container,Col,Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Event_Section_Five from "./Event_Section_Five";

function Section_Five() {
    return(
        <div className=" pt-5 pb-3">
            <Container className="pb-5">
                <h1 className="text-center display-2 principle pb-5" > Notice </h1>
                <Row>
                    <Col lg={6}>
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                    </Col>
                    <Col lg={6}>
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                        <Event_Section_Five />
                    </Col>
                </Row>
            </Container>
            <hr className="solid_about" />
        </div>
    )
}
export default Section_Five;