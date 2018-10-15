/**
 * 桑基图
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/sankey');

exports.init= function(params){

    return _instance.loadChart(params);
}