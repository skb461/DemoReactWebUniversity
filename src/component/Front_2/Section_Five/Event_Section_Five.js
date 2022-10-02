import { Col,Container,Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Notice_Date from "./Section_Five_Sub_Parts/Notice_Date";
import Notice_EventDetail from "./Section_Five_Sub_Parts/Notice_EventDetail";

function Event_Section_Five() {
    return(
        <>
                <Row>
                    <Col lg={2} className="p-1">
                        <Notice_Date />
                    </Col>
                    <Col lg={8}>
                        <Notice_EventDetail />
                    </Col>
                </Row>
        </>
    )
}
export default Event_Section_Five;