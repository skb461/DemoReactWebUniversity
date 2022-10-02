
import {Container,Col,Row,Card } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import drn from "../image/275771575_3052140461719773_7127875687511620466_n.jpg";

function About_Image_Card() {
    return(
        <Card className=" border-0">
            <Card.Img src={drn} alt="Card about_image py-5 my-5" />
        </Card>
    )
}
export default About_Image_Card;