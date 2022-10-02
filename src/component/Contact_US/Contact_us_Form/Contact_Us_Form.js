

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact_Us_Form() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="Text" placeholder="Enter Your Name" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Control type="Text" placeholder="Enter Your Subject" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMassage">
            <Form.Control as="textarea" rows={3} placeholder="Enter Your Massage" className="textarea" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="dark" type="submit">
            Submit
        </Button>
    </Form>
  );
}

export default Contact_Us_Form;