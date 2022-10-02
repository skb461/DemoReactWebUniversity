import {Container,Col,Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import EventInfo from "./EventInfo";

function Section_Three() {
    return(
        <div className="pt-2 pb-5">
            <Container>
                <h1 className="text-center display-2 principle pb-5" > Events and News </h1>
                <Row>
                    <Col lg={6}>
                        <EventInfo />
                        <EventInfo />
                        <EventInfo />
                        <EventInfo />
                        <EventInfo />
                    </Col>
                    <Col lg={6}>
                        <EventInfo />
                        <EventInfo />
                        <EventInfo />
                        <EventInfo />
                        <EventInfo />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section_Three;