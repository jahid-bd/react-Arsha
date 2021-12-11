import { Col, Container, Row } from "react-bootstrap"
import ctaBg from '../../assets/img/cta-bg.jpg';

const CtaBtn = (props) =>{
    return(
        <a href={props.link} className="cta-btn">Call To Action</a>
    )
}

const Cta = () => {
    return(
        <section className="cta" style={{
            background: `linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(${ctaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '120px 0px',
            backgroundAttachment:'fixed',
        }}>
        <Container>
            <Row className="align-items-center">
                <Col md={9} className="content">
                    <h3>Call To Action</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col md={3}>
                    <CtaBtn />
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Cta;