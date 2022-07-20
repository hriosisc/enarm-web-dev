import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/platform/components/Cards.css';

const Cards = (props) => {
    return (
        <div className='c-card'>
            <div className='c-card-head'>
                <span className='regular-16 white'>
                    <i className='material-icons'>{props.icon}</i>
                    {props.title}
                </span>
                {props.redirect && <Link className="regular-16" to={props.route}>Ir</Link>}
            </div>
            <div className='c-card-body'>
                <p className='regular-14 white'>{props.parraf}</p>
            </div>
        </div>
    )
}

export default Cards;