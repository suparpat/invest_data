//sources: 
//
//get csv data: https://plot.ly/javascript/ajax-call/
//
// Range slider and time selectors: https://plot.ly/javascript/range-slider/
//



var dff_url='https://www.quandl.com/api/v3/datasets/FRED/DFF.csv?collapse=monthly&api_key={{key}}';
var tedrate_url='https://www.quandl.com/api/v3/datasets/FRED/TEDRATE.csv?collapse=monthly&api_key={{key}}';

var selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
    }, {
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
};


var layout = {
        
        xaxis: {
            rangeselector: selectorOptions,
            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };


function makeplot(url, divname) {
  Plotly.d3.csv(url, function(data){ processData(data, divname) } );
};

function processData(allRows, divname) {

  console.log(allRows);
  var x = [], y = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['Date'] );
    y.push( row['Value'] );
  }
  console.log( 'X',x, 'Y',y );
  makePlotly( x, y , divname);
}

function makePlotly( x, y , divname){
  var plotDiv = document.getElementById("plot");
  var traces = [{
    x: x,
    y: y
  }];

  Plotly.newPlot(divname, traces,
   layout);
};

makeplot(dff_url, 'dff');

makeplot(tedrate_url, 'tedrate');



