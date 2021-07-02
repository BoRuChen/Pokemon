const DefaultState={
    loading:false,
    data:[],
    errorMeg:'',
    count:0
}

const PokemonListReducer = (state=DefaultState,{type,payload}) => {
    switch(type){
        case "Pokemon_List_Loading":
            return {
                ...state,
                loading:true,
                errorMeg:''
            }
        case "Pokemon_List_Fail":
            return {
                ...state,
                loading:false,
                errorMeg:"unable to get pokemon"
            }
        case "Pokemon_List_Success":
            return {
                ...state,
                loading:false,
                data:payload.results,
                count:payload.count,
                errorMeg:''
            }
        default:
            return state;
    }
}

export default PokemonListReducer;