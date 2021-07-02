import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetPokemon } from "../store/actions/pokemonActions";
import _ from "lodash"

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);

    const FetchDate = () => dispatch(GetPokemon(pokemonName));

    useEffect(() => {
        FetchDate();
        console.log(pokemon);
    }, [])

    const showData = () => {
        if (!_.isEmpty(pokemon.data[pokemonName])) {
            const pokemonData = pokemon.data[pokemonName]
            return <div className="flex md:justify-between bg-gray-300 p-3 flex-wrap justify-center">
                <div className="m-1 flex items-center flex-wrap bg-red-100 rounded-xl p-2 w-4/5 md:w-1/5 justify-center">
                    <h1 className="w-screen">Spires</h1>
                    <img src={pokemonData.sprites.front_default} alt="" className="w-1/2" />
                    <img src={pokemonData.sprites.back_default} alt="" className="w-1/2"/>
                    <img src={pokemonData.sprites.front_shiny} alt="" className="w-1/2"/>
                    <img src={pokemonData.sprites.back_shiny} alt="" className="w-1/2"/>
                </div>
                <div className="m-1 w-4/5 bg-red-100 rounded-xl p-2 md:w-2/5">
                    <h1>Status</h1>
                    {
                        pokemonData.stats.map(el => {
                            return <p>{el.stat.name} : {el.base_stat}</p>
                        })
                    }
                </div>
                <div className="m-1 w-4/5 bg-red-100 rounded-xl p-2 md:w-1/5">
                    <h1>Abilities</h1>
                    {
                        pokemonData.abilities.map(el => {
                            return <div>
                                <p>{el.ability.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        }

        if (pokemon.loading) {
            return <p>Loading...</p>
        }

        if (pokemon.errorMsg !== "") {
            return <p>{pokemon.errorMsg}</p>
        }
    }



    return (
        <div className='m-auto w-11/12'>
            <h1 className="">{pokemonName}</h1>
            {showData()}
        </div>
    )
}

export default Pokemon;