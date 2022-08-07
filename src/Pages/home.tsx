import React, { useEffect, useState } from 'react';
import api from '../services/apiConfig';
import Cards from '../Components/Cards/cards';
import '../Components/Cards/cards.css'
import PagCard from '../Components/Pagination/Pagination';
import Search from '../Components/Search/Search';
import Pokemon from '../Components/Pokemon/pokemon';


export default function Home() {
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        getPokemons();
        // getPokemon();
    }, [])

    // useEffect(() => {
    //     getPokemon();
    // }, [pokemons])

    function getPokemons() {
        api.get("pokemon/?limit=20")
            .then((response: { data: { results: React.SetStateAction<any[]>; }; }) =>
                setPokemons(response.data.results))
            .catch((error: any) => console.log(error))
    }

    // function getPokemon() {
    //     for (let index = 0; index < pokemons.length; index++) {
    //             const name = pokemons[index].name;


    //     }
    // }
    return (
        <>
            <div className="search__container">
                <Search />
            </div>
            <div className="cards__container">
                {pokemons.map((poke, index) => (
                    <Cards
                        name={poke.name}
                    />
                ))}
            </div>
            <div className="pag__div-container">
                <PagCard />
            </div>
            <Pokemon
            />
        </>

    )
}


