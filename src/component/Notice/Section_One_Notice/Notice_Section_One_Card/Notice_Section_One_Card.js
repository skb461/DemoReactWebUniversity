
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card} from 'react-bootstrap';

import Notice_image_2 from '../../image/pexels-peter-szabo-218434.jpg';

function Notice_Section_One_Card() {
    return(
        <Card className="bg-dark text-white">
            <Card.Img src={Notice_image_2} alt="Card image" />
            <Card.ImgOverlay>
                                
                <Card.Text className="mt-5 pt-5">Notice For The Department Of</Card.Text>
                <Card.Title className="mb-5 pb-5 h1 display-3 shadow">Computer Science and Engineering</Card.Title>

            </Card.ImgOverlay>
        </Card>
    )
}
export default Notice_Section_One_Card;