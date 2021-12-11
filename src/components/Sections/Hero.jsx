import { Col, Container, Row } from "react-bootstrap"
import heroImg from '../../assets/img/hero-img.png';
const Hero = () => {
    return(
        <div id="cover">
            <Container>
                <Row>

                    <Col md={6} className="pt-4 justify-content-center order-2 order-lg-1" id="top">
                        <h1>Better Solutions For Your Business</h1>
                        <h2>We are team of talanted designers making websites with Bootstrap</h2>
                        <div className="d-lg-flex text">
                            <a href="#" className="get-started-btn">Get Started</a>
                            <a href="" className="watch"> <span style={{padding:'0 5px'}}>Watch Video</span> <i className="fa fa-play-circle play-btn" aria-hidden="true"></i></a>
                        </div>
                    </Col>

                    <Col md={6} className="order-1 order-lg-2 cover-img">
                        <img src={heroImg} alt="" className="animated" />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Hero;