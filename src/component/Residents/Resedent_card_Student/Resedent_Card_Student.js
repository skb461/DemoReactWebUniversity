
    
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card} from 'react-bootstrap';


function Resedent_Card_Student() {
    return(
        <Card className="text-dark shadow p-1">
                                
            <Card.Text className="mt-5 pt-5 text-center">Residental Fecility for</Card.Text>
            <Card.Title className="mb-4 pb-4 h1 display-3 text-center">Boys</Card.Title>
            
            <a href="#" className="btn btn-outline-dark text-center col-12 border my-1">Apply Now</a>

        </Card>
    )
}
export default Resedent_Card_Student;