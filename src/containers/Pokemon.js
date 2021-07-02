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
            return <div className="flex justify-between bg-gray-300 p-3">
                <div className="flex items-center flex-wrap w-1/5 bg-red-100 rounded-xl p-2">
                    <h1 className="w-screen">Spires</h1>
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <img src={pokemonData.sprites.back_default} alt="" />
                    <img src={pokemonData.sprites.front_shiny} alt="" />
                    <img src={pokemonData.sprites.back_shiny} alt="" />
                </div>
                <div className="w-2/5 bg-red-100 rounded-xl p-2">
                    <h1>Status</h1>
                    {
                        pokemonData.stats.map(el => {
                            return <p>{el.stat.name} : {el.base_stat}</p>
                        })
                    }
                </div>
                <div className="w-1/5 bg-red-100 rounded-xl p-2">
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