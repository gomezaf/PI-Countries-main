import React from "react";

export default function Card ({image, name, region}){
    return (
        <div>
            <img src={image} alt="flag not found" />
            <h3>{name}</h3>
            <h4>{region}</h4>
        </div>
    )

}