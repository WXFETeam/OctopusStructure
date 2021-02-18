import styled from 'styled-components';
const customizeStyleCmpList: string[] = [
    'titleTextColor',
    'panelIconSplit',
    'panelIconSplitActive',
    'panelIconBuy',
    'panelIconBuyActive',
    'panelIconSell',
    'panelIconSellActive',
    'orderTitleTextColor',
    'orderTitleBGColor',
    'orderTitleBorderColor',
    'sellTextFullColor',
    'sellBGColor',
    'buyTextFullColor',
    'buyBGColor',
    'commTextFullColor',
    'decimalsTextColor',
    'decimalsNumTextColor',
    'decimalsIconBorderColor',
    'scrollbarThumbColor',
    'scrollbarTrackColor'
];
const cmpNS: string = 'Trade.OrderBook';

var {
    titleTextColor,
    panelIconSplit,
    panelIconSplitActive,
    panelIconBuy,
    panelIconBuyActive,
    panelIconSell,
    panelIconSellActive,
    orderTitleTextColor,
    orderTitleBGColor,
    orderTitleBorderColor,
    sellTextFullColor,
    sellBGColor,
    buyTextFullColor,
    buyBGColor,
    commTextFullColor,
    decimalsTextColor,
    decimalsNumTextColor,
    decimalsIconBorderColor,
    scrollbarThumbColor,
    scrollbarTrackColor
} = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);

const sign0Img = require("@webExchangeImgs/trade/sign0.png");
const sign1Img = require("@webExchangeImgs/trade/sign1.png");
const sign2Img = require("@webExchangeImgs/trade/sign2.png");
const sign3Img = require("@webExchangeImgs/trade/sign3.png");
const sign4Img = require("@webExchangeImgs/trade/sign4.png");

const WrapperOrderBookCmp = styled.div`
    width: 100%;
    height: 100%;
    .left { text-align: left;}
    .right { text-align: right;}
    .sellText {color: ${sellTextFullColor};}
    .sellPartText {color: ${sellTextFullColor}; opacity: 0.5;}
    .sellBG {background: ${sellBGColor};}
    .buyText {color: ${buyTextFullColor};}
    .buyPartText {color: ${buyTextFullColor}; opacity: 0.5;}
    .buyBG {background: ${buyBGColor};}
    .commText {color: ${commTextFullColor};}
    .commPartText {color: ${commTextFullColor}; opacity: 0.5;}
    .title {
        width: calc(100% - 1px);
        margin-left: 1px;
        height: 40px;
        padding: 0 20px;
        color: ${titleTextColor};
        font-size: 14px;
        font-weight: 600;
        border-top: 1px solid ${orderTitleBorderColor};
        border-bottom: 1px solid ${orderTitleBorderColor};
        background-color: ${orderTitleBGColor};
        .switchPanel {
            .panelIcon {
                display: inline-block;
                margin-right: 20px;
                width: 14px;
                height: 14px;
                background-repeat: no-repeat;
                background-size: 14px 14px;
                cursor: pointer;
                &:last-child {margin-right: 0;}
                &.split {
                    background-image: url(${panelIconSplit});
                    margin-left: 12px;
                    &:hover, &.active {
                        background-image: url(${panelIconSplitActive});
                    }
                }
                &.buy {
                    background-image: url(${panelIconBuy});
                    &:hover, &.active {
                        background-image: url(${panelIconBuyActive});
                    }
                }
                &.sell {
                    background-image: url(${panelIconSell});
                    &:hover, &.active {
                        background-image: url(${panelIconSellActive});
                    }
                }
            }
        }
    }
    .orderTitle {
        width: calc(100% - 1px);
        margin-left: 1px;
        height: 29px;
        line-height: 29px;
        padding: 0 20px;
        font-size: 12px;
        color: ${orderTitleTextColor};
        border-bottom: 1px solid ${orderTitleBorderColor};
        background-color: ${orderTitleBGColor};
    }
    .orderBookDetailBox {
        font-size: 12px;
        border-left: 1px solid ${orderTitleBorderColor};
        .eachLine {
            position: relative;
            width: 100%;
            height: 20px; 
            line-height: 20px;
            margin-bottom: 1px;
            padding: 0 20px;
            z-index: 100;
            .lineBG {
                position: absolute;
                height: 100%;
                top:0;
                left:0;
                z-index: -1;
            }
        }
        .sellBox, .buyBox {
            width: 100%;
            height: calc((100vh - 190px)/2);
            min-height: 289px;
            overflow: auto;
            &.full {
                height: calc(100vh - 190px);
                min-height: 578px;
            }
            &::-webkit-scrollbar {
                width: 5px;
            }
            &::-webkit-scrollbar-thumb {
                background: ${scrollbarThumbColor};
            }
            &::-webkit-scrollbar-track {
                background: ${scrollbarTrackColor};
            }
        }
        .sellBox {
            border-bottom: 1px solid ${orderTitleBorderColor};
        }
        .buyBox {
            border-top: 1px solid ${orderTitleBorderColor};
        }
        .middleBox {
            padding: 0 20px;
            width: 100%;
            height: 32px;
            line-height: 32px;
            .sign {
                display: inline-block;
                width: 16px;
                height: 12px;
                margin-left: 50px;
                background-repeat: no-repeat;
                background-size: 16px 12px;
                background-position: 0px;
                &.sign0 {
                    background-image: url(${sign0Img});
                }
                &.sign1 {
                    background-image: url(${sign1Img});
                }
                &.sign2 {
                    background-image: url(${sign2Img});
                }
                &.sign3 {
                    background-image: url(${sign3Img});
                }
                &.sign4 {
                    background-image: url(${sign4Img});
                }
            }

        }
        .changeDecimals {
            padding: 0 20px;
            width: 100%;
            height: 32px;
            line-height: 32px;
            border-top: 1px solid ${orderTitleBorderColor};
            .decimalsText {
                font-size: 12px;
                text-align: center;
                color: ${decimalsTextColor};
            }
            .opsIcon {
                display: inline-block;
                width: 14px;
                height: 14px;
                line-height: 10px;
                cursor: pointer;
                font-size:12px;
                font-style: normal;
                text-align: center;
                color: ${decimalsNumTextColor};
                border: 1px solid ${decimalsIconBorderColor};
                &.plus {margin-right: 12px;}
                &.minus {margin-left: 12px;}
            }
            .decimalsNum {
                font-size: 12px;
                color: ${decimalsNumTextColor};
            }
        }
    }

`;

export {
    WrapperOrderBookCmp
};