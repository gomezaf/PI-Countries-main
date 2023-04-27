const Router  = require('express')
const { Country, Activity } = require('../db')

const { saveDataInDb, getCountriesByDb, getCountriesById } = require('../controllers/controllers')

const router = Router()

router.get("/", async (req, res) => {
    const { name } = req.query
    const allCountries = await getCountriesByDb(name)
    try{
        res.status(200).json(allCountries)
    } catch (error){
        res.status(404).json(error.message)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try{
        const searchById = await getCountriesById(id)
        res.status(200).json(searchById)
    } catch (error){
        res.status(404).json(error.message)
    }
})

module.exports = router