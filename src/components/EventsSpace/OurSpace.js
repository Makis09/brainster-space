import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SimpleSpaceCards from '../Cards/SimpleSpaceCards';


const OurSpace = () => {

    return (
        <Col md={12} className='OurSpace'>
            <Row>
                <Col lg={3} md={12} className='card-description'>
                    <h1>Нашите простории</h1>
                    <p>
                        Коплетно адаптибилни. Една сала за 150 учесници или три помали сали за групи од по 50 учесника. Училници за од 25 до 40 учесника. Избор од две локации. <br /> <br /> Пулт за прием. И најважното место за networking-Brainster Kitchen. <br /> <br />Како го замислувате вашиот следен настан?
            </p>
                </Col>
                <Col lg={9} md={12}>
                        <SimpleSpaceCards />
                </Col>
            </Row>
        </Col>
    )
}

export default OurSpace;