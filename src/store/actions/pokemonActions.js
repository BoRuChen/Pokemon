import axios from 'axios';

export const GetPokemonList = (page) => async (dispatch) => {
    try {
        dispatch({
            type:'Pokemon_List_Loading',
        })

        const perPage = 15;
        const offset = (page-1)*perPage;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)
        
        dispatch({
            type:'Pokemon_List_Success',
            payload:res.data
        })
    }
    catch (e){
        dispatch({
            type:'Pokemon_List_Fail'
        })
    }
}

export const GetPokemon = (pokemon) => async (dispatch) => {
    try {
        dispatch({
            type:'Pokemon_Multiple_Loading',
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        
        dispatch({
            type:'Pokemon_Multiple_Success',
            payload:res.data,
            pokemonName:pokemon
        })
    }
    catch (e){
        dispatch({
            type:'Pokemon_Multiple_Fail'
        })
    }
}