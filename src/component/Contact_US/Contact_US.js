


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


import {Container, Row, Col} from 'react-bootstrap';
import Contact_Us_Form from "./Contact_us_Form/Contact_Us_Form";

// import Resident_Card from "./Resedent_card/Resident_Card";
// import Resedent_Card_Student from "./Resedent_card_Student/Resedent_Card_Student";

function Contact_US() {
    return(
        <Container>
            <div className="mt-5 pt-5">
                <h1 className="display-1 text-center py-5 facalty_top">Information Desk</h1>
            </div>
            <div className="py-3 pt-5">
                <h3 className="text-center text-dark">Leave A Massage</h3>
                <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
            </div>
                <Row className="my-5 py-4">
                    <Col lg={6}>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14589.220454219403!2d90.23332013041208!3d23.91424750214012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e8dae5260da7%3A0x20a78235074c8264!2z4Kac4Ka-4Kak4KeA4KefIOCmrOCmuOCnjeCmpOCnjeCmsCDgpqrgp43gprDgppXgp4zgprbgprIg4KaTIOCml-CmrOCnh-Cmt-Cmo-CmviDgpofgpqjgprjgp43gpp_gpr_gpp_gpr_gpongpp8gLSDgpqjgpr_gpp_gpr7gprA!5e0!3m2!1sen!2sbd!4v1663774875643!5m2!1sen!2sbd"
                        width="600"
                        height="600"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="true"
                        tabIndex="0"
                        className="d-block mx-auto"
                        />
                    </Col>
                    <Col lg={6} className="px-5">
                        <div className="px-3 text-center text-light bg-secondary my-3 rounded">
                            <h4>Address</h4>
                            <p>NITER, Nayarhat Savar, Dhaka 1350 Bangladesh</p>
                            <h4>Call us</h4>
                            <p>01755-060275, 01820-008876, 01722-378211, 01739-452641</p>
                            <h4>Send mail</h4>
                            <p>ad.niter@gmail.com</p>
                        </div>
                        <Contact_Us_Form />
                    </Col>
                </Row>
        </Container>
    )
}
export default Contact_US;