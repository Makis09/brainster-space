import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const UsefulLinks = () => {

    const popup = <>
        <OverlayTrigger
            trigger="click"
            placement='top'
            overlay={
                <Popover >
                    <Popover.Content>
                        <strong>
                            Емаил:
                            <br />
                            anja@brainster.co
                            <br /><br />
                            Телефон:
                            <br />
                            070 233 414
                        </strong>
                    </Popover.Content>
                </Popover>
            }
        >
            <span className='contact'>Kонтакт</span>
        </OverlayTrigger>{' '}
    </>

    return (
        <Col lg={3} md={3} sm={4} xs={12} className='UsefulLinks'>
            <h6>Корисни Линкови</h6>
            <ul>
                <li>{popup}</li>
                <li><a href='https://www.wearelaika.com/'  target='_blank' rel='noopener noreferrer'>Отворени позиции</a></li>
                <li><a href='https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152'  target='_blank' rel='noopener noreferrer'>Галерија</a></li>
                <li><Link to='/events'>Календар</Link></li>
            </ul>
        </Col>
    )
}

export default UsefulLinks;