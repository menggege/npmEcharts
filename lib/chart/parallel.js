/**
 * 平行坐标
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/parallel');
require('echarts/lib/component/parallel');

exports.init= function(params){

    return _instance.loadChart(params);
}