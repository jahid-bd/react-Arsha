import { Col, Container, Row } from "react-bootstrap"
import whyUsBg from '../../assets/img/why-us.png'

const AccordionTab = (props) => {
    const itemNum = props.itemNum;
    const heading = props.heading;
    const title = props.title;
    return(
    <div className="accordion-tab">
        <input type="checkbox" id={`toggle-${itemNum}`} className="accordion-toggle" name="toggle" />
        <label  htmlFor={`toggle-${itemNum}`}><span>{itemNum}</span> {heading} <i className="fa fa-angle-down" aria-hidden="true"></i></label>
        <div className="accordion-content">
            <p style={{paddingTop: '5px'}}>{title}</p>
        </div>
    </div>
    )
}

const WhyUs = () => {
    return(
    <section className="why-section">
        <Container>

            <Row>
                <Col lg={7}  className="order-lg-1 order-2 d-flex flex-column justify-content-center align-items-strecth">

                    <div className="content">
                        <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong> </h3>
                        <p className="p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

                        <div className="accordion-list">
                            <AccordionTab itemNum='1' heading=' Non consecteatur a erat nam at lectus urna duis?' title='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'/>

                            <AccordionTab itemNum='2' heading=' Feugint scelerisque varius morbi enim nunc?' title='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.' />
                            
                            <AccordionTab itemNum='3' heading=' Dolor sit amet consectetur adipiscing elit?' title='Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis' />
                        </div>

                    </div>
                </Col>

                <Col lg={5} className="order-lg-2 order-1 align-items-strecth why-bg" style={{
                    background: `url(${whyUsBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    }}></Col>
            </Row>

        </Container>
    </section>
    )
}

export default WhyUs;