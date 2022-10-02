import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import principle from "./image/principle_2.jpg";

import {Col, Row, Card} from 'react-bootstrap';

function Section_Two() {
    return(
        <div className="Section_Two py-5">
            <Row className="py-5">
                <Col lg={6} className="principle_image_card">
                    <img src={principle} className="rounded mx-auto d-block w-100 px-5" />
                </Col>
                <Col lg={6}>
                    <Card className="bg-transparent border-0 py-5 text-center">
                        <Card.Body>
                            <h1 className="p-1 principle display-1">Our Honarable Principle</h1>
                            <p className="p-3 rounded h1">ড. মোহাম্মদ জোনায়েবুর রশীদ</p>
                            <p className="Speach px-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Card.Body>
                    </Card>
                    
                </Col>  
            </Row>
        </div>
        
    )
}
export default Section_Two;