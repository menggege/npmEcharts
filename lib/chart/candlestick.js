var _instance = require('../echarts.js');
require('echarts/lib/chart/candlestick');

exports.init= function(params){

    return _instance.loadChart(params);
}


