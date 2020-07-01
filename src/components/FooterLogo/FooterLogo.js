import React from 'react';
import { Image, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo/brainster_space_logo.svg';


const FooterLogo = () => {

    const scrollToTop =() => {
        window.scrollTo(0, 0);
    }

    return (
        <Col lg={{ span: 1, offset: 5 }} md={{ span: 2, offset: 1 }} sm={{ span: 2, offset: 1 }} xs={3} className='FooterLogo'>
            <Image src={logo} onClick={()=> scrollToTop()}/>
        </Col>
    )
}

export default FooterLogo;