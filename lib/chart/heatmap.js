/**
 * 热力图
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/heatmap');

exports.init= function(params){

    return _instance.loadChart(params);
}


