import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';

const SocialNetworks = () => {

    return (
        <Col lg={{span:3, offset: 0}} md={{span:4, offset: 2}} sm={{span:4, offset: 1}} className='SocialNetworks'>
            <h6>Социјални Мрежи</h6>
            <ul>
                <li>
                    <a href='https://www.facebook.com/brainster.co/' className='facebook'  target='_blank' rel='noopener noreferrer' >
                        <FontAwesomeIcon size='2x' icon={['fab', 'facebook']} />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/school/brainster-co/' className='linkedin'  target='_blank' rel='noopener noreferrer' >
                        <FontAwesomeIcon size='2x' icon={['fab', 'linkedin-in']} />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/brainsterco/' className='instagram'  target='_blank' rel='noopener noreferrer' >
                        <FontAwesomeIcon size='2x' icon={['fab', 'instagram']} />
                    </a>
                </li>
            </ul>
        </Col>
    )
}

export default SocialNetworks;