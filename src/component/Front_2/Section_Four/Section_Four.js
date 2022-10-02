import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row, Container} from 'react-bootstrap';

import Card_Item_program from "./SubParts/Card_Item";
import Card_Item_Club from "./SubParts/Card_Item_Club";
import Card_Item_Lab from "./SubParts/Card_Item_Lab";
import Card_Item_Facalty from "./SubParts/Card_Item_Facalty";
import Card_Item_Transport from "./SubParts/Card_Item_Transport";
import Card_Item_Resedentioal from "./SubParts/Card_Item_Resedentioal";

function Section_Four() {
    return(
        <Container className="py-5">

            <h1 className="text-center display-2 principle py-2" > Our facility </h1>
            
            <Row>
                <Col md={4}>
                    <Card_Item_program />
                </Col>
                <Col md={4}>
                    <Card_Item_Club />
                </Col>
                <Col md={4}>
                    <Card_Item_Lab />
                </Col>
                <Col md={4}>
                    <Card_Item_Facalty />
                </Col>
                <Col md={4}>
                    <Card_Item_Transport />
                </Col>
                <Col md={4}>
                    <Card_Item_Resedentioal />
                </Col>
                
                
            </Row>
        </Container>
    )
}
export default Section_Four;