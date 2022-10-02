import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row} from 'react-bootstrap';
import Office from "./Offices/Office";
import Notice from "./Notice/Notice";
import ContactUs from "./ContactUs/ContactUs";
function Row_3() {
    return(
        <div className="bg-dark py-3">
                <Row>
                    <Col lg={4}>
                        <Office />
                    </Col>
                    <Col lg={4}>
                        <Notice />
                    </Col>
                    <Col lg={4}>
                        <ContactUs />
                    </Col>
                </Row>
        </div>
    )
}
export default Row_3;