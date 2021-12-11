import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "../Global/SectionHeader"
import memberimg1 from '../../assets/img/team/team-1.jpg';
import memberimg2 from '../../assets/img/team/team-2.jpg';
import memberimg3 from '../../assets/img/team/team-3.jpg';
import memberimg4 from '../../assets/img/team/team-4.jpg';

const SocialLinks = (props) => {
    return(
        <div className="social-link">
                <a href="">
                <i class="fab fa-facebook-f"></i>
                    </a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-linkedin-in"></i></a>
        </div>
    )
}

const Member = (props) => {
    const img = props.img;
    const name = props.name;
    const profession = props.profession;
    const title = props.title;

    return(
    <div className="member">
        <div className="pic">
            <img src={img} alt="" />
        </div>
        <div className="member-info">
            <h4>{name}</h4>
            <span>{profession}</span>
            <p>{title}</p>
            <SocialLinks />
        </div>
    </div>
    )
} 

const Team = () => {
    return(
        <section className="team">
        <Container>
            <SectionHeader heading='TEAM' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                    sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                    Quia fugiat sit in iste officiis commodi quidem hic quas.' />
           
            <Row>
                <Col lg={6}>
                    <Member img={memberimg1} name='Walter White' profession='Chief Executive Officer' title='Explicabo voluptatem mollitia et repellat qui dolorum quasi' />
                </Col>

                <Col lg={6}>
                    <Member img={memberimg2} name='Sarah Jhonson' profession='Product Manager' title='Aut maiores voluptates amet et quis praesentium qui senda para' />
                </Col>

                <Col lg={6}>
                    <Member img={memberimg3} name='William Anderson' profession='CTO' title='Quisquam facilis cum velit laborum corrupti fuga rerum quia' />
                </Col>

                <Col lg={6}>
                    <Member img={memberimg4} name='Amanda Jepson' profession='Accountant' title='Dolorum tempora officiis odit laborum officiis et et accusamus' />
                </Col>
            </Row>
        </Container>
    </section>
    )
} 

export default Team;