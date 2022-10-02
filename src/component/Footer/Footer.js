import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Row_1 from "./Row_1";
import Row_2 from "./Row_2";
import Row_3 from "./Row_3";

import {Card, Col, Container, Row} from 'react-bootstrap';
import AfterFooter from "./AfterFooter/AfterFooter";

function Footer() {
    return(
        <div className="bg-dark">
            <Container className="py-5">
                <Row_1 className="py-3"/>
                <Row_2 className="py-3"/>
                <Row_3 className="py-3"/>
                <hr className="solid" />
                <AfterFooter />
            </Container>
        </div>
    )
}
export default Footer;