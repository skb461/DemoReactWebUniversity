import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row} from 'react-bootstrap';

import niter from './image/niter.png'

import Academic from "./Academic/Academic";
import CampusLife from "./CampusLife/CampusLife";

function Row_2() {
    return(
        <div className="bg-dark py-3">
                <Row>
                    <Col lg={4}>
                        <Academic />
                    </Col>
                    <Col lg={4}>
                        <img
                        className="d-block w-50 mx-auto"
                        src={niter}
                        alt=""
                        />
                    </Col>
                    <Col lg={4}>
                        <CampusLife />
                    </Col>
                </Row>
        </div>
    )
}
export default Row_2;