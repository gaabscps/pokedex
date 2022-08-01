import React, { useEffect, useState } from 'react';
import api from '../services/apiConfig';
import Cards from '../Components/Cards/cards';
import '../Components/Cards/cards.css'


export default function Home() {
    const [pokemon, setPokemon] = useState<any[]>([]);
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        getPokemons();
        getPokemon();
    }, [])

    // useEffect(() => {
    //     getPokemon();
    // }, [pokemons])

    function getPokemon() {
        let caca: any[] = [];

        for (let index = 0; index < pokemons.length; index++) {
            const name = pokemons[index].name
            api.get("pokemon/" + name)
                .then(response => caca.push(response.data))
        }
        setPokemon(caca);
    }

    function getPokemons() {
        api.get("pokemon/?limit=10")
            .then((response) => setPokemons(response.data.results))
            .catch((error) => console.log(error))
    }
    return (
        <div className="cards__container">
            {pokemons.map((poke, index) => (
                <Cards
                    name={poke.name}
                />
            ))}
        </div>
    )
}