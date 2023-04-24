const Router  = require('express')
const { Country, Activity } = require('../db')

const { getCountriesByDb } = require('../controllers/controllers')

const router = Router()

router.get("/", async (req, res) => {
    const allCountries = getCountriesByDb()
    try{
        res.status(200).json(allCountries)
    } catch (error){
        res.status(404).json(error.message)
    }
})

module.exports = router