import {Col, Container, Row} from 'react-bootstrap';
import CardPrize from './CardPrize';

import firstPlace from '../pictures/prizes/1.png'
import secondPlace from '../pictures/prizes/2.png'
import thirdPlace from '../pictures/prizes/3.png'

const Prizes = () => {
    return (
        <section id="pricing" className="ud-pricing aw-dark-back">
            <Container>
                <Row>
                    <Col lg={12} data-aos="zoom-in">
                        <div className="aw-prizing-title neonText mx-auto text-center">
                            <h2>AWARDS</h2>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center justify-content-center">

                    <CardPrize place="Second place"
                               type="ud-single-pricing first-item"
                               image={secondPlace}
                               prize="Rs.20,000"
                               pcolor="#CBD5DB"
                               anim="fade-right"/>

                    <CardPrize place="First place"
                               type="ud-single-pricing active"
                               image={firstPlace}
                               prize="Rs.35,000"
                               pcolor="#F9CA1A"
                               anim="flip-up"/>

                    <CardPrize place="Third place"
                               type="ud-single-pricing last-item"
                               image={thirdPlace}
                               prize="Rs.15,000"
                               pcolor="#E28957"
                               anim="fade-left"
                    />
                </Row>
                <Row>
                    <Col lg={7} className="m-auto">
                        <h3 className="h3 text-center aw-consolation effectHv">
                            Consolation prizes for other participants
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Prizes
