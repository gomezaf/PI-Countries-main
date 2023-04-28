import React from "react";
import { useDispatch } from "react-redux";

import { getCountries } from "../../actions";

import Cards from "../Cards/index";
import Navbar from "../Navbar/index";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])
  
  return (
    <div>
      <button onClick={()=>dispatch(getCountries())}>recargar</button>
      <Navbar />
      <Cards/>
    </div>
  );
}
