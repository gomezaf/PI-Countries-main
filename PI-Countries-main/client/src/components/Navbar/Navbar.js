import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/index";
import Dropbox from "../Dropbox/index";

export default function Navbar (){
    return(
        <div>
            <Link to={"/createActivity"}><button>create avtivity</button></Link>
            <Dropbox />
            <SearchBar />
        </div>
    )

}