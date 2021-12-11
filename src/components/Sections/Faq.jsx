import { Container } from "react-bootstrap"
import SectionHeader from "../Global/SectionHeader"

const FaqItem = (props) => {
    const id = props.id
    const title = props.title;
    const content = props.content;
    return(
        <li className="accordion-list">
        <input type="checkbox" name="toggle" id={id}className="accordion-toggle" />
        <label for={id}>
            <i className="far fa-question-circle"></i>
            {title}
            <div className="angle">
                <i className="fas fa-angle-down"></i>
                <i className="fas fa-angle-up"></i>
            </div>
        </label>
        <div className="accordion-content">
            <p style={{paddingTop: '5px'}}>{content}</p>
        </div>
    </li>
    )
}

const Faq = () => {
    return(
        <section className="faq">
        <Container>

            <SectionHeader heading='FREQUENTLY ASKED QUESTIONS' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                     Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                     Quia fugiat sit in iste officiis commodi quidem hic quas.' />
           
            <div className="faq-list">
                <ul>
                    <FaqItem id='1' title='Non consectetur a erat nam at lectus urna duis?' content='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.
                                 Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' />

                    <FaqItem id='2' title='Feugiat scelerisque varius morbi enim nunc?' content='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.' />

                    <FaqItem id='3' title=' Dolor sit amet consectetur adipiscing elit?' content='Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis' />

                    <FaqItem id='4' title=' Tempus quam pellentesque nec nam aliquam sem at tortor consequat?' content='Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.' />

                    <FaqItem id='5' title=' Tortor vitae purus faucibus vel pharetra vel turpis nunc aget lorem dolor?' content='Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.' />
                </ul>
            </div>
        </Container>
    </section>
    )
}

export default Faq;