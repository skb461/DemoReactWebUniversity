
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card, Button} from 'react-bootstrap';

import sakib_image_demo from '../../image/cse-3.png'


function Section_One_Dept_Sub_part() {
    return(
        <>
            <Card style={{ width: '400px' }} className="mx-auto bg-transparent border-0 shadow px-3 py-2 my-3">
                <Card.Img variant="top" src={sakib_image_demo} />
                <Card.Body>
                    <Card.Text className="">
                        <h6>2 year</h6>
                    </Card.Text>
                    <Card.Title className="">Department of Computer Science and Engineering</Card.Title>
                    <Card.Text className="">
                        <h6>$4,000,000</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore aliqua. Ut enim ad minim veniam</p>
                    </Card.Text>
                    <a href="#" className="btn btn-outline-dark">See Details</a>
                </Card.Body>
            </Card>
        </>
    )
}
export default Section_One_Dept_Sub_part;
