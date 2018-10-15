/**
 * 箱线图
 */
var _instance = require('../echarts.js');
require('echarts/lib/chart/boxplot');

exports.init= function(params){

    return _instance.loadChart(params);
}



