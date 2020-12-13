import styled from 'styled-components';
const customizeStyleCmpList = ['bgColor', 'shadowColor', 'titleColor'];
const cmpNS = 'Trade';
var { bgColor, shadowColor, titleColor } = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);
const WrapperTradeCmp = styled.div `
    width: 100%;
    height: 100%;
    min-width: 1280px;
    min-height: 768px;
    overflow: auto;
    background-color: ${bgColor};
    .tradeTop {
        width: 100%;
        height: 56px;
        box-shadow: 0px 1px 0px 0px ${shadowColor};
    }
    .mainArea {
        width: 100%;
        height: calc(100vh - 56px);
        min-height: 712px;
        display: flex;
        .mainL, .mainM, .mainR {
            height: 100%;
        }
        .mainL {
            flex: 1;
            .marketAndChart, .myOrder {
                width: 100%;
                box-shadow: 1px 1px 0px 0px ${shadowColor};
            }
            .marketAndChart {
                height: 68.75%;
                .market, .chart {
                    width: 100%;
                }
                .market {
                    height: 68px;
                    background-color: ${titleColor};
                    box-shadow: 0px 1px 0px 0px ${shadowColor};
                }
                .chart {
                    height: calc(100% - 68px);
                }
            }
            .myOrder {
                width: ${document.body.offsetWidth > 1280 ? document.body.offsetWidth - 584 : 1280 - 584}px;
                position: relative;
                height: 31.25%;
            }
        }
        .mainM {
            width: 292px;
            box-shadow: 1px 1px 0px 0px ${shadowColor};
        }
        .mainR {
            width: 292px;
            .history, .buyOrSell {
                width: 100%;
                box-shadow: 1px 1px 0px 0px ${shadowColor};
            }
            .history {
                height: calc(100% - 600px);
            }
            .buyOrSell {
                position: relative;
                height: 600px;
                overflow: hidden;
            }
        }
    }
`;
export { WrapperTradeCmp };
//# sourceMappingURL=styled.js.map