import styled from 'styled-components';
const customizeStyleCmpList: string[] = ['bgColor', 'shadowColor'];
const cmpNS: string = 'Trade';
var { bgColor, shadowColor } = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);
const chartStyleCmpList: string[] = [
    'actionBtnColor',
    'actionBgColor',
    'actionSelectedBtnColor',
    'actionSelectedBgColor',
    'actionArrowDown',
    'actionArrowUp',
    'actionFullScreen',
    'actionFullScreenActive',
    'actionMinScreen',
    'actionMinScreenActive'
];
const chartCmpNS: string = 'Trade.Chart';
var { 
    actionBtnColor,
    actionBgColor,
    actionSelectedBtnColor,
    actionSelectedBgColor,
    actionArrowDown,
    actionArrowUp,
    actionFullScreen,
    actionFullScreenActive,
    actionMinScreen,
    actionMinScreenActive
} = getMulThemeProps.themeProps(chartStyleCmpList, chartCmpNS);

const WrapperChartCmp = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .title {
        width: 100%;
        height: 28px;
        border-bottom: 1px solid ${shadowColor};
        background-color: ${actionBgColor};
        visibility: hidden;
        &.show {
            visibility: visible;
        }
    }
    .tradingview, .depth {
        width: 100%;
        height: calc(100% - 28px);
        background-color: ${bgColor};
    }
    .tradingview {
        display: block;
        &.hide {
            display: none;
        }
        .TVChartContainer {
            width: 100%;
            height: 100%;
            visibility: hidden;
            &.show {
                visibility: visible;
            }
        }
    }
    .depth {

    }
`;

const WrapperActionsCmp = styled.div`
    width: 100%;
    height: 100%;
    .action-btn {
        font-size: 12px;
        line-height: 16px;
        height: 28px;
        padding: 6px 16px;
        color: ${actionBtnColor};
        &.selected {
            color: ${actionSelectedBtnColor};
            background-color: ${actionSelectedBgColor}
            border-top: 1px solid ${shadowColor};
            border-bottom: 1px solid ${shadowColor};
        }
        .arrow {
            display: inline-block;
            width: 12px;
            height: 8px;
            margin-left: 5px;
            background-position: 0px -1px;
            background-size: 12px 8px;
            background-repeat: no-repeat;
            &.down {
                background-image: url(${actionArrowDown});
            }
            &.up {
                background-image: url(${actionArrowUp});
            }
        }
        &.fullscreen {
            height: 28px;
            span {
                display: inline-block;
                position: relative;
                top: 1px;
                width: 14px;
                height: 14px;
                background-size: cover;
                background-image: url(${actionFullScreen});
            }
            &:hover span {
                background-image: url(${actionFullScreenActive});
            }
        }
        &.hasFull {
            span {
                background-image: url(${actionMinScreen});
            }
            &:hover span {
                background-image: url(${actionMinScreenActive});
            }
        }
    }
    .leftActions, .rightActions {
        display: flex;
    }
    .leftActions {
        float: left;
        .action-btn {
            box-shadow: 1px 0px 0px 0px ${shadowColor};
        }
    }
    .rightActions {
        float: right;
        .action-btn {
            box-shadow: -1px 0px 0px 0px ${shadowColor};
        }
    }
`;

const WrapperDepthCmp = styled.div`
    height: 100%;
    #marketDepth div:nth-child(1) {
        height: 100% !important;
    }
    #marketDepth div:nth-child(1) canvas {
        height: 100% !important;
    }
`;

export { 
    WrapperChartCmp,
    WrapperActionsCmp,
    WrapperDepthCmp
};