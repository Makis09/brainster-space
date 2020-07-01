import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';


const SpaceKitchen = () => {

    return (
        <Row className='SpaceKitchen'>
            <Col lg={4} md={12} sm={12} className='imageGallery'>
                <Row>
                    <Col lg={12} md={6} sm={6}> 
                        <Image fluid src={require('../../assets/images/space kitchen/IMG_7777.jpg')} />
                    </Col>
                    <Col md={6}  sm={6}className='bigImageSMscreen'>
                        <Image fluid src={require('../../assets/images/space kitchen/IMG_7362.jpg')} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6} > 
                        <Image className='smallImage' fluid src={require('../../assets/images/space kitchen/IMG_7385.jpg')} />
                    </Col>
                    <Col lg={6} md={6} sm={6} > 
                        <Image className='smallImage' fluid src={require('../../assets/images/space kitchen/IMG_7361.jpg')} />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} className='bigImage'>
                <Image src={require('../../assets/images/space kitchen/IMG_7362.jpg')} />
            </Col>
            <Col lg={4} md={12} sm={12} className='card-description'>
                <h1>Space Kitchen</h1>
                <p>Место каде сите настани започнуваат и завршуваат. Место каде нашиот тим готви и експериментира. Нашата кујна има само едно правило. <br /><br /> Храната мора да биде вегетаријанска. Пијалок, кафе или мезе. Вие одберете вид на кетеринг ние ќе го обезбедиме.</p>
            </Col>
        </Row>
    )
}

export default SpaceKitchen;