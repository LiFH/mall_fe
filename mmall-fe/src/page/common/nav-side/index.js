/*
* @Author: Rosen
* @Date:   2017-05-19 17:39:14
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-24 16:46:02
*/
'use strict';
require('./index.css');
var _mm             = require('util/mm.js');
var templateIndex   = require('./index.string');
// 侧边导航
var navSide = {
    option : {
        name : '',
        navList : [
            {name : 'user-center', desc : '个人中心', href: './user-center.html'},
            {name : 'order-list', desc : '我的订单', href: './order-list.html'},
            {name : 'user-pass-update', desc : '修改密码', href: './user-pass-update.html'},
          
            {name : 'order-list', desc : '退货记录', href: './order-list.html'},
            {name : 'order-list', desc : '交易订单跟踪', href: './order-list.html'},

            {name : 'order-list', desc : '我的询价单', href: './order-list.html'},
            {name : 'order-list', desc : '我的采购单', href: './order-list.html'},

            {name : 'order-list', desc : '系统消息', href: './order-list.html'},
            {name : 'order-list', desc : '私信', href: './order-list.html'},
            {name : 'order-list', desc : '发信', href: './order-list.html'},

            {name : 'order-list', desc : '客户关系管理', href: './order-list.html'},


            {name : 'user-pass-update', desc : '应付账款管理', href: './user-pass-update.html'},
            {name : 'order-list', desc : '结算账户管理', href: './order-list.html'},
            {name : 'order-list', desc : '资金流水', href: './order-list.html'}

            {name : 'order-list', desc : '举报投诉', href: './order-list.html'},
            {name : 'order-list', desc : '咨询建议', href: './order-list.html'},

            {name : 'order-list', desc : '资产管理', href: './order-list.html'}
        ]
    },
    init : function(option){
        // 合并选项
        $.extend(this.option, option);
        this.renderNav();
    },
    // 渲染导航菜单
    renderNav : function(){
        // 计算active数据
        for(var i = 0, iLength = this.option.navList.length; i < iLength; i++){
            if(this.option.navList[i].name === this.option.name){
                this.option.navList[i].isActive = true;
            }
        };
        // 渲染list数据
        var navHtml = _mm.renderHtml(templateIndex, {
            navList : this.option.navList
        });
        // 把html放入容器
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;