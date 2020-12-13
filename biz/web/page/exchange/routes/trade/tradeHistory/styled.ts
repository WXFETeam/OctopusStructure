import styled from 'styled-components';
const customizeStyleCmpList: string[] = [
    'titleTextColor',
    'historyTitleTextColor',
    'historyTitleBGColor',
    'historyTitleBorderColor',
    'sellTextFullColor',
    'sellBGColor',
    'buyTextFullColor',
    'buyBGColor',
    'commTextFullColor',
    'scrollbarThumbColor',
    'scrollbarTrackColor'
];
const cmpNS: string = 'Trade.TradeHistory';

var { 
    titleTextColor,
    historyTitleTextColor,
    historyTitleBGColor,
    historyTitleBorderColor,
    sellTextFullColor,
    sellBGColor,
    buyTextFullColor,
    buyBGColor,
    commTextFullColor,
    scrollbarThumbColor,
    scrollbarTrackColor
} = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);

const WrapperTradeHistoryCmp = styled.div`
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
        border-top: 1px solid ${historyTitleBorderColor};
        border-bottom: 1px solid ${historyTitleBorderColor};
        background-color: ${historyTitleBGColor};
    }
    .historyTitle {
        width: calc(100% - 1px);
        margin-left: 1px;
        height: 29px;
        line-height: 29px;
        padding: 0 20px;
        font-size: 12px;
        color: ${historyTitleTextColor};
        border-bottom: 1px solid ${historyTitleBorderColor};
        background-color: ${historyTitleBGColor};
    }
    .tradeHistoryBox {
        font-size: 12px;
        overflow: auto;
        height: calc(100% - 69px);
        .eachLine {
            position: relative;
            width: 100%;
            height: 20px; 
            line-height: 20px;
            margin-bottom: 1px;
            padding: 0 20px;
            z-index: 100;
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
`;

export { 
    WrapperTradeHistoryCmp
};