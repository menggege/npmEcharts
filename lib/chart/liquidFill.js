/**
 * 水球图
 */
var _instance = require('../echarts.js');
require('./echarts-liquidfill.min.js');

exports.init= function(params){

    return _instance.loadChart(params);
}