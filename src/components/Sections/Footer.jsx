import { Col, Container, Row } from "react-bootstrap"

const NewsLatter = () => {
    return(
    <div className="footer-newslater">
        <Container>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="">
                        <input type="email" name="email" /><input type="submit" value="subscribe" />
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

const SocialLinks = () => {
    return(
    <div className="social-links">
        <a href=""><i className="fab fa-twitter"></i></a>
        <a href=""><i className="fab fa-facebook-f"></i></a>
        <a href=""><i className="fab fa-instagram"></i></a>
        <a href=""><i className="fab fa-skype"></i></a>
        <a href=""><i className="fab fa-linkedin-in"></i></a>
    </div>
    )
} 
const FooterTop = () => {
    return(
        <div className="footer-top">
            <Container>
                <Row>
                    <Col lg={3} md={6} className="footer-contact">
                        <h3>ARSHA</h3>
                        <p>
                            A108 Adam Street <br/>
                            New York, NY 535022 <br/>
                            United States <br/><br/>
                            <strong>Phone:</strong>+1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com
                        </p>
                    </Col>

                    <Col lg={3} md={6} className="footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                                <a href=""><i className="fas fa-angle-right"></i>Home</a>
                            </li>
                            <li>
                                <a href=""><i className="fas fa-angle-right"></i>About Us</a>
                            </li>
                            <li><a href=""> <i className="fas fa-angle-right"></i>Services</a></li>
                            <li><a href=""> <i className="fas fa-angle-right"></i>Terms of service</a></li>
                            <li><a href=""><i className="fas fa-angle-right"></i>Privacy policy</a></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6} className="footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <a href=""><i className="fas fa-angle-right"></i>Web Design</a>
                            </li>
                            <li>
                                <a href=""><i className="fas fa-angle-right"> </i>Web Devlopment</a>
                            </li>
                            <li><a href=""><i className="fas fa-angle-right"> </i>Product Management</a></li>
                            <li><a href=""><i className="fas fa-angle-right"> </i>Marketing</a></li>
                            <li><a href=""><i className="fas fa-angle-right"> </i>Graphic Design</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="footer-links">
                        <h4>Our Social Networks</h4>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <SocialLinks />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const FooterBottom = () => {
    return(
    <div className="footer-bottom" id="footer-bottom">
        <Container>
            <div className="copyright">
                &#169; Copyright <strong>Arsha.</strong> All Rights Reserved
            </div>
            <div className="creadits">
                Designed by <a href="">Jahid Hasan</a>
            </div>
        </Container>
    </div>
    )
}

const Footer = () => {
    return(
    <footer id="footer">
       <NewsLatter />
        <FooterTop />
       <FooterBottom />
    </footer>
    )
}

export default Footer;