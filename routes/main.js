__path = process.cwd()

let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/index.html')
})
router.get('/index.js', (req, res) => {
    res.sendFile(__path + '/index.js')
})
router.get('/jquery.js', (req, res) => {
    res.sendFile(__path + '/jquery.js')
})
router.get('/nicepage.css', (req, res) => {
    res.sendFile(__path + '/nicepage.css')
})
router.get('/nicepage.js', (req, res) => {
    res.sendFile(__path + '/nicepage.js')
})



module.exports = router
