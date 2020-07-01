import React from 'react';
import {Row, Col } from 'react-bootstrap';

const MainImageAndHeader = () => {
    return (
        <Row>
            <Col  className='MainImageAndHeader' md={12}>
                <div className='darken'>
                    <h1>Центар за Учење, Кариера и Иновација</h1>
                </div>
            </Col>
        </Row>
    )
}

export default MainImageAndHeader;