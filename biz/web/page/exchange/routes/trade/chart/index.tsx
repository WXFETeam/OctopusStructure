import * as React from 'react';
import { observer, inject } from 'mobx-react/index';
import { WrapperChartCmp } from './styled';
import { Row, Col, Menu, Dropdown } from 'antd';
import { UDFCompatibleDatafeed } from './utils/lib/udf-compatible-datafeed';
import Loading from './loading/loading';
import Actions from './actions';
import Depth from './depth';

declare var TradingView: any;
var widget: any = null;
var currentTheme: any = {};
var currentInstrumentId: string = '';

interface ChartProps {
    [props: string]: any,
    intervalStore?: any,
    instrumentStore?: any,
    orderBookStore?: any,
    themeStore?: any
}
interface ChartState {
    isReady: boolean,
    currentChartType: string, // 当前图表类型
    currentInterval: string // 当前K线间隔时间
}

@inject('intervalStore', 'instrumentStore', 'orderBookStore', 'themeStore')
@observer
export default class Chart extends React.Component<ChartProps, ChartState> {
    constructor(props: ChartProps) {
        super(props);
        this.state = {
            isReady: false,
            currentChartType: '0', // '0'->tradingview,'1'->depth
            currentInterval: this.props.intervalStore.currentInterval
        };
        this.changeInterval = this.changeInterval.bind(this);
        this.changeChartType = this.changeChartType.bind(this);
    }

    initChart() {
        if (this.state.isReady && widget) widget.remove();
        let options = Object.assign(tradingviewConf.widget(), {
            symbol: this.props.instrumentStore.currentInstrument, 
            interval: dataMapping.trade.intervalMap(this.state.currentInterval),
            datafeed: new UDFCompatibleDatafeed('')
        });
        widget = new TradingView.widget(options);
        widget.onChartReady(() => {
            this.setState({
                isReady: true
            });
        });
    }

    changeInterval(val) {
        if(val !== 'realTime') {
            this.props.intervalStore.changeInterval(val);
        } else {
            this.props.intervalStore.changeInterval('1m');
        }
        this.props.changeInterval();
        let currentInstrument = this.props.instrumentStore.currentInstrument;
        let interval = dataMapping.trade.intervalMap(val);
        if (val === 'realTime') {
            // 分时
            widget.setSymbol(currentInstrument + '|1|' + Date.now(), '1', () => {});
            widget.chart().setChartType(3);
        } else {
            // kline
            widget.chart().setChartType(1);
            widget.setSymbol(currentInstrument + '|' + interval + '|' + Date.now(), interval, () => {});
        }
        this.setState({
            currentInterval: val
        });
    }

    changeChartType(val) {
        this.setState({
            currentChartType: val
        });
    }

    componentDidMount() {
        currentTheme = JSON.parse(JSON.stringify(this.props.themeStore.currentThemeObj));
        currentInstrumentId = JSON.parse(JSON.stringify(this.props.instrumentStore.currentInstrument));
        this.initChart();
    }

    componentWillReceiveProps(nextProps: any) {
        // 变更theme
        if ((nextProps.themeStore.currentThemeObj.mode != currentTheme.mode || nextProps.themeStore.currentThemeObj.theme != currentTheme.theme) && widget) {
            // 重新渲染图表库
            this.setState({
                isReady: false
            }, () => {
                let { mode, theme } = this.props.themeStore.currentThemeObj;
                mode = mode.replace(mode[0], mode[0].toUpperCase());
                currentTheme = JSON.parse(JSON.stringify(this.props.themeStore.currentThemeObj));
                this.initChart();
            });
        }
        // 变更instrument
        if (nextProps.currentInstrument != currentInstrumentId && widget) {
            let interval = dataMapping.trade.intervalMap(this.state.currentInterval);
            let symbol = nextProps.currentInstrument;
            widget.setSymbol(symbol + '|' + interval + '|' + Date.now(), interval, () => {});
            currentInstrumentId = JSON.parse(JSON.stringify(symbol));
        }
    }

    render() {
        const currentChartType = this.state.currentChartType;
        const currentInterval = this.state.currentInterval;
        const actionsProps = {
            currentChartType: currentChartType,
            currentInterval: currentInterval,
            changeInterval: this.changeInterval,
            changeChartType: this.changeChartType
        };
        let { orderBookSellMap, orderBookBuyMap } = this.props.orderBookStore;
        let currentTheme = this.props.themeStore.currentThemeObj;

        return (
            <WrapperChartCmp>
                <div className = {this.state.isReady ? "title show" : "title"}>
                    <Actions {...actionsProps} />
                </div>
                <div className={currentChartType == '0' ? "tradingview" : 'tradingview hide'}>
                    <div
                        id = "tv_chart_container"
                        className = {this.state.isReady ? "TVChartContainer show" : "TVChartContainer"}
                    />
                </div>
                {currentChartType == '1' ?
                    <div className="depth">
                        <Depth currentTheme={currentTheme} buyList={orderBookBuyMap} sellList={orderBookSellMap} />
                    </div> : null
                }
                <Loading isReady={this.state.isReady || currentChartType == '1'} />
            </WrapperChartCmp>
        )
    }
}