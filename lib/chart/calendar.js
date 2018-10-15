/**
 * 日历图
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/calendar');
require('echarts/lib/component/calendar');

exports.init= function(params){

    return _instance.loadChart(params);
}