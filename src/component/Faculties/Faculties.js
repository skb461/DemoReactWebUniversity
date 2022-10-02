
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Container, Row, Col} from 'react-bootstrap';
import Section_One_Dept_head from "./Section_One_Dept_Head/Section_One_Dept_Head";
import Section_Two_Dept_head from "./Section_Two_Dept_Head/Section_Two_Dept_Head";


function Faculties() {
    return(
        <div className="mt-5 pt-5">
            <Section_One_Dept_head />
            <div className="py-3">
                <h3 className="text-center text-dark">OUR TEACHERS</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container className="py-3 pb-5">
                <Row>
                    <Col>
                        <Section_Two_Dept_head />
                    </Col>
                    <Col>
                        <Section_Two_Dept_head />
                    </Col>
                    <Col>
                        <Section_Two_Dept_head />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Section_Two_Dept_head />
                    </Col>
                    <Col>
                        <Section_Two_Dept_head />
                    </Col>
                    <Col>
                        <Section_Two_Dept_head />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Faculties;