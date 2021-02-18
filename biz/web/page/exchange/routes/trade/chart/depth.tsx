import * as React from 'react';
import * as Echarts from 'echarts';
import { WrapperDepthCmp } from "./styled";
import { observer, inject } from 'mobx-react/index';
const chartStyleCmpList: string[] = [
    'depthBgColor',
    'depthTextColor',
    'depthBuyColor',
    'depthSellColor',
    'depthBuyBorderColor',
    'depthSellBorderColor',
    'depthBorderColor',
    'depthTooltipBgColor',
    'depthTooltipTitColor',
    'depthTooltipTextColor',
    'depthTooltipBuyColor',
    'depthTooltipSellColor'
];
const chartCmpNS: string = 'Trade.Chart';
var { 
    depthBgColor,
    depthTextColor,
    depthBuyColor,
    depthSellColor,
    depthBuyBorderColor,
    depthSellBorderColor,
    depthBorderColor,
    depthTooltipBgColor,
    depthTooltipTitColor,
    depthTooltipTextColor,
    depthTooltipBuyColor,
    depthTooltipSellColor
} = getMulThemeProps.styleProps(chartStyleCmpList, chartCmpNS);

var buyList: any = [];
var sellList: any = [];
var current: any = 0; // 当前hover状态的dataIndex
var depthChart: any = null;

type DepthProps = {
    [props: string]: any,
    instrumentStore?: any
};

@inject('instrumentStore')
@observer
export default class Depth extends React.Component<DepthProps, {}> {
    constructor(props: DepthProps) {
        super(props);
    }

    componentDidMount() {
        buyList = this.props.buyList;
        sellList = this.props.sellList;
        this.updateCss();
        this.drawDOM();
        window.addEventListener("resize", () => {
            depthChart.resize();
        })
    }

    componentWillReceiveProps(nextProps: any) {
        if (JSON.stringify(nextProps) != JSON.stringify(this.props)) {
            buyList = nextProps['buyList'];
            sellList = nextProps['sellList'];
            this.updateCss();
            this.drawDOM();
        }
    }

    componentWillUnmount(){
        depthChart && depthChart.clear();
        window.removeEventListener("resize", () => {})
    }

    updateCss() {
        let cssObj = getMulThemeProps.styleProps(chartStyleCmpList, chartCmpNS);
        depthBgColor = cssObj.depthBgColor;
        depthTextColor = cssObj.depthTextColor;
        depthBuyColor = cssObj.depthBuyColor;
        depthSellColor = cssObj.depthSellColor;
        depthBuyBorderColor = cssObj.depthBuyBorderColor;
        depthSellBorderColor = cssObj.depthSellBorderColor;
        depthBorderColor = cssObj.depthBorderColor;
        depthTooltipBgColor = cssObj.depthTooltipBgColor;
        depthTooltipTitColor = cssObj.depthTooltipTitColor;
        depthTooltipTextColor = cssObj.depthTooltipTextColor;
        depthTooltipBuyColor = cssObj.depthTooltipBuyColor;
        depthTooltipSellColor = cssObj.depthTooltipSellColor;
    }

