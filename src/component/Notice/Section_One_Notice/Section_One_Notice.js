

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row, Card} from 'react-bootstrap';
import Notice_Section_One_Date from "./Notice_Section_One_Date/Notice_Section_One_Date";
import Notice_Section_One_EventDetail from "./Notice_Section_One_EventDetail/Notice_Section_One_EventDetail";

function Section_One_Notice() {
    return(
        <div className="">
            <Row>
                <Col lg={2} className="p-1">
                    <Notice_Section_One_Date />
                </Col>
                <Col lg={8}>
                    <Notice_Section_One_EventDetail />
                </Col>
            </Row>
        </div>
        
    )
}
export default Section_One_Notice;