import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";


import SearchingBar from "./SearchingBar";
import List from './LIst';
import Header from './Header';
import { RingLoader } from 'react-spinners';

export default function Search() {
    let [list1, setlist1] = useState([]);
    let [search, setsearch] = useState("");
    let [load, setloading] = useState();
    let searchkey = '47c9f94f941879c4cc87b07ecc81c246';
    useEffect(() => {

    }, []);
    let searchinp = (e) => { setsearch(e.target.value); }
    let searchitem = () => {
        setlist1([]);
        setlist1([]);
        setloading(true);
        axios
            .get(
                `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=9264f2e8&app_key=${searchkey}`

            )
            .then(
                (response) => {

                    console.log(response.data.hits[0]);
                    setlist1(response.data.hits);
                    setloading(false);

                },
                () => { }
            );
        return () => { };
    }







    return (
        <div className="offset-3 mx-3">

            <Header />


            <SearchingBar searchinp={searchinp} searchitem={searchitem} searchkey={search} />
            {(load) ?
                <div className="text-center justify-content-center m-5"> < RingLoader loading /> </div> : (list1.length === 0) ? <h1 className="text-center m-5">Nothing to show, Please Search Again !!!</h1> : <List list1={list1} loading={load} />}

        </div>
    )

}
