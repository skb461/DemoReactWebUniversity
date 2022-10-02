import { Col,Container,Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Date from "./Section_Three_Sub_Parts/Date";
import EventDetail from "./Section_Three_Sub_Parts/EventDetail";

function EventInfo() {
    return(
        <>
                <Row>
                    <Col lg={2} className="p-1">
                        <Date />
                    </Col>
                    <Col lg={8}>
                        <EventDetail />
                    </Col>
                </Row>
        </>
    )
}
export default EventInfo;