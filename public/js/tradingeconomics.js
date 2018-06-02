var date = new Date()

var today_year = date.getFullYear()
var today_month = ("0" + (date.getMonth() + 1)).slice(-2)
var today_date = ("0" + date.getDate()).slice(-2)

var startDate = (today_year - 5) + today_month + today_date

var today = today_year + today_month + today_date

var sources = {
	"djia": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=INDU&v=20180531144100&h=300&w=600",
	"fed_rate": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=fdtr&v=201805021801v&title=false&h=300&w=600",
	"ted_spread": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=tedrate%3afred&lbl=0&v=201805310000v&h=300&w=600",
	"us_10y_bond": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=USGG10YR&v=20180531160000&h=300&w=600",
	"vix": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=vixcls%3afred&lbl=0&v=201805310000v&type=type=area&h=300&w=600",
	"inflation": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=cpi+yoy&v=201805101257v&type=type=column&h=300&w=600",
	"set50": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=SET50&v=20180531094000&h=300&w=600",
	"th_gdp_growth_rate": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=thg+pqq&v=201805211046v&type=type=column&h=300&w=600",
	"usdthb": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=USDTHB&v=20180531150000&h=300&w=600",
	"th_fdi": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=thailandfordirinv&v=201805171535v&type=type=area&h=300&w=600",
	"th_tourists": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=thailandtouarr&v=201805051020v&h=300&w=600",
	"th_trade_balance": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=thnftb&v=201805220920v&type=type=column&h=300&w=600",
	"th_interest_rate": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=btrr1day&v=201805160804v&h=300&w=600",
	"th_10y_bond": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=gvtl10yr&v=201805310020v&h=300&w=600"
}

update()

$('#1d').click(() => {
	var yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)
	var yesterday_year = yesterday.getFullYear()
	var yesterday_month = ("0" + (yesterday.getMonth() + 1)).slice(-2)
	var yesterday_date = ("0" + yesterday.getDate()).slice(-2)

	startDate = yesterday_year + yesterday_month + yesterday_date

	update()
})

$('#1w').click(() => {
	var last_week = new Date()
	last_week.setDate(last_week.getDate() - 7)
	var last_week_year = last_week.getFullYear()
	var last_week_month = ("0" + (last_week.getMonth() + 1)).slice(-2)
	var last_week_date = ("0" + last_week.getDate()).slice(-2)

	startDate = last_week_year + last_week_month + last_week_date
	
	update()
})

$('#1m').click(() => {
	startDate = today_year + ("0" + (date.getMonth())).slice(-2) + today_date
	update()
})

$('#1y').click(() => {
	startDate = (today_year - 1) + today_month + today_date
	update()
})

$('#5y').click(() => {
	startDate = (today_year - 5) + today_month + today_date
	update()
})


$('#10y').click(() => {
	startDate = (today_year - 10) + today_month + today_date
	update()
})

$('#alltime').click(() => {
	startDate = (today_year - 150) + today_month + today_date
	update()
})

function update(){
	var elems = $('div[id^="src_"')
	console.log(elems)
	elems.each(function(index) {
		var id = $(this).attr('id')
		id = id.replace('src_', '')
		var src = sources[id]
		src = src + "&d1=" + startDate + "&d2=" + today
		console.log(id)
		console.log(src)
		$(this).empty()
		$(this).append("<iframe src='" + src + "' height='300' width='600'  frameborder='0' scrolling='no'></iframe>")
	})
}
