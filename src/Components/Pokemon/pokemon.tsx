import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import api from '../../services/apiConfig'
import '../Pokemon/pokemon.css'
import Return from '../Return/Return';

export interface NameProps {
    name: string;
}
function Pokemon() {

    const [imagem, setImagem] = useState<any>();
    const [index] = useState<any>();
    const [pokeName, setPokeName] = useState<any>('');
    const [id, setId] = useState();
    const [type, setType] = useState();
    const [stats, setStats] = useState<any[]>([]);
    const [statsValue, setStatsValue] = useState<any[]>([]);

    //    useParams pega dados da URL
    let { name } = useParams()


    useEffect(() => {
        api.get("pokemon/" + name)
            .then((response: { data: any; }) => {
                const { data } = response;
                setPokeName(data.name);
                setImagem(data.sprites.front_default)
                setId(data.id);
                setType(data.types.map((type: { type: any; }) =>
                    type.type.name).join(' & '));
                setStats(data.stats.map((stats: { stat: any; }) =>
                    stats.stat.name));
                setStatsValue(data.stats.map((stats: { base_stat: any; }) =>
                    stats.base_stat));

            })
            .catch((error: any) => console.log(error));
    }, [name])

    return (
        <>
            <Return />
            <div className="poke__container">
                <div className="upper__container">
                    <img src={imagem} className="poke__img" />
                    <div className="pokemon__basic">
                        <p className="rc pokeName">{pokeName}</p>
                        <p className="rc id">ID: #{id}</p>
                        <p className="rc type">Type: {type}</p>
                    </div>
                </div>
                <div className="lower__container">
                    <div className="stats__container">
                        {stats.map((stat: string) => {
                            return (
                                <p className="stats__name"> {stat}: </p>
                            )
                        })}
                    </div>
                    <div className="value__container">
                        {statsValue.map((value) => {
                            return (
                                <p className="stats__value"> {value} </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Pokemon;
