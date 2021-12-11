import {Col, Container, Row } from "react-bootstrap"
import SectionHeader from "../Global/SectionHeader"
import portimg1 from '../../assets/img/portfolio/portfolio-1.jpg';
import portimg2 from '../../assets/img/portfolio/portfolio-2.jpg';
import portimg3 from '../../assets/img/portfolio/portfolio-3.jpg';
import portimg4 from '../../assets/img/portfolio/portfolio-4.jpg';
import portimg5 from '../../assets/img/portfolio/portfolio-5.jpg';
import portimg6 from '../../assets/img/portfolio/portfolio-6.jpg';
import portimg7 from '../../assets/img/portfolio/portfolio-7.jpg';
import portimg8 from '../../assets/img/portfolio/portfolio-8.jpg';
import portimg9 from '../../assets/img/portfolio/portfolio-9.jpg';
const FilterMenu = (props) => {
    return(
    <ul className="portfolio-filters">
        <li className="list active" data-filter="all">All</li>
        <li className="list" data-filter="app">App</li>
        <li className="list" data-filter="caard">Card</li>
        <li className="list" data-filter="web">Web</li>
    </ul>
    )
}

const PortfolioItem = (props) => {
    const img = props.img;
    const name = props.name;
    const title = props.title;
    return(
    <div className="portfolio-iteam">
        <div className="portfolio-img">
            <a href="">
                <img src={img} alt="" className="img-fluid" />
            </a>
        </div>

        <div className="portfolio-info">
            <div className="fl">
                <h4>{name}</h4>
                <p>{title}</p>
            </div>

             <div className="fr">
                <a href="" title={title}><i className="fas fa-plus"></i></a>
                <a href="" title="More Details"><i className="fas fa-link"></i></a>
            </div>
        </div>
    </div>
    )
}

const Portfolio = () => {
    return(
        <section className="portfolio-section">
        <Container>

            <SectionHeader heading='PORTFOLIO' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                     Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit 
                     alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.' />

          
            <FilterMenu />

            <Row className="portfolio-container">
                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg1} name='App 1' title='App' />
                </Col>

                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg2} name='Web 3' title='Web' />
                </Col>

                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg3} name='App 2' title='App' />
                </Col>

                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg4} name='App 3' title='App' />
                </Col>

                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg5} name='Web 2' title='Web' />
                </Col>

                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg6} name='App 3' title='App' />
                </Col>

                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg7} name='Card 1' title='Card' />
                </Col>
                
                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg8} name='Card 3' title='Card' />
                </Col>

                <Col lg={4} md={6} >
                    <PortfolioItem img={portimg9} name='Web 1' title='Web' />
                </Col>

            </Row>

        </Container>
    </section>
    )
}

export default Portfolio;