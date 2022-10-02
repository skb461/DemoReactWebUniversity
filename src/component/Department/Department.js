
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Container, Row, Col} from 'react-bootstrap';

import Section_One_Dept from "./Section_One_Dept/Section_One_Dept";
import Section_Two_Dept from "./Section_Two_Dept/Section_Tow_Dept";


function Department() {
    return(
        <div className="mt-5 pt-5">
            <Section_Two_Dept />
            <div className="py-3 pt-5">
                <h3 className="text-center text-dark">OUR Departments</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container className="pb-5 mb-5">
                <Row>
                    <Section_One_Dept />
                </Row>
            </Container>
        </div>
    )
}
export default Department;