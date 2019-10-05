import React from 'react';
import './Card.css'


// props.title props.content from list

function Card(props){
    return(
        <div className='Card'>
            <h3>{props.title}</h3>
                <p>{props.content}</p>
        </div>
    )
}

export default Card;