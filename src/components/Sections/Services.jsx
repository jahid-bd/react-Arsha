import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "../Global/SectionHeader"

const IconBox = (props) => {
    const icon = props.icon;
    const heading = props.heading;
    const title = props.title;
    const link = props.link;
    return(
    <div className="icon-box">
        <div className="icon"><i className={icon}></i></div>
        <h4><a href={link}>{heading}</a></h4>
        <p>{title}</p>
    </div>
    )
}

const Services = () => {
    return(
        <section className="services">
        <Container>

            <SectionHeader heading='Services' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.' />
            

            <Row>
                <Col xl={3} md={6}>
                    <IconBox icon='fab fa-dribbble' heading='Lorem Ipsum' title='Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi' />
                </Col>

                <Col xl={3} md={6}>
                    <IconBox icon='fas fa-file' heading='Sed ut perspici' title='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' />
                </Col>

                <Col xl={3} md={6}>
                    <IconBox icon='fas fa-tachometer-alt' heading='Magni Dolores' title='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' />
                </Col>

                <Col xl={3} md={6}>
                    <IconBox icon='fas fa-layer-group' heading='Nemo Enim' title='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia' />
                </Col>

            </Row>
        </Container>
    </section>
    )
}

export default Services;