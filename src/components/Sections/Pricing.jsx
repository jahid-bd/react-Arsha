import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "../Global/SectionHeader"

const freeServices = <>
    <li><i class="fas fa-check"></i>Quam adipiscing vitae proin</li>
    <li><i class="fas fa-check"></i>Nec feugiat nisl pretium</li>
    <li><i class="fas fa-check"></i>Nulla at volutpat diam uteera</li>
    <li><i class="fas fa-times"></i><span>Pharetra massa massa ultricies</span> </li>
    <li><i class="fas fa-times"></i><span> Massa ultricies mi quis hendrerit</span></li></>

const businessServices = <>
     <li><i class="fas fa-check"></i>Quam adipiscing vitae proin</li>
    <li><i class="fas fa-check"></i>Nec feugiat nisl pretium</li>
    <li><i class="fas fa-check"></i>Nulla at volutpat diam uteera</li>
    <li><i class="fas fa-check"></i>Pharetra massa massa ultricies</li>
    <li><i class="fas fa-check"></i>Massa ultricies mi quis hendrerit</li>
</>

const developerServices = <>
     <li><i class="fas fa-check"></i>Quam adipiscing vitae proin</li>
    <li><i class="fas fa-check"></i>Nec feugiat nisl pretium</li>
    <li><i class="fas fa-check"></i>Nulla at volutpat diam uteera</li>
    <li><i class="fas fa-check"></i>Pharetra massa massa ultricies</li>
    <li><i class="fas fa-check"></i>Massa ultricies mi quis hendrerit</li>
</>

const Card = props => {
    const name = props.name;
    const price = props.price;
    const services = props.services;
    const active = props.active;
    return (
        <div class={`box ${active}`}>
            <h3>{name}</h3>
            <h4>
                <sup>$</sup>
                {price}
            </h4>
            <span>per month</span>
            <ul>
               {services}
            </ul>
            <a href="" class="buy-btn">Get Started</a>
        </div>
    )
}

const Pricing = () => {
    return(
        <section class="pricing">
        <Container>
            <SectionHeader heading='PRICING' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                     Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'/>
                
            <Row>
                <Col lg={4}>
                        <Card name='Free Plan' price='0' services={freeServices} /> 
                </Col>

                <Col lg={4}>
                        <Card name='Business Plan' price='29' services={businessServices} active='active-box' /> 
                </Col>

                <Col lg={4}>
                        <Card name='Developer Plan' price='49' services={developerServices}/> 
                </Col>

               
                </Row>
            </Container>
    </section>
    )
}

export default Pricing;