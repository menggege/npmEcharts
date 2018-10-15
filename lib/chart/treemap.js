/**
 * 矩形树图
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/treemap');

exports.init= function(params){

    return _instance.loadChart(params);
}