/**
 * 仪表盘
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/gauge');

exports.init= function(params){

    return _instance.loadChart(params);
}