import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/index";

export default function Cards() {
  const allCountries = useSelector((state) => state.countries);
  return (
    <div>
      {allCountries?.map((el) => {
        return (
          <div>
            <Link to={"/home/" + el.id}>
              <Card
                image={el.imageOfTheFlag}
                name={el.name}
                region={el.region}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
