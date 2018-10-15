/**
 *关系图
 **/
var _instance = require('../echarts.js');
require('echarts/lib/chart/graph');

exports.init= function(params){

    return _instance.loadChart(params);
}