

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Resedent_Carusal from "./Resedent_Carusal/Resedent_Carusal";

import {Container, Row, Col} from 'react-bootstrap';
import Resident_Card from "./Resedent_card/Resident_Card";
import Resedent_Card_Student from "./Resedent_card_Student/Resedent_Card_Student";


function Residents() {
    return(
        <>
            <div className="mt-5 pt-5">
                <h1 className="display-1 text-center py-5 facalty_top">Residents</h1>
            </div>
            <div className="py-3 pt-5">
                <h3 className="text-center text-dark">OUR Residents</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container className="pb-5 mb-5">
                <Row className="my-3 py-4">
                    <Col lg={6}>
                        <Resedent_Carusal />
                    </Col>
                    <Col lg={6}>
                        <Resident_Card />
                    </Col>
                </Row>
                <Row className="my-3 py-4">
                    <Col lg={6}>
                        <Resedent_Card_Student />
                    </Col>
                    <Col lg={6}>
                        <Resedent_Carusal />
                    </Col>
                </Row>
                <Row className="my-3 mb-5 py-4">
                    <Col lg={6}>
                        <Resedent_Carusal />
                    </Col>
                    <Col lg={6}>
                        <Resedent_Card_Student />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Residents;