var _instance = require('../echarts.js');
require('echarts/lib/chart/radar');

exports.init= function(params){

    return _instance.loadChart(params);
}