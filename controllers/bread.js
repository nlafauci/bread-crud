const router = require('express').Router()
const Bread = require('../models/bread')

router.get('/', (req, res) => {
    res.render('index', { breads: Bread })
})

router.get('/new', (req, res) => {
    res.render('new')
})

//Get bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.render('show', { bread: Bread[index] })
})


router.post('/', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.bodyhasGluten = true
    } else {
        req.body.hasGluten = false
    }

    Bread.push(req.body)
    res.redirect('/breads')
})


module.exports = router