    drawDOM() {
        let step = 100;
        let currentPrice = this.props.instrumentStore.currentInstrumentData.lastPrice;
        let info: any = {};
        // 买卖单各分成几段渲染
        let xData: Array<any> = []; // x轴数组
        let maxBuy: any, minBuy: any, maxSell: any, minSell: any;
        if (buyList.length == 1 && sellList.length == 1) {
            // 买卖单都只有一单
            maxBuy = buyList[0].price;
            minBuy = 0;
            maxSell = 0;
            minSell = 0;
        } else if(buyList.length == 0 && sellList.length == 1) {
            // 卖单只有1，买单无
            maxBuy = 0;
            minBuy = 0;
            maxSell = common.accMul(sellList[sellList.length - 1].price, 2);
            minSell = sellList[sellList.length - 1].price;
        } else if (buyList.length == 1 && sellList.length == 0) {
            // 买单只有1，卖单无
            maxBuy = buyList[0].price;
            minBuy = 0;
            maxSell = 0;
            minSell = 0;
        } else {
            maxBuy = buyList[0] ? buyList[0].price : '';
            minBuy = buyList[buyList.length - 1] ? buyList[buyList.length - 1].price : '';
            maxSell = sellList[sellList.length - 1] ? sellList[sellList.length - 1].price : '';
            minSell = sellList[0] ? sellList[0].price : '';
        }

        let intervalBuy = !isNaN(Math.abs(common.accSub(maxBuy, minBuy))) ? Math.abs(common.accSub(maxBuy, minBuy)) : 0;
        let intervalSell = !isNaN(Math.abs(common.accSub(maxSell, minSell))) ? Math.abs(common.accSub(maxSell, minSell)) : 0;
        let priceStep = common.accDiv(Math.max(intervalBuy, intervalSell), step);   
        if (intervalBuy >= intervalSell) {
            // 以buy的step为优先
            if (priceStep != '0') {
                xData.push(minBuy);
                for(let i = 0; i <= step * 2; i++) {
                    xData.push(common.accAdd(xData[xData.length - 1] , priceStep));
                }
            } else {
                // buylist selllist全为空
                xData.push(0);
                for(let i = 0; i <= step * 2; i++) {
                    xData.push(Number(common.accAdd(xData[xData.length - 1] , common.accDiv(currentPrice, step))).toFixed(8));
                }
            }
        } else {
            // 以sell的step为优先
            xData.push(maxSell);
            for(let i = 0; i <= step * 2; i++) {
                if (Number(xData[0] - priceStep) <= 0) {
                    xData.unshift('');
                } else {
                    xData.unshift(common.accSub(xData[0], priceStep));
                }
            }
            if (xData.indexOf('') > -1) {
                xData[xData.lastIndexOf('')] = 0;
            }
        }
        let yData1: Array<any> = []; // yData1是指买的累计volume
        let yData2: Array<any> = []; // yData2是指卖的累计volume

        for(let i = step; i >= 0;i--) {
            if (xData[i] === '' || xData[i] === 0) {
                yData1.unshift('');
            } else {
                let currentVolume = i == step ? 0 : (yData1[0] ? yData1[0] : 0);
                for(var j = 0; j < buyList.length;j++) {
                    if ((Number(buyList[j].price) >= Number(xData[i]) && Number(buyList[j].price) < Number(xData[i+1])) || (j == 0 && i== step && Number(buyList[j].price) == Number(xData[i])) || (j==buyList.length-1 && i == 0 && Number(buyList[j].price) == Number(xData[i]))) {
                        currentVolume = common.accAdd(currentVolume, buyList[j].amount);
                    }
                }
                if (currentVolume > 0) {
                    yData1.unshift(currentVolume);
                } else {
                    yData1.unshift('');
                }
            }
        }
        for(let k = step ; k <= step * 2 ;k++) {
            let currentVolume = k== step ? 0: (yData2[yData2.length -1] ? yData2[yData2.length-1] : 0);
            for(var j = 0;j < sellList.length; j++) {
                if ((Number(sellList[j].price) > Number(xData[k]) && Number(sellList[j].price) <= Number(xData[k+1])) || (j==0 && k == step && Number(sellList[j].price) == Number(xData[k])) || (j==sellList.length-1 && k == step*2 && Number(sellList[j].price) == Number(xData[k+1]))) {
                    currentVolume = common.accAdd(currentVolume, sellList[j].amount);
                }
            }
            if (currentVolume > 0) {
                yData2.push(currentVolume);
            } else {
                yData2.push('');
            }
        }

        let maxVolume = priceStep == '0' ? 1 : Math.max(...yData1, ...yData2);
        // markline最大范围

        // borderData是指柱状图最上方边框的配置, echarts只能通过stack方法来生成深度图的样式，其余方法会有问题
        let borderData1: Array<any> = yData1.map((item: any) => {
            if (item == '' || item == 0 ) {
                return '';
            } else {
                return 0;
            }
        });
        let borderData2: Array<any> = yData2.map((item: any) =>{
            if (item == '' || item == 0 ) {
                return '';
            } else {
                return 0;
            }
        });
        borderData2 = borderData1.map((item: any) => {
            return '';
        }).concat(borderData2);
        let that = this;
        let totalData = yData1.concat(yData2);

        // DOM右边与tradingView基本对齐
        let priceCutOff = 8;
        let gridOffsetX = typeof(priceCutOff) != 'undefined' ? (Number(priceCutOff / 8 * 50) - 12 > 0 ? Number(priceCutOff / 8 * 50) - 12 : 0) : 0 ;
        let options = {
            backgroundColor: depthBgColor,
            textStyle: {
              color: depthTextColor
            },
            grid: {
                left: 12,
                right: 12,
                bottom: 8,
                top: 10,
                containLabel: true,
                show: false,
                borderColor: depthBorderColor,
                borderWidth: 1,
                z: 5
            },
            tooltip: {
                trigger: 'axis',
                confine: false,
                transitionDuration: 0,
                axisPointer: {
                    type: 'line',
                    snap: true,
                    lineStyle: {
                        width: 1,
                        color: depthBorderColor,
                        type: 'dashed'
                    }
                },
                position: function(pos: any, params: any, dom: any, rect: any, size: any) {
                    let y = size.viewSize[1] * (params[0].data / Math.ceil(maxVolume)) + 20;
                    if (y > (size.viewSize[1] - size.contentSize[1])) {
                        y = size.viewSize[1] - size.contentSize[1];
                    }
                    var obj: any = {bottom: y, left: (pos[0] - 2)};
                    if (pos[0] > (size.viewSize[0] / 2)) {
                        obj.left = (pos[0] - 148);
                    }
                    return obj;
                },
                alwaysShowContent: false,
                formatter: function(params: any) {
                    current = params[0].dataIndex;
                    if (params[0].name == '' || params[0].data == '') {
                        return ''
                    } else {
                        let isSell = current > yData1.length;
                        return `<div style="
                                    width:148px; 
                                    height:72px; 
                                    background-color: ${depthTooltipBgColor};
                                    color:${depthTooltipTextColor}; 
                                    font-size:12px; 
                                    padding: 8px 12px;
                                    ${isSell ? 'border-right: 3px solid ' + depthTooltipSellColor : 'border-left: 3px solid ' + depthTooltipBuyColor};">
                            <div style="font-size: 14px; color: ${depthTooltipTitColor};"> ${params[0].axisValue}</div>
                            <div>${isSell ? 
                                '<span style="padding-right:8px;color:'+ depthTooltipBuyColor +'">Buy</span>' : 
                                '<span style="padding-right:8px;color:'+ depthTooltipSellColor +'">Sell</span>'}<span>${params[0].data}</span></div>
                            <div>${isSell ? 
                                '<span style="padding-right:8px;color:'+ depthTooltipBuyColor +'">Cost</span>' : 
                                '<span style="padding-right:8px;color:'+ depthTooltipSellColor +'">Cost</span>'}<span>${Number(common.accMul(params[0].axisValue, params[0].data)).toFixed(8) }</span></div>
                        </div>`
                    }
                },
                backgroundColor: 'rgba(255, 255, 255, 0)',
                animationDuration: 0,
                animationDurationUpdate: 0
            },
            xAxis : [
                {
                    z: 10,
                    type : 'category',
                    data : xData,
                    splitLine: {
                        show: false
                    },
                    axisLabel:{
                        show: true,
                        interval: 'auto',
                        margin: 8,
                        textStyle: {
                            color: depthTextColor,
                            fontSize: 12
                        },
                        formatter: (params) => {
                            if(!params) return;
                            return params;
                        }
                    },
                    animationDuration: 0,
                    animationDurationUpdate: 0
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    boundaryGap: ['0%', '0%'],
                    splitLine: {
                        show: false
                    },
                    splitNumber: 3,
                    axisLabel:{
                        show: true,
                        margin: 12,
                        formatter: function(params: any) {
                            let result = Number(params);
                            if(isNaN(result)) return;
                            if(result == 0) return 0;
                            if(result < 10) return common.floorNumber(result, 3);
                            if(result < 1000) return parseInt(params);
                            if(result < Math.pow(10, 6)) return `${Number(params / 1000).toFixed(1)}k`;
                            if(result < Math.pow(10, 9)) return `${Number(params / Math.pow(10, 6)).toFixed(2)}m`;
                            return result;
                        },
                        textStyle: {
                            color: depthTextColor,
                            fontSize: 12
                        }
                    },
                    animationDuration: 0,
                    animationDurationUpdate: 0
                },{
                    type : 'value',
                    boundaryGap: ['0%', '0%'],
                    splitLine: {
                        show: false
                    },
                    splitNumber: 3,
                    axisLine: {
                        onZero: false
                    },
                    axisLabel: {
                        show: true,
                        margin: 12,
                        formatter: function(params: any) {
                            let result = Number(params);
                            if(isNaN(result)) return;
                            if(result == 0) return 0;
                            if(result < 10) return common.floorNumber(result, 3);
                            if(result < 1000) return parseInt(params);
                            if(result < Math.pow(10, 6)) return `${Number(params / 1000).toFixed(1)}k`;
                            if(result < Math.pow(10, 9)) return `${Number(params / Math.pow(10, 6)).toFixed(2)}m`;
                            return result;
                        },
                        textStyle: {
                            color: depthTextColor,
                            fontSize: 12
                        }
                    },
                    animationDuration: 0,
                    animationDurationUpdate: 0
                }
            ],
            series : [
                {
                    type:'bar',
                    name: 'volume',
                    stack: 'sum',
                    barGap: 0,
                    barCategoryGap: 0,
                    barWidth: '100%',
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: function(params: any){
                              var colorList1 = [];
                              var colorList2 = [];
                              for(let i = 0; i< yData1.length;i++){
                                  colorList1.push(depthBuyColor)
                              }
                              for(let i = 0; i< yData2.length;i++){
                                  colorList2.push(depthSellColor)
                              }
                              let colorList = colorList1.concat(colorList2)
                              return colorList[params.dataIndex]
                            },
                            barBorderWidth: -1,
                            barBorderRadius: 0
                        }
                    },
                    data: totalData,
                    animationDuration: 0,
                    animationDurationUpdate: 0,
                },{
                    type: 'bar',
                    stack: 'sum',
                    barGap: 0,
                    barCategoryGap: 0,
                    barWidth: '100%',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            barBorderWidth: 2,
                            barBorderColor: depthBuyBorderColor
                        }
                    },
                    data: borderData1,
                    animationDuration: 0,
                    animationDurationUpdate: 0
                },
                {
                    type: 'bar',
                    stack: 'sum',
                    barGap: 0,
                    barCategoryGap: 0,
                    barWidth: '100%',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            barBorderWidth: 2,
                            barBorderColor: depthSellBorderColor
                        }
                    },
                    data: borderData2,
                    animationDuration: 0,
                    animationDurationUpdate: 0
                }
            ]
        };
        var echartsElement: any = document.getElementById('marketDepth');
        depthChart = Echarts.init(echartsElement); 
        depthChart.setOption(options);
        document.getElementById('marketDepth').addEventListener('click', (e) =>{
            let canvas = document.getElementById('marketDepth').getElementsByTagName('canvas')[0];
            let offsetX = e.offsetX;
            let offsetY = e.offsetY;
            if( !(offsetX < 5 || offsetX > parseInt(canvas.style.width) - 25 - gridOffsetX || offsetY < 5 || offsetY > parseInt(canvas.style.height) - 12 || !totalData[current] )){
                // Store.changeSell({
                //     price: common.cutOffInstrument('price', xData[current], info)
                // })
                // Store.changeBuy({
                //     price: common.cutOffInstrument('price', xData[current], info)
                // })
            }
        })
    }

    render() {
        return (
            <WrapperDepthCmp>
                <div id="marketDepth" style={{ width: '100%', height: '100%'}}>
                </div>
            </WrapperDepthCmp>
        )
    }
}