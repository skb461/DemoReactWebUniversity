import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./AboutUS/AboutUs";
import Admision from "./Admission/Admision";
import Research from "./Research/Research";

import {Col, Row} from 'react-bootstrap';

function Row_1() {
    return(
        <div className="bg-dark py-3">
                <Row>
                    <Col lg={4}>
                        <AboutUs />
                    </Col>
                    <Col lg={4}>
                        <Admision />
                    </Col>
                    <Col lg={4}>
                        <Research />
                    </Col>
                </Row>
        </div>
    )
}
export default Row_1;