
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";

import RuhulAmin_AsstReg from '../image/RuhulAmin_AsstReg.jpg'


function Office_Cards() {
    return(
        <>
            <Card style={{ width: '250px' }} className="shadow border-0 m-3">
                <Card.Img variant="top"  className="p-4 rounded-circle" src={RuhulAmin_AsstReg} />
                <Card.Title className="text-center">Name: Ruhul Amin</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <b>Designation:</b> Registrar (Acting)<br />

                        <b>Phone:</b> 01820-008876<br />

                        <b>Email:</b> ruhulniter@gmail.com<br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
export default Office_Cards;