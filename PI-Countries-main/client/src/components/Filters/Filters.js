import React from "react";

import FilterByActivity from "./FilterByActivity";
import FilterByOrderAlpha from "./FilterByOrderAlpha";
import FilterByPopulation from "./FilterByPopulation";
import FilterByRegion from "./FilterByRegion";

export default function Filters (){
    return (
        <div>
            <FilterByRegion />
            <FilterByPopulation />
            <FilterByOrderAlpha />
            <FilterByActivity />
        </div>
    )

}