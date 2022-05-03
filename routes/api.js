__path = process.cwd()
let express = require('express');
let creator = "Sanuwa"
let axios = require('axios')
let fs = require('fs')
let fetch = require('node-fetch');
let router = express.Router();
let hxz = require('hxz-api')
const dcanvas = require('discord-canvas')
const canvac = require('canvacord')
let options = require(__path + '/lib/options.js');
let {
	color,
	bgcolor
} = require(__path + '/lib/color.js');
let {
	getBuffer,
	fetchJson
} = require(__path + '/lib/fetcher.js');
async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const misparam = (param) => {
	return {
		message: `Masukkan parameter ${param}!`
	}
}
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
loghandler = {
	noturl: {
		status: false,
		creator: `${creator}`,
		code: 406,
		message: 'Masukan URL'
	},
	nurl: {
		status: false,
		message: 'Url not Valid!'
	},
	notquery: {
		status: false,
		creator: `${creator}`,
		code: 406,
		message: 'Masukkan query'
	},
	error: {
		status: 404,
		creator: `${creator}`,
		message: 'An internal error occurred. Please report via WhatsApp wa.me/6288286421519'
	}
}


router.get('/apk', async (req, res) => {
	let id = req.query.url
	if (!url) return res.json(loghandler.noturl)
  if(!isUrl(url)) return res.json(loghandler.nurl)
	try {
    const id = url.replace("https://play.google.com/store/apps/details?id=" , "")
		const try1 = await play.getExtendedInfoById(id)
    const name = try1.title
    const name2 = name.replace(/ /gi, '')
    const try2 = await axios.get('https://apkpure.com/' + name2 +'/'+ id +'/download?from=details')
    const $ = cheerio.load(try2.data)
    const url = $('a.ga').attr('href')
    let result = {
    name : name ,
      url : url 
    
    }
    
    res.json(result)
	} catch (err) {
		console.log(err)
		res.json(loghandler.error)
	}
})
module.exports = router
