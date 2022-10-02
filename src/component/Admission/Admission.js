import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


import {Col, Row, Card, Container} from 'react-bootstrap';
import Sample_pdf from "./pdf/Result_Reexam_Quota_Related_Notice.jpg"

function Admission() {
    return(
        <>
            <div className="mt-5 pt-5">
                <h1 className="display-1 text-center py-5 about_top">Admission Info</h1>
            </div>
            <Row className="pb-3 mb-3">
                <Col>
                    <div className="py-5">
                        <h3 className="text-center text-dark">Undergraduate Admission</h3>
                        <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                        <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <img src={Sample_pdf} className="mx-auto d-block border" />
                </Col>
                <Col>
                    <div className="py-5">
                        <h3 className="text-center text-dark">Graduate Admission</h3>
                        <hr className="solid_faculti w-25 mx-auto d-block text-center" />
                        <p className="text-muted text-center m,x-auto d-block justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <img src={Sample_pdf} className="mx-auto d-block border" />
                </Col>
            </Row>
            <div className="my-5 py-5">
                <h1 className="pt-5 pb-2 text-center text-muted">Get Enrolled Today</h1>

                <hr className="solid_about solid_about_end d-block mx-auto" />

                <p className="h6 text-center py-3">Magna aliqua ut enim ad minim veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip!</p>

                <h1 className="text-center justify-content-center"><a href="" className="btn btn-outline-dark">Admission help Desk</a></h1>
            </div>
        </>
    )
}
export default Admission;