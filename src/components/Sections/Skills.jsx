import { Col, Container, Row } from "react-bootstrap"
import skillsImg from '../../assets/img/skills.png'

const SkillBar = (props) => {
    const name = props.name;
    const percent = props.percent;
    return(
        <li className={name}><span style={{textTransform: 'uppercase'}}>{name}</span> <span className="percent">{percent}%</span></li>
    )
}

const Skills = () => {
    return(
        <section className="skills">
        <Container>
            <Row>

                <Col lg={6}>
                    <img src={skillsImg} alt="Skills" className="img-fluid" />
                </Col>

                <Col lg={6} className="content">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                    <p className="italic-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="skills-content">
                        <ul>
                            <SkillBar name='html' percent='100' />
                            <SkillBar name='css' percent='90' />
                            <SkillBar name='javascript' percent='75' />
                            <SkillBar name='photoshop' percent='55' />
                        </ul>
                    </div>
                </Col>
            
            </Row>
        </Container>
    </section>
    )
}

export default Skills;