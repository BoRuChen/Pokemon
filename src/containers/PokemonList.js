import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { GetPokemonList } from '../store/actions/pokemonActions';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate"

const PokemonList = (props) => {
    const [search,setSearch] = useState("");
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList);
    useEffect(() => {
        FetchDate(page);
    }, [page]);

    const FetchDate = (page) => {
        dispatch(GetPokemonList(page))
    }

    const ShowDates = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className="p-1 w-10/12 m-auto">
                    {pokemonList.data.map(e1 => {
                        return<Link to={`/pokemon/${e1.name}`} key={e1.name} className="">
                            <div className="m-2 items-center w-5 flex justify-between w-full border-yellow-600 border-2 rounded-lg p-2 hover:bg-yellow-300">
                                <p>{e1.name}</p>
                            </div>
                        </Link>

                    })}
                </div>
            )
        }

        if (pokemonList.loading) {
            return <p>Loading...</p>
        }
        if (pokemonList.errorMeg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }

        return (<p>unable to get data</p>)
    }

    return (
        <div className="">
            <div className="flex items-center justify-center m-2">
                Search:
                <input type="text" className=" border-2 mx-2" onChange={e => setSearch(e.target.value)}/>
                <button className="border-2 rounded-full bg-green-200 " onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
            {ShowDates()}
            {
                !_.isEmpty(pokemonList.data) && (
                    <ReactPaginate 
                        pageCount = {Math.ceil(pokemonList.count / 15)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={(data) => setPage(data.selected+1)}
                        previousLabel="<"
                        nextLabel=">"
                        containerClassName="flex items-center justify-center p-1 w-10/12 m-auto"
                        pageClassName="mx-5 border-2 w-7 text-center border-blue-300 hover:bg-blue-300 "
                        nextClassName=" border-2 w-7 text-center border-blue-300 hover:bg-blue-300"
                        previousClassName=" border-2 w-7 text-center border-blue-300 hover:bg-blue-300"
                    />
                )
            }
        </div>
    )
}

export default PokemonList;