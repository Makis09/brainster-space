import React from 'react';
import { useContext, useState } from 'react';
import { MyContext } from '../../Context/MyContext';
import { Col } from 'react-bootstrap';

const SpaceBlogFilters = (props) => {
    const { areFiltersExpanded } = useContext(MyContext);
    const [activeFilter, setActiveFilter] = useState('СИТЕ')
    const activeStyle = {
        maxHeight: '100vh'
    }

    const filterClicked = (e) => {
        props.function(e.target.innerHTML);
        setActiveFilter(e.target.innerHTML);
    }
 
    return (
        <Col md='12' className='SpaceBlogFilters' style={areFiltersExpanded ? activeStyle : null}>
            <ul  >
                <li>
                    <button className={activeFilter === 'СИТЕ' ? 'activeFilter' : ''} onClick={(e) => filterClicked(e) } >СИТЕ</button>
                </li>
                <li>
                    <button className={activeFilter === 'КАРИЕРА' ? 'activeFilter' : ''} onClick={(e) => filterClicked(e) } >КАРИЕРА</button>
                </li>
                <li>
                    <button className={activeFilter === 'ТЕХНОЛОГИЈА' ? 'activeFilter' : ''} onClick={(e) => filterClicked(e) } >ТЕХНОЛОГИЈА</button>
                </li>
                <li>
                    <button className={activeFilter === 'DATA SCIENCE' ? 'activeFilter' : ''} onClick={(e) => filterClicked(e) } >DATA SCIENCE</button>
                </li>
                <li>
                    <button className={activeFilter === 'МАРКЕТИНГ' ? 'activeFilter' : ''} onClick={(e) => filterClicked(e) } >МАРКЕТИНГ</button>
                </li>
                <li>
                    <button className={activeFilter === 'ДИЗАЈН' ? 'activeFilter' : ''} onClick={(e) => filterClicked(e) } >ДИЗАЈН</button>
                </li>
                <li>
                    <button className={activeFilter === 'IMPACT' ? 'activeFilter' : ''} onClick={(e) => filterClicked(e) } >IMPACT</button>
                </li>
                <li>
                    <a href='https://medium.com/wearelaika/brainster-space-the-New-home-of-the-local-tech-community-In-skopje-ffe97b564152'>
                        #SpaceFamily</a>
                </li>
            </ul>
        </Col>
    )
}

export default SpaceBlogFilters;