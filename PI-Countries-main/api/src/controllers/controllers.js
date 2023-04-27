const axios = require("axios");
const { Country, Activity } = require("../db");

const saveDataInDb = async () => {
  let countriesInDb = await Country.findAll({
    include: Activity,
  });
  if (!countriesInDb.length) {
    const apiUrl = await axios.get("https://restcountries.com/v3.1/all");
    const infoDbCreate = apiUrl.data;
    infoDbCreate.map((el) => {
      Country.findOrCreate({
        where: {
          id: el.cca3,
          name: el.name.common,
          imageOfTheFlag: el.flags.png,
          region: el.continents[0],
          subregion: el.subregion == undefined ? el.region : "No data",
          capital: el.capital != null ? el.capital[0] : "No data",
          area: el.area,
          population: el.population,
        },
      });
    });
    countriesInDb = await Country.findAll({
      include: Activity,
    });
  }
  return countriesInDb;
};

const getCountriesByDb = async (name) => {
  const findDb = await Country.findAll();
  const data = findDb.map((el) => el.toJSON());
  findDb.length? data : saveDataInDb();
  if (name) {
    const searchByName = name.charAt(0).toUpperCase() + name.slice(1);
    const findName = await Country.findAll({
      where: {
        name: searchByName,
      },
      include: Activity,
    });
    return findName;
  } else {
    return data;
  }
};

const getCountriesById = async (id) => {
  const searchById = id.toUpperCase();
  const findId = await Country.findAll({
    where: {
      id: searchById,
    },
    include: Activity,
  });
  const res = findId.map((el) => el.toJSON());
  return res;
};

const postActivity = async (name, dificulty, duration, season, country) => {
  const createActivity = await Activity.create({
    name,
    dificulty,
    duration,
    season,
  });

  const assingCountry = await Country.findAll({
    where: { name: country },
  });

  createActivity.addCountry(assingCountry);

  // const assingActivity = await Activity.findAll({
  //   where:{
  //     name: name
  //   }
  // })

  // assingCountry.addActivity(assingActivity)

  const result = await Activity.findOne({
    where: { name: name },
    include: {
      model: Country,
      through: {
        attributes: [],
      },
    },
  });

  return result;
};

const getActivity = async (name) => {
  const data = await Activity.findAll({
    include: {
      model: Country,
      through: {
        attributes: [],
      },
    },
  });
  if (name) {
    const searchByName = name.toLowerCase();
    const findName = await Activity.findAll({
      where: { name: searchByName },
      include: {
        model: Country,
        through: {
          attributes: [],
        },
      },
    });
    return findName;
  } else {
    return data;
  }
};

module.exports = {
  saveDataInDb,
  getCountriesByDb,
  getCountriesById,
  postActivity,
  getActivity,
};
