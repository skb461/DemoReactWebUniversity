
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Container, Row, Col} from 'react-bootstrap';
import Career_Circulars from "./Career_Circulars/Career_Circulars";

function Career() {
    return(
        <>
            <div className="mt-5 pt-5">
                <h1 className="display-1 text-center py-5 facalty_top">Career</h1>
            </div>
            <div className="py-3 pt-5">
                <h3 className="text-center text-dark">Job Circulars</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container className="pb-5 mb-5">
                <Row className="my-3 py-4">
                    <Col>
                        <Career_Circulars />
                    </Col>
                    <Col>
                        <Career_Circulars />
                    </Col>
                </Row>
                <Row className="my-3 py-4">
                    <Col>
                        <Career_Circulars />
                    </Col>
                    <Col>
                        <Career_Circulars />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Career;