import { data } from "autoprefixer"

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: "",
}

const PokemonReducer = (state = DefaultState, { type, payload, pokemonName }) => {
    switch (type) {
        case "Pokemon_Multiple_Loading":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "Pokemon_Multiple_Fail":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to find pokemon"
            }
        case "Pokemon_Multiple_Success":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data:{
                    ...data,
                    [pokemonName]:payload
                }
            }
        default:
            return state
    }
}

export default PokemonReducer;