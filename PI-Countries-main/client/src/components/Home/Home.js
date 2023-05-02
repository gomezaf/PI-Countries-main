import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getCountries } from "../../actions";

import Cards from "../Cards/index";
import Navbar from "../Navbar/index";


export default function Home() {
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])
  
  return (
    <div>
      <Navbar />
      <Cards/>
    </div>
  );
}
