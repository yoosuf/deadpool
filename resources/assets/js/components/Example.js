import React, { Component } from 'react';

class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>
                                    <span><img src={require('../../img/eng.png')} width="50px" /></span>
                                    <span className="panel-text">England</span>
                                </h2>

                                <div className="panel-torquoise m-t-xxl">
                                    <h4>
                                        <span className="panel-provider-image"><img src={require('../../img/cex.png')} width="25px" /></span>
                                        <span className="panel-text">
                                            <span className="panel-title">CEX</span>
                                        </span>
                                    </h4>
                                </div>

                                <div className="panel-gold m-t-xs">
                                    <h4>
                                        <span className="panel-provider-image"><img src={require('../../img/cf.png')} width="25px" /></span>
                                        <span className="panel-text">
                                            <span className="panel-title">CoinFlow</span>
                                        </span>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h2>
                                    <span><img src={require('../../img/inr.png')} width="50px" /></span>
                                    <span className="panel-text">India</span>
                                </h2>

                                <div className="panel-orange m-t-xxl">
                                    <h4>
                                        <span className="panel-provider-image"><img src={require('../../img/cs.png')} width="25px" /></span>
                                        <span className="panel-text">
                                            <span className="panel-title">CoinSecure</span>
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Example;