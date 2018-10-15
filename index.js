var _ = require('lodash-node');
var echarts = require('echarts');
var config = {
    url: 'http://img.9cfcf.com'
}

exports.echarts = echarts;    //导出原始echarts对象

exports.setConfig = function (_params) {
    if (_params && _params.url)
        config.url = _params.url
}

exports.init = function (params, _cb) {

    if (!params || !params.container || !params.id) {
        console.log("参数有误");
        return null;
    }

    //图表容器
    var container = document.getElementById(params.container);
    if (!container) {
        console.log("图表容器" + params.container + "不存在");
        return null;
    }

    var myChart = echarts.init(container);
    _getOption(params.id, function (option) {

        if (!option) {
            console.log("获取图表id=" + params.id + " 的数据失败");
            return;
        }
        if (params.option) option = _.assign(option, params.option);
        myChart.setOption(option, true);

        if (_cb) _cb(myChart);
    })

    return myChart;
};
exports.getOption = function (id, callback) {

    return _getOption(id, callback);
};

function _getOption(id, callback) {

    var serviceHost = config.url;
    //步骤一:创建异步对象
    var xhr = new XMLHttpRequest();
    //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
    xhr.open('get', serviceHost + '/api/chart/GetChart?id=' + id);
    //步骤三:发送请求
    xhr.send();
    var result;
    //步骤四:注册事件 onreadystatechange 状态改变就会调用
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            try {
                result = JSON.parse(xhr.responseText);//输入相应的内容
                if (callback) {
                    var option;
                    eval(result.json);
                    callback(option);
                }
            } catch (e) {
                console.log("err:", e);
            }
        }
    }
    return result;
}