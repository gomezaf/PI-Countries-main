const axios = require("axios");
const { Country, Activity } = require("../db");

const saveDataInDb = async () => {
  const apiUrl = await axios.get("https://restcountries.com/v3.1/all");
  const infoDbCreate = apiUrl.data.map((el) => {
    Country.findOrCreate({
      where: {
        id: el.cca3,
        name: el.name.common,
        imageOfTheFlag: el.flags.png,
        region: el.continents[0],
        subregion: el.subregion == undefined ? el.region : "no data",
        capital: el.capital != null ? el.capital[0] : "No data",
        area: el.area,
        population: el.population,
      },
    });
  });
  return infoDbCreate;
};

const getCountriesByDb = async () => {
  const getDb = await saveDataInDb();
  const findDb = await Country.findAll();
  const res = findDb.map((el)=> el.toJSON())
  console.log(res); // quede revisando la respuesta, ya logro que sea json, ahora que la saque la ruta
  return res
};

module.exports = {
  getCountriesByDb,
};
