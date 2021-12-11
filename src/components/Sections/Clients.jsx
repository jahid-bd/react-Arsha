import { Col, Container, Row } from "react-bootstrap";
import clientImg1 from '../../assets/img/clients/client-1.png';
import clientImg2 from '../../assets/img/clients/client-2.png';
import clientImg3 from '../../assets/img/clients/client-3.png';
import clientImg4 from '../../assets/img/clients/client-4.png';
import clientImg5 from '../../assets/img/clients/client-5.png';
import clientImg6 from '../../assets/img/clients/client-6.png';

const ClientItem = (props) => {
    return(
        <Col lg={2} md={4} sm={6} className="justify-align-center">
        <a href=""><img src={props.img} alt="" /></a>
        </Col>
    )
}

const Clients = () => {
    return(
        <section id="clients">
            <Container>
                <Row>
                    <ClientItem img={clientImg1} />
                    <ClientItem img={clientImg2} />
                    <ClientItem img={clientImg3} />
                    <ClientItem img={clientImg4} />
                    <ClientItem img={clientImg5} />
                    <ClientItem img={clientImg6} />
                </Row>
            </Container>
        </section>
    )
}

export default Clients;