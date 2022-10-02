import {Container,Col,Row,Card } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import drn from "../image/drn.jpg";

function Front_Footer_Image_Card() {
    return(
        <Card className="bg-dark text-white">
            <Card.Img src={drn} alt="Card image" />
            <Card.ImgOverlay className="drn py-5">
                <Card.Title className=""><h1>Event Name</h1></Card.Title>
                <Card.Text><h4>00/00/0000</h4></Card.Text>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}
export default Front_Footer_Image_Card;