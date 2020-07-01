import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const SimpleSpaceCards = () => {
    const [img, setImg] =  useState({
        isOpen: false,
        imgIndex: 0
    })


    const imagesAndDescriptions = [
        { image: 'brainster', description: 'Brainster' },
        { image: 'conference room', description: 'Конференциска сала' },
        { image: 'room with stage', description: 'Сала со бина' },
        { image: 'adaptable classroom', description: 'Адаптибилна училница' },
        { image: 'classroom', description: 'Училница' },
        { image: 'classroom1', description: 'Училница' },
        { image: 'hall', description: 'Хол' },
        { image: 'office space', description: 'Канцелариски простор' },
        { image: 'space kitchen', description: 'Space Kitchen' }
    ]
    return (
        <Row className='SimpleSpaceCard'>
            {imagesAndDescriptions.map((room, index) =>
                <Col key={index} lg={4} md={6} sm={6} xs={12} >
                    <Image src={require(`../../assets/images/space/${room.image}.jpg`)} onClick={() => setImg({isOpen: true, imgIndex: index} )} />
                    <h5>{room.description}</h5>
                </Col>
            )}
            {img.isOpen && (
                <Lightbox
                    mainSrc={require(`../../assets/images/space/${imagesAndDescriptions[img.imgIndex].image}.jpg`)}
                    nextSrc={require(`../../assets/images/space/${imagesAndDescriptions[(img.imgIndex + 1) % imagesAndDescriptions.length].image}.jpg`)}
                    prevSrc={require(`../../assets/images/space/${imagesAndDescriptions[(img.imgIndex + imagesAndDescriptions.length - 1) % imagesAndDescriptions.length].image}.jpg`)}
                    onCloseRequest={() => setImg({...img, isOpen: false})}
                    onMovePrevRequest={() => setImg({...img, imgIndex: (img.imgIndex + imagesAndDescriptions.length - 1) % imagesAndDescriptions.length})}
                    onMoveNextRequest={() => setImg({...img, imgIndex: (img.imgIndex + 1) % imagesAndDescriptions.length})}
                />
            )}
        </Row>
    )
}

export default SimpleSpaceCards