import React from 'react';
import './pokedex.css';
import pokeData from './pokeData';
import Pokecard from './Pokecard';

const Pokedex = () => {
    return (
        <div className='Pokedex'>
             {pokeData.map(p => {
                let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
                return <Pokecard
                        key={p.id} 
                        name={p.name} 
                        image={imageUrl} 
                        type={p.type} 
                        exp={p.base_experience} /> 
                }     
             )}
        </div>
    )
}

export default Pokedex;