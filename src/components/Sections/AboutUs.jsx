import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "../Global/SectionHeader"

const LearnMoreBtn = (props) => {
    return(
        <a href={props.link} id="learn-more">Learn More </a>
    )
}

const AboutUs = () => {
    return(
    <section className="about">
        <Container>
            <SectionHeader heading='About Us' />
            <Row className="content">
                <Col lg={6}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li><i className="fas fa-check-doublefa-check-double"></i>llamco laboris nisi ut aliquip ex ea commodo consequat</li>
                        <li>
                            <i className="fas fa-check-double"></i>
                            Duis aute irure dolor in reprehenderit in voluptate velit</li>
                        <li><i className="fas fa-check-double"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    </ul>  
                </Col>

                <Col lg={6}>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <LearnMoreBtn link='#' /> 
                </Col>
            </Row>
        </Container>  
    </section>
    )
}

export default AboutUs;