/* eslint-disable react/jsx-pascal-case */
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/video-react/dist/video-react.css";

import niter_video from "./video/NITER OVERVIEW - Made with Clipchamp.mp4"

import drn from "./image/drn.jpg";

import { Player } from 'video-react';

import { Col, Row, Container, Card, Carousel, Table } from 'react-bootstrap';
import Section_Five from "./Section_Five/Section_Five";
import Section_Two from "./Section_Two/Section_Two";
import Section_Four from "./Section_Four/Section_Four";
import Card_Item_Club from "./Section_Four/SubParts/Card_Item_Club";
import Niter_Club_Card from "../Niter_Clubs/Niter_Club_Card/Niter_Club_Card";
import Front_Footer_Image_Card from "./Front_Footer_Image_Card/Front_Footer_Image_Card";


function Front_2() {
    return(
        <>
            {/* <Player
                playsInline
                poster="/assets/poster.png"
                src={niter_video}
            /> */}
            <div>
            <video
                src={niter_video}
                autoPlay
                loop
                muted
            />
            </div>
            <Container className="front_card mb-5">
                <Card style={{ width: '18rem' }} className="rounded ">
                    <Card.Body>
                        <Card.Title className="text-center">Welcome To<br /><b><span className="display-1 Front_Text">NITER</span></b></Card.Title>
                    </Card.Body>
                </Card>

                <b><h1 className="bg-prim rounded ms-5 my-3 p-4 text-center text-light bg-dark shadow">Creating a world people need now.</h1></b>
                <h5 className="text-center me-5 mb-5 p-5 text-muted shadow rounded bg_prime_under">The future is not only what you dream about; it’s what you create. Together, we’re <br/> finding solutions for challenges that can’t wait.</h5>
            </Container>
            
            <Container className="notice-card mb-5">
                <Card style={{ width: '40em' }} className="rounded mt-5 shadow">
                    <Card.Body>
                        <Card.Title className="text-center display-1"><b>Notice Board</b></Card.Title>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="bg-notice-card mb-5 rounded">
                <Row>
                    <Col lg={4}>
                        
                    </Col>
                    <Col>
                        <Row className="bg-notice">
                            <Col lg={2} className="text-light rounded-right px-5 justify-content-end"></Col>
                            <Col lg={10} className="text-light rounded-right px-5  justify-content-end">
                                <Section_Five />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div className="principal_div pt-5">
                <Container className=" pt-5">
                    <Section_Two />
                </Container>
            </div>

            <Container className="mt-5 pt-5">
                <div className="mt-5 pt-5">
                    <h1 className="p-4 bg-light text-dark border rounded shadow col-3 text-center">Our Facilities</h1>
                </div>
            </Container>

            <div className="pb-5 mb-5">
                <Carousel>
                    <Carousel.Item>

                        <Row>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                        </Row>

                    </Carousel.Item>
                    <Carousel.Item>

                        <Row>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                        </Row>

                    </Carousel.Item>
                    <Carousel.Item>

                        <Row>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                            <Col>
                                <Card_Item_Club />
                                <Card_Item_Club />
                            </Col>
                        </Row>

                    </Carousel.Item>
                </Carousel>
            </div>

            <Container className="mt-5 pt-5 ">
                <div className="">
                    <h1 className="p-4 bg-dark text-light rounded shadow col-3 text-center aling-content-end shadow">Events</h1>
                </div>
            </Container>
                <Row className=" mb-4 mx-5">
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                </Row>
                <Row className=" mb-5 pb-5 mx-5">
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                    <Col className="mx-auto d-block"><Front_Footer_Image_Card /></Col>
                </Row>
        </>
    )
}
export default Front_2;
