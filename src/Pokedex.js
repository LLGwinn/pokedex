import React from 'react';
import './pokedex.css';
import Pokecard from './Pokecard';
import { calculateScore } from './helpers';

const Pokedex = ( {hand, isWinner}) => {   
    return (
        <div className='Pokedex'>
            {hand.map(h => {
                let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${h.id}.png`;
                return <Pokecard
                        key={h.id} 
                        name={h.name} 
                        image={imageUrl} 
                        type={h.type} 
                        exp={h.base_experience} /> 
                }     
            )}
            { isWinner ? <h3 className='Pokedex-winner'>THIS HAND WINS!</h3> : "" }
        </div>
    )
}

export default Pokedex;