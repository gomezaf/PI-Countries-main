import axios from "axios"

export function getCountries () {
    return async function (dispatch){
        const json = await axios.get("http://localhost:3001/country")
        return dispatch ({
            type: "GET_COUNTRIES",
            payload: json.data
        })
    }
}

export function getCountriesById (payload){
    const url = `http://localhost:3001/country/${payload}`
    return async function (dispatch){
        const json = await axios.get(url)
        return dispatch({
            type: "GET_COUNTRIES_BY_ID",
            payload: json.data
        })
    }
}

export function getcountryByName (payload){
    const urlName =`http://localhost:3001/country?name=${payload}`
    return async function (dispatch){
        console.log(payload)
        try{
            const json = await axios.get(urlName)
            return dispatch({
                type: "GET_COUNTRY_BY_NAME",
                payload: json.data
            })
        }catch (error) {
            console.log(error)
        }
    }
}

export function getActivities () {
    return async function (dispatch){
        const json = await axios.get("http://localhost:3001/activity")
        return dispatch ({
            type: "GET_ACTIVITIES",
            payload: json.data
        })
    }
}

export function postActivity (payload) {
    return async function (dispatch){
        const json = await axios.post("http://localhost:3001/activity", payload)
        return json
    }
}

export function getCountryByOrderAlpha (payload){
    return {
        type: "GET_COUNTRY_BY_ORDER_ALPHA",
        payload
    }
}

export function getCountryByPopulation (payload){
    return {
        type: "GET_COUNTRY_BY_POPULATION",
        payload
    }
}

export function getCountryByActivity (payload){
    return {
        type: "GET_COUNTRY_BY_ACTIVITY",
        payload
    }
}

export function getCountryByRegion (payload){
    return {
        type: "GET_COUNTRY_BY_REGION",
        payload
    }
}





