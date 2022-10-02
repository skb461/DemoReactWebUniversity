import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row} from 'react-bootstrap';

import Slider from "./Slider/Slider";
import ArialText from "./ArialText/ArialText";

function Section_One() {
    return(
        <>
            <Row>
                <Col lg={12} className="p-5 mt-5 art">
                    <ArialText />
                </Col>
                <Col lg={12} className="p-0 mx-auto d-block">
                    <Slider />
                </Col>  
            </Row>
        </>
        
    )
}
export default Section_One;