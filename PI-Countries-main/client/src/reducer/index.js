const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
  statusFilter: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_COUNTRIES_BY_ID":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    case "POST_ACTIVITIES":
      return {
        ...state,
      };

    case "GET_COUNTRY_BY_NAME":
      console.log(action.payload)
      return {
        ...state,
        countries: action.payload,
      };

    case "GET_COUNTRY_BY_ACTIVITY":
      const allActivities = state.activities;
      const filteredActivity = allActivities.filter(
        (el) => el.name === action.payload
      );
      const mapActivity = filteredActivity.map((el) => el.countries);
      const res = mapActivity.map((el) => el);

      const statusFiltered = action.payload === "all" ? allActivities : res[0];

      return {
        ...state,
        countries: statusFiltered,
      };

    case "GET_COUNTRY_BY_POPULATION":
      let sortedArr =
        action.payload === "asc"
          ? state.allCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (a.population < b.population) {
                return -1;
              }
              return 0;
            })
          : state.allCountries.sort(function (a, b) {
              if (a.population < b.population) {
                return 1;
              }
              if (a.population > b.population) {
                return -1;
              }
              return 0;
            });
            const statusFilterPopulation = action.payload
      return {
        ...state,
        countries: sortedArr,
        statusFilter: statusFilterPopulation,
      };

    case "GET_COUNTRY_BY_ORDER_ALPHA":
      let sortedArrName =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      console.log(sortedArrName);
      const statusFilterOrderAlPha = action.payload
      return {
        ...state,
        countries: sortedArrName,
        statusFilter: statusFilterOrderAlPha,
      };

    case "GET_COUNTRY_BY_REGION":
      const someCountries = state.allCountries;
      const statusFilterByRegion = action.payload
      const filterCountry = someCountries.filter(
        (el) => el.region === action.payload
      );

      const reply = action.payload === "All countries"? someCountries: filterCountry

      return {
        ...state,
        countries: reply,
        statusFilter: statusFilterByRegion,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
