import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperTradeCmp } from './styled';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'webExchangeGlobalConf';
import { observer, inject } from 'mobx-react/index';
import { mockAllTrade } from '@webExchangeMock/mockWS';
import { 
    subscribeCandleStick,
    subscribeAllTradeMsg
} from 'webExchangeSubscribe';
import Header from './header';
import BuyOrSell from './buyOrSell';
import Chart from './chart';
import Market from './market';
import MyOrder from './myOrder';
import OrderBook from './orderBook';
import TradeHistory from './tradeHistory';
import LoginModal from './modal/loginModal';

declare const intl: any;

type props = {
    themeStore?: any,
    history?: any,
    serverTimeStore?: any,
    instrumentStore?: any
}

@inject('themeStore', 'serverTimeStore', 'instrumentStore')
@observer
export default class Trade extends React.Component<props> {
    constructor(props: props) {
        super(props);
    }

    getServerTime = () => {
        let that = this;
        ajax({
            url: "trade.syncServerTime",
            callback: (data) => {
                this.props.serverTimeStore.changeServerTime(parseInt(data.datetime));
            }
        })
    }

    syncServerTime() {
        this.getServerTime();
        //前端计算时间
        setInterval(() => {
            let serverTime = this.props.serverTimeStore.currentServerTime + 1000;
            this.props.serverTimeStore.changeServerTime(serverTime);
        }, 1000);

        //每隔1分钟同步服务器时间
        setInterval(() => {
            this.getServerTime();
        }, 60000);
    }

    changeInterval() {
        subscribeCandleStick();
    }

    componentDidMount() {
        this.syncServerTime();
        webApp.isMock = window.deployConf.mode == "mock" ? true : false;
        if (webApp.isMock) {
            mockAllTrade();
        } else {
            subscribeAllTradeMsg();
        }
    }

    render() {
        const { themeStore, history } = this.props;
        const { currentInstrument } = this.props.instrumentStore;
        return (
            <ThemeProvider theme={{ [constants.name]: themeStore.currentThemeName }}>
                <WrapperTradeCmp>
                    <GlobalStyle />
                    <div className="tradeTop">
                        <Header history={history} />
                    </div>
                    <div className="mainArea">
                        <div className="mainL">
                            <div className="marketAndChart">
                                <div className="market">
                                    <Market />
                                </div>
                                <div className="chart" id="tradingviewOrDepth">
                                    <Chart changeInterval={this.changeInterval} currentInstrument={currentInstrument} />
                                </div>
                            </div>
                            <div className="myOrder">
                                <MyOrder />
                                {/* <LoginModal /> */}
                            </div>
                        </div>
                        <div className="mainM">
                            <OrderBook />
                        </div>
                        <div className="mainR">
                            <div className="history">
                                <TradeHistory />
                            </div>
                            <div className="buyOrSell">
                                <BuyOrSell />
                                {/* <LoginModal /> */}
                            </div>
                        </div>
                    </div>
                </WrapperTradeCmp>
            </ThemeProvider>
        );
    }
}