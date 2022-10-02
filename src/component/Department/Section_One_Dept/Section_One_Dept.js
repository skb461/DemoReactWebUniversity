import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Container, Row, Col} from 'react-bootstrap';
import Section_One_Dept_Sub_part from "./Section_One_Dept_Sub_Part/Section_One_Dept_Sub_Part";

function Section_One_Dept() {
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Section_One_Dept_Sub_part />
                    </Col>
                    <Col>
                        <Section_One_Dept_Sub_part />
                    </Col>
                    <Col>
                        <Section_One_Dept_Sub_part />
                    </Col>
                    <Col>
                        <Section_One_Dept_Sub_part />
                    </Col>
                    <Col>
                        <Section_One_Dept_Sub_part />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Section_One_Dept;