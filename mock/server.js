var express = require('express');
var app = express();

var Mock = require('mockjs');

var server;
var port = 8081;
var apiList = {
	GET_MENU: '/api/getmenu',
    QUERY_GRID_DATE: '/api/queryGridData'
};

app.get(apiList.GET_MENU, function(req, res) {
    var menuModeTpl = {
        'menuid': '@guid',
        'text': '@string',
        'children|0-10': [{
            'menuid|': '@guid',
            'text|1': '@string',
            'children|0-10': [{
                'menuid|': '@guid',
                'text|1': '@string'
            }]
        }]
    };
    // 随机0-10个一级菜单
    var menus = new Array(~~(Math.random() * 10)).fill(0).map(menu => menuModeTpl);
    res.send(Mock.mock(menus));
});

app.get(apiList.QUERY_GRID_DATE, function(req, res) {
    var gridDataTpl = {
        'id': '@guid',
        'field1': '@string',
        'field2': '@string',
        'field3': '@string',
        'field4': '@string',
        'field5': '@string'
    };
    var grid = new Array(~~(Math.random() * 1000)).fill(0).map(data => gridDataTpl);
    res.send(Mock.mock(grid));
});

server = app.listen(port, function() {
    console.log('server started');
});