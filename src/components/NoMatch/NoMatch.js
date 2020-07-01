import React from 'react';
import './NoMatch.css';
import { Link } from 'react-router-dom';


const NoMatch = () => {

    return (
        <div className='NoMatch'>
            <h1>ERROR</h1>
            <h2>No Match Found</h2>
            <Link to='/' className='btn'>
                <h3>Go to Homepage</h3>
            </Link>
            <div>
            </div>
        </div>
    )
}

export default NoMatch;