import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css';
import './assets/css/style.css';
import AboutUs from './components/Sections/AboutUs';
import Clients from './components/Sections/Clients';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Skills from './components/Sections/Skills';
import WhyUs from './components/Sections/WhyUs';
import Cta from './components/Sections/Cta';
import Portfolio from './components/Sections/Portfolio';
import Team from './components/Sections/Team';
import Faq from './components/Sections/Faq';
import Pricing from './components/Sections/Pricing';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';
import BackToTop from './components/Global/BackToTop';

function App() {
    return(
        <>
            <Header />
            <Hero />
            <Clients />
            <AboutUs />
            <WhyUs />
            <Skills />
            <Services />
            <Cta />
            <Portfolio />
            <Team />
            <Pricing />
            <Faq />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    )
}

export default App;