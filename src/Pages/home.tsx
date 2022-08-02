import React, { useEffect, useState } from 'react';
import api from '../services/apiConfig';
import Cards from '../Components/Cards/cards';
import '../Components/Cards/cards.css'


type pokemon = {
    name: string;
    front_default: string;
}

export default function Home() {
    const [pokemon, setPokemon] = useState<any[]>([]);
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        getPokemons();
        // getPokemon();
    }, [])

    // useEffect(() => {
    //     getPokemon();
    // }, [pokemons])

    function getPokemons() {
        api.get("pokemon/?limit=40")
            .then((response) => setPokemons(response.data.results))
            .catch((error) => console.log(error))
    }

    // function getPokemon() {
    //     for (let index = 0; index < pokemons.length; index++) {
    //             const name = pokemons[index].name;


    //     }
    // }
    return (
        <>
            <div className="cards__container">
                {pokemons.map((poke, index) => (
                    <Cards
                        name={poke.name}
                    />
                ))}
            </div>
        </>

    )
}


