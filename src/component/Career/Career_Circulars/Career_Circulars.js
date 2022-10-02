

import Career_image from '../image/teacher.png'

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card, Button} from 'react-bootstrap';

function Career_Circulars() {
    return(
        <>
            <Card className='border-0 shadow mx-5 py-3'>
                <Card.Img variant="top" src={Career_image} className="rounded-circle w-25 mx-auto d-block" />
                <Card.Body>
                    <Card.Title className='text-center'>Teacher</Card.Title>
                    <Card.Text className='text-center'>
                        A talented Creative Director to join our team
                    </Card.Text>
                    <Card.Text className='text-center'>
                        <b>Vacency:</b> <span>1M+</span>
                    </Card.Text>
                    <h4  className='text-center'><a href="#" className='btn btn-outline-dark'>Apply Now</a></h4>
                </Card.Body>
            </Card>
        </>
    )
}
export default Career_Circulars;