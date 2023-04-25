const Router  = require('express')
const { Country, Activity } = require('../db')

const { postActivity, getActivity } = require('../controllers/controllers')

const router = Router()

router.post('/', async (req, res) => {
    const {name, dificulty, duration, season, country} = req.body
    try {
        const post = await postActivity(name, dificulty, duration, season, country)
        res.status(200).json(post)
    }catch (error){
        res.status(404).json(error.message)
    }
})

router.get('/', async (req, res) =>{
 const { name } = req.query
 const allActivities = await getActivity(name)
 try{
    res.status(200).json(allActivities)
 } catch (error) {
    res.status(404).json(error.message)
 }
})

module.exports = router