var _instance = require('../echarts.js');
require('echarts/lib/chart/line');
require('echarts/lib/component/polar');   /**极坐标系，可以用于散点图和折线图*/

exports.init= function(params){

    return _instance.loadChart(params);
}


