/**
 * 主题河流图
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/themeRiver');

exports.init= function(params){

    return _instance.loadChart(params);
}