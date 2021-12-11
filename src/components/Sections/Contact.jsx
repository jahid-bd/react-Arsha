import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "../Global/SectionHeader"

const Info = () => {
    return(
        <div className="info">
        <div className="address hov">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Location:</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
        </div>
        <div className="email hov">
            <i className="fas fa-envelope"></i>
            <h4>Email:</h4>
            <p>jahidbd9x@gmail.com</p>
        </div>
        <div className="phone hov">
            <i className="fas fa-phone-alt"></i>
            <h4>Call:</h4>
            <p>+8801754310604</p>
        </div>
        <iframe src="" allowfullscreen=""></iframe>
    </div>
    )
}

const InputGroup = (props) => {
    const label = props.label;
    const type = props.type;
    const id = props.id;
    return(
        <div className="form-group">
             <label htmlFor={id}>{label}</label>
            <input type={type} name={id} id={id}className="form-control"></input>
        </div>
    )
}

// const TextArea = (props) => {
//     const label = props.label
//     const type = props.type
//     const rows = props.rows
//     return(
//         <label for="message">Message</label>
//          <textarea type="text" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
//     )
// }

const SendBtn = (props) => {
    return(
        <a href={props.link}>Send message</a>
    )
}

const Form = () => {
    return(
        <form className="contact-form">
        <Row>
            <Col md={6} className="form-group">
                <InputGroup label='Name' id='name' type='text' />
            </Col>

            <Col md={6} className="form-group">
                <InputGroup label='Email' id='email' type='email' />
            </Col>

            <Col md={12} className="form-group">
                <InputGroup label='Subject' id='subject' type='text' />
            </Col>

            <Col md={12} className="form-group">
                <InputGroup label='Subject' id='subject' type='text' />
            </Col>
          
            <Col md={12} className="form-group">
                <label for="message">Message</label>
                <textarea type="text" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
            </Col>
            <Col className="form-group submit-btn">
                <SendBtn />
            </Col>
        </Row>
    </form>
    )
}

const Contact = () => {
    return(
        <section className="contact"> 
        <Container>
            <SectionHeader heading='Contact' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                     Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                     Quia fugiat sit in iste officiis commodi quidem hic quas.' />
           
            <Row>
                <Col lg={5} className="d-flex align-items-strecth">
                    <Info />
                </Col>

                <Col lg={7} className="d-flex">
                    <Form />
                </Col>
            </Row>

        </Container>
    </section>
    )
}

export default Contact;