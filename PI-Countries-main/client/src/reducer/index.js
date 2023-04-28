const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
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

    case "POST_ACTIVITIES" :
      return {
        ...state,
      }  

    case "GET_COUNTRY_BY_NAME":
      return {
        ...state,
        countries: action.payload,
      };

    case "GET_COUNTRY_BY_ACTIVITY":
      const allActivities = state.activities;
      const filteredActivity = allActivities.filter((el) => el.name === action.payload);
      const mapActivity = filteredActivity.map((el)=> el.countries)
      const res = mapActivity.map((el)=> el)
      
      const statusFiltered = action.payload === "all" ? allActivities : res[0];
   
      return {
        ...state,
        countries: statusFiltered,
      };

    case "GET_COUNTRY_BY_POPULATION":
      const world = state.allCountries;
      let sortedArr =
        action.payload === "asc"
          ? world.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : world.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortedArr,
      };

    case "GET_COUNTRY_BY_ORDER_ALPHA":
      const todasLosPaises = state.allCountries;
      let sortedArrName =
        action.payload === "asc"
          ? todasLosPaises.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : todasLosPaises.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
            console.log(sortedArrName)
      return {
        ...state,
        countries: sortedArrName,
      };

    case "GET_COUNTRY_BY_REGION":
      const someCountries = state.allCountries

      const filterCountry = someCountries.filter((el)=> el.region == action.payload)
     
      return {
        ...state,
        countries: filterCountry,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
