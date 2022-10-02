import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import principle from "./image/principle.jpg";

import {Col, Row, Card} from 'react-bootstrap';

function Section_Two() {
    return(
        <div className="py-5">
            <Row className="py-5">
                <Col lg={6} className="">
                    <img src={principle} className="rounded mx-auto d-block w-100 px-5 principle_image_card" />
                </Col>
                <Col lg={6}>
                    <Card className="bg-transparent border-0 py-2 text-center">
                        <Card.Body>
                            <h1 className="p-1 h1">Our Honarable Principle</h1>
                            <p className="p-3 rounded h5 mb-5">ড. মোহাম্মদ জোনায়েবুর রশীদ</p>
                            <p className="Speach h2 text-muted bg-light rounded p-5 shadow mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor 
                            </p>
                        </Card.Body>
                    </Card>
                    
                </Col>  
            </Row>
        </div>
        
    )
}
export default Section_Two;