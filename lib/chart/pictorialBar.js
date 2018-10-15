/**
 * 象形柱图.
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/pictorialBar');

exports.init= function(params){

    return _instance.loadChart(params);
}