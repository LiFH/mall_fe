

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import { Link, IndexLink } from 'react-router';

const SideNav = React.createClass({
    getInitialState() {
        return {
            
        };
    },
    componentDidMount(){

    },
    render() {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <IndexLink to="/home" activeClassName="active">
                                <i className="fa fa-dashboard fa-fw"></i>
                                <span>Home</span>
                            </IndexLink>
                        </li>
                        <li>
                            <Link>
                                <i className="fa fa-bar-chart-o fa-fw"></i>
                                <span>健康产品</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                              
                                <li>
                                    <Link to="/product" activeClassName="active">健康产品管理</Link>
                                </li>
                                
                                <li>
                                    <Link to="/product.category" activeClassName="active">品类管理</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link>
                                <i className="fa fa-wrench fa-fw"></i>
                                <span>订单</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/order" activeClassName="active">订单管理</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link>
                                <i className="fa fa-wrench fa-fw"></i>
                                <span>用户管理</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/order" activeClassName="active">业务经办人</Link>
                                </li>
                                <li>
                                    <Link to="/order" activeClassName="active">零售终端用户</Link>
                                </li>
                            </ul>
                        </li>

                      
                        <li>
                            <Link>
                                <i className="fa fa-wrench fa-fw"></i>
                                <span>促销管理</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/comment" activeClassName="active">促销管理</Link>
                                </li>
                            </ul>
                            
                          
                        </li>

                        <li>
                            <Link>
                                <i className="fa fa-wrench fa-fw"></i>
                                <span>站内消息</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/comment" activeClassName="active">系统消息</Link>
                                </li>
                            </ul>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/comment" activeClassName="active">私信</Link>
                                </li>
                            </ul>
                          <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/comment" activeClassName="active">发信</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link>
                                <i className="fa fa-wrench fa-fw"></i>
                                <span>交易撮合</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/comment" activeClassName="active">买家信用资料</Link>
                                </li>
                            </ul>
                            
                        </li>

                        
                    </ul>
                </div>
            </div>
        );
    }
});

export default SideNav;