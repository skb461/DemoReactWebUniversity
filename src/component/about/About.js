import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Side_1 from "./image/275771575_3052140461719773_7127875687511620466_n.jpg"

import CountUp from "react-countup";

import {Container, Row, Col} from 'react-bootstrap';

import Section_Five_Mission from "./Section_One_About/Section_Five_Mission";
import Section_Four_Vision from "./Section_One_About/Section_Four_Vision";
import Section_one_About from "./Section_One_About/Section_one_About";
import Section_Three_Facilities from "./Section_One_About/Section_Three_Facilities";
import Section_Two_History from "./Section_One_About/Section_Two_History";
import Section_Two_Dept_head from "../Faculties/Section_Two_Dept_Head/Section_Two_Dept_Head";


function About() {
    return(
        <>
            <div className=" mt-5 pt-5">
                <h1 className="display-1 text-center py-5 about_top">About us</h1>
            </div>
            <div className="py-5">
                <h3 className="text-center text-dark">ABOUT US</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
            <Row>
                <Col lg={6}>
                    <Section_one_About />
                </Col>
                <Col lg={6}>
                    <img src={Side_1} className="about_image mx-auto d-block" />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <img src={Side_1} className="about_image mx-auto d-block" />
                </Col>
                <Col lg={6}>
                    <Section_Two_History />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Section_Three_Facilities />
                </Col>
                <Col lg={6}>
                    <img src={Side_1} className="about_image mx-auto d-block" />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Section_Four_Vision />
                </Col>
                <Col lg={6}>
                    <Section_Five_Mission />
                </Col>
            </Row>
            <Row className="my-5">
                <Col lg={3} className="text-center p-5 bg-dark text-light card_border">
                    <h1>
                        <CountUp start={0} end={1900} duration={2} delay={0.2} />+
                    </h1>
                    <h1>Students</h1>
                </Col>
                <Col lg={3} className="text-center p-5 bg-dark text-light card_border">
                    <h1>
                        <CountUp start={0} end={77} duration={2} delay={0.2} />+
                    </h1>
                    <h1>Teachers</h1>
                </Col>
                <Col lg={3} className="text-center p-5 bg-dark text-light card_border">
                    <h1>
                        <CountUp start={0} end={15} duration={2} delay={0.2} />+
                    </h1>
                    <h1>Clubs</h1>
                </Col>
                <Col lg={3} className="text-center p-5 bg-dark text-light card_border">
                    <h1>
                        <CountUp start={0} end={19} duration={2} delay={0.2} />+
                    </h1>
                    <h1>Labs</h1>
                </Col>
            </Row>
            <div className="mt-5">
                
                <h1 className="display-3 pt-5 pb-2 text-center text-muted">Department Heads</h1>

                <hr className="solid_about" />
            </div>
            <Container>
                <Row className="mb-5">
                    <Section_Two_Dept_head />
                    <Section_Two_Dept_head />
                    <Section_Two_Dept_head />
                    <Section_Two_Dept_head />
                    <Section_Two_Dept_head />
                </Row>
            </Container>
            <div className="my-5 py-5">
                <h1 className="pt-5 pb-2 text-center text-muted">Get Enrolled Today</h1>

                <hr className="solid_about solid_about_end d-block mx-auto" />

                <p className="h6 text-center py-3">Magna aliqua ut enim ad minim veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip!</p>
                <h1 className="text-center justify-content-center"><a href="" className="btn btn-outline-dark">Admission help Desk</a></h1>
            </div>
            
        </>
    )
}
export default About;

