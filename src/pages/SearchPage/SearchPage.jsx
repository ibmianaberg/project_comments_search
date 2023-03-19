import React, {useEffect, useState} from 'react';
import './SearchPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from '../../components/ForSearch/ForSearch';
import {Repo} from '../../components/repo/Repo';



const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
        dispatch(getRepos())
    }, [])

    function searchHandler() {
        dispatch(getRepos(searchValue))
    }

    return (
        <div className="search container">
            <div className="search__items">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search__items--input"/>
                <button onClick={()=> searchHandler()} className="search__items--btn">Search</button>
            </div>

            {
                isFetching === false
                 ?
                repos.map((repo,i) =><Repo repo={repo} key={i}/>)
                 :
                    <div className="search__fetching">

                    </div>
            }
        </div>
    );
};

export default Main;