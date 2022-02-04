import React from 'react';
import './pokecard.css'

const Pokecard = ( {name, image, type, exp }) => {
    return (
        <React.Fragment>
            <div className='Pokecard'>
                <h5 className='Pokecard-pokeName'>{name}</h5>
                <img className='Pokecard-img' src={image} alt='Pokemon image'></img>
                <p>Type: {type} <br></br>EXP: {exp}</p>
            </div>
        </React.Fragment>
    )
}

export default Pokecard;