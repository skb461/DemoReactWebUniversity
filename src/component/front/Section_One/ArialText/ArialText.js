
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card, Col} from 'react-bootstrap';

function ArialText() {
    return(
        <>
            <Card className="bg-transparent ArialTextCard border-0">
                <Card.Body>
                    <h1 className="p-1 ArialText">NITER</h1>
                    <Col lg={6}>
                        <p className="p-3 px-5 rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Card.Body>
            </Card>
            
        </>
    )
}
export default ArialText;