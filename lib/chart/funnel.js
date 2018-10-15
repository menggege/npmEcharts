/**
 * 漏斗图
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/funnel');

exports.init= function(params){

    return _instance.loadChart(params);
}