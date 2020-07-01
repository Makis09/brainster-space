import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class CalendarToolBar extends React.PureComponent {


    render() {
        const { onNavigate, label } = this.props;
        return (
            <div className='toolbar-container'>
                <h1>Календар</h1>
                <div>
                    <span className='btn-back arrows' onClick={() => onNavigate('PREV')}>
                        <FontAwesomeIcon icon='arrow-left' />
                    </span>
                    <label className='label-date'>{label}</label>
                    <span className='btn-next arrows' onClick={() => onNavigate('NEXT')}>
                        <FontAwesomeIcon icon='arrow-right' />
                    </span>
                </div>
            </div >
        );
    }
}

export default CalendarToolBar;