import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {ListGroup} from 'react-bootstrap';

function Research() {
    return(
        <div className="">
            <h3 className="text-muted text-center">Research</h3>
            <ListGroup className="border-0">
                <ListGroup.Item action className="bg-transparent text-light text-center">Cras justo odio</ListGroup.Item>
                <ListGroup.Item action className="bg-transparent text-light text-center" >Dapibus ac facilisis in</ListGroup.Item>
            </ListGroup>    
        </div>
    )
}
export default Research;