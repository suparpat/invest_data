const config = require('./config')
const alpha_vantage_api_key = config.alpha_vantage_api_key
const quandl_api_key = config.quandl_api_key

const alpha = require('alphavantage')({key: alpha_vantage_api_key})
const Quandl = require("quandl-node").Quandl
let quandl = new Quandl({
	key: quandl_api_key
});
const express = require('express')
const path = require('path');

const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.render('tradingeconomics', {})
})

app.listen('3010', (err) => {
	console.log('Invest Data listening on port 3010')
})	

app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(500).send('Something broke!')
})



async function start(){
	let data = await quandl.timeseries.data({
	                database:"USTREASURY",
	                dataset:"YIELD",
	                start_date:"2017-06-12",
	                end_date: "2017-12-12",
	                order:"asc",
	                limit:15
	            });	
	console.log(data)
}

async function setIndex(){
	let data = await quandl.timeseries.data({
	                database:"THAISE",
	                dataset:"INDEX",
	                // start_date:"2018-01-1",
	                // end_date: "2018-03-12",
	                order:"asc",
	                collapse: "monthly",
	                limit:15
	            });	
	console.log(data)
}

