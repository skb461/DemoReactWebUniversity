import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import sakib_image_demo from '../image/IMG_0811.jpg';


function Section_Two_Dept_head() {
    return(
        <>
            <Card style={{ width: '350px' }} className="mx-auto bg-transparent border-0 shadow px-3 py-2 my-2">
                <Card.Img variant="top" src={sakib_image_demo} />
                <Card.Body>
                    <Card.Title className="text-center">Card Title</Card.Title>
                    <Card.Text className="text-center">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    {/* <a href="#" className="btn btn-outline-dark text-center col-12 border-0">See Details</a> */}
                    <Link to='/teacher' className="btn btn-outline-dark text-center col-12 border-0">See More</Link>
                </Card.Body>
            </Card>
        </>
    )
}
export default Section_Two_Dept_head;
