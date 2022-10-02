import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row, Card, Container} from 'react-bootstrap';
import Section_One_Notice from "./Section_One_Notice/Section_One_Notice";
import Notice_Section_One_Card from "./Section_One_Notice/Notice_Section_One_Card/Notice_Section_One_Card";


function Notice() {
    return(
        <>
            <div className="mt-5 pt-5">
                <h1 className="display-1 text-center py-5 about_top">Notice Board</h1>
            </div>
            <div className="py-5">
                <h3 className="text-center text-dark">General Notice Board</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container>
                <Row>
                    <Col>
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                    </Col>
                    <Col>
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                    </Col>
                </Row>
                <a href="#" className="btn btn-outline-dark d-block mx-auto my-5"> Read More </a>
            </Container>
            <div className="py-5">
                <h3 className="text-center text-dark">Department Wise Notice Board</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container className="pb-5">
                <Row>
                    <Col lg={6}>
                        <Notice_Section_One_Card />
                    </Col>
                    <Col lg={6}>
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <a href="#" className="btn btn-outline-dark my-3"> Read More </a>
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">
                <Row>
                    <Col lg={6}>
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <a href="#" className="btn btn-outline-dark my-3"> Read More </a>
                    </Col>
                    <Col lg={6}>
                        <Notice_Section_One_Card />
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">
                <Row>
                    <Col lg={6}>
                        <Notice_Section_One_Card />
                    </Col>
                    <Col lg={6}>
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <a href="#" className="btn btn-outline-dark my-3"> Read More </a>
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">
                <Row>
                    <Col lg={6}>
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <a href="#" className="btn btn-outline-dark my-3"> Read More </a>
                    </Col>
                    <Col lg={6}>
                        <Notice_Section_One_Card />
                    </Col>
                </Row>
            </Container>
            <Container className="pb-5 mb-5 py-5">
                <Row>
                    <Col lg={6}>
                        <Notice_Section_One_Card />
                    </Col>
                    <Col lg={6}>
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <Section_One_Notice />
                        <a href="#" className="btn btn-outline-dark my-3"> Read More </a>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}
export default Notice;