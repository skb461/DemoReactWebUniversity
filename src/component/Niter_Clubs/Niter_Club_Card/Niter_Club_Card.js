
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";

import nbc from '../image/nbc.jpg'
import ncac from '../image/ncac.jpg'
import ncc from '../image/ncc.jpg'
import nclc from '../image/nclc.jpg'
import ndc from '../image/ndc.jpg'
import nfsc from '../image/nfps.jpg'
import ngsc from '../image/ngsc.jpg'
import nic from '../image/nic.jpg'
import nja from '../image/nja.jpg'
import nlc from '../image/nlc.jpg'
import nss from '../image/nss.jpg'
import nrc from '../image/nrc.jpg'


function Niter_Club_Card() {
    return(
        <>
            <Card style={{ width: '250px' }} className="shadow border-0 m-3">
                <Card.Img variant="top"  className="p-4 rounded-circle" src={ncc} />
                <Card.Title className="text-center">Niter Computer Club</Card.Title>
                <a href="#" className="btn btn-outline-dark text-center col-12 border">See Details</a>
            </Card>
        </>
    )
}
export default Niter_Club_Card;