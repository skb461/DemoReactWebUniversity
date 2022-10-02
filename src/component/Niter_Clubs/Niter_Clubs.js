
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Niter_Club_Card from "./Niter_Club_Card/Niter_Club_Card";

import { Col, Row, Container } from "react-bootstrap";


function Niter_Clubs() {
    return(
        <>
            <div className="mt-5 pt-5">
                <h1 className="display-1 text-center py-5 about_top">Clubs and communities</h1>
            </div>
            <div className="py-5">
                <h3 className="text-center text-dark">Niter Clubs & communities</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container className="mb-5 pb-5">
                <Row>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                    <Col>
                        <Niter_Club_Card />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Niter_Clubs;