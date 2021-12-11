import { Container,Col, Row } from "react-bootstrap";
import GetStartedBtn from "../Global/GetStartedBtn";


const Nav = () => {
    return(
    <nav className="mobile-nav align-items-center">

        <label for="drop" className="toggle nav-icon"><i className="fa fa-bars"></i></label>
        <input type="checkbox" id="drop"/>

        <ul className="menu">
            <li><a href="index.html" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Team</a></li>
            <li>
                <label for="drop_1" className="toggle">Dropdown +</label>
                <a href="">Dropdown +</a>
                <input type="checkbox" id="drop_1"/>
                    <ul> 
                        <li><a href="#">Dropdown 1</a></li>
                        <li><a href="#">Dropdown 2</a></li>
                        <li>
                            <label for="drop_2" className="toggle">Deep Dropdown +</label>
                            <a href="#">Deep Dropdown +</a>
                            <input type="checkbox" id="drop_2"/>
                                <ul>
                                    <li><a href="#">Deep Dropdown 1</a></li>
                                    <li><a href="#">Deep Dropdown 2</a></li>
                                    <li><a href="#">Deep Dropdown 3</a></li>
                                    <li><a href="#">Deep Dropdown 4</a></li>
                                    <li><a href="#">Deep Dropdown 5</a></li>
                                </ul>
                        </li>
                        <li><a href="#">Dropdown 3</a></li>
                        <li><a href="#">Dropdown 4</a></li>
                    </ul>
            </li>
            <li><a href="#">Contract</a></li>
        </ul>
    </nav>
    )
}

const Header = () => {
    return(
        <header id="header" className="fixed-top">
            <Container>
                <Row className="align-items-center">

                    <Col lg={2} xl={3}>
                        <h1 id="logo" className="mr-auto"><a href="#">Arsha</a></h1>
                    </Col>

                    <Col lg={10} xl={9}>
                        <Nav />
                        <div className="get-started">
                            <GetStartedBtn size='small' />
                        </div>
                        
                    </Col>  

                </Row>
            </Container>
        </header>
    )
}

export default Header;