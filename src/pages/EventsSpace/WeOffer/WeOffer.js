import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const WeOffer = () => {

    return(
        <Row className='WeOffer'>
            <Col md={12}>
                <h1>Нудиме</h1>
            </Col>
            <Col md={12}>
                <span>
                    <FontAwesomeIcon size='lg' icon='globe-europe'/>
                    Простор
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon='utensils'/>
                    Space Kitchen
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon='globe'/>
                    Логистика
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon='microphone-alt'/>
                    Техничка Поддршка
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon='volume-up'/>
                    Звук
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon={['far', 'lightbulb']}/>
                    Светло
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon='network-wired'/>
                    Помош при Организација
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon='camera'/>
                    Видео и Фотографија
                </span>
                <span>
                    <FontAwesomeIcon size='lg' icon={['fab', 'facebook']}/>
                    Промоција на Социјални Мрежи
                </span>
            </Col>
        </Row>
    )
}

export default WeOffer;