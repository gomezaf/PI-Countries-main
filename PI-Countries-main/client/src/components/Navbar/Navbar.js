import React from "react";

import SearchBar from "../SearchBar/index";
import Dropbox from "../Dropbox/index";

export default function Navbar (){
    return(
        <div>
            <Dropbox />
            <SearchBar />
        </div>
    )

}