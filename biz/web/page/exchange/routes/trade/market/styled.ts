import styled from 'styled-components';
const customizeStyleCmpList: string[] = [
    'curInstrumentTextColor',
    'titleTextColor',
    'contentTextColor',
    'upTextColor',
    'downTextColor',
    'instrumentsListBoxBorderColor',
    'instrumentListBoxBG',
    'tabNavTextColor',
    'tabNavSelectedTextColor',
    'tabNavSelectedUnderlineColor',
    'tabNavUnderlineColor',
    'searchBoxBGColor',
    'searchBGColor',
    'searchBorderColor',
    'instrumentDetailsTitleBGColor',
    'instrumentDetailsTitleBorderColor',
    'instrumentDetailsTitleColor',
    'contentBoxTextColor',
    'eachLineBGColor',
    'scrollbarThumbColor',
    'scrollbarTrackColor',
    'arrowDown',
    'arrowUp',
    'favorite',
    'favoriteHover',
    'favoriteActive'
];
const cmpNS: string = 'Trade.Market';

var { 
    curInstrumentTextColor,
    titleTextColor,
    contentTextColor,
    upTextColor,
    downTextColor,
    instrumentsListBoxBorderColor,
    instrumentListBoxBG,
    tabNavTextColor,
    tabNavSelectedTextColor,
    tabNavSelectedUnderlineColor,
    tabNavUnderlineColor,
    searchBoxBGColor,
    searchBGColor,
    searchBorderColor,
    instrumentDetailsTitleBGColor,
    instrumentDetailsTitleBorderColor,
    instrumentDetailsTitleColor,
    contentBoxTextColor,
    eachLineBGColor,
    scrollbarThumbColor,
    scrollbarTrackColor,
    arrowDown,
    arrowUp,
    favorite,
    favoriteHover,
    favoriteActive
} = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);

const WrapperMarketCmp = styled.div`
    width: 100%;
    height: 100%;
    .marketBox {
        padding: 14px 20px;
        .curInstrument {
            font-size: 20px;
            font-weight: bold;
            color: ${curInstrumentTextColor}
            background-repeat: no-repeat;
            background-size: 18px 11px;
            background-position: 100px 10px;
            cursor: pointer;
            &.down {
                background-image: url(${arrowDown});
            }
            &.up {
                background-image: url(${arrowUp});
            }
        }
        .title {
            font-size: 12px;
            font-weight: 400;
            color: ${titleTextColor};
        }
        .content {
            font-size: 14px;
            font-weight: 600;
            color: ${contentTextColor};
            .up {
                color: ${upTextColor};
            }
            .down {
                color: ${downTextColor};
            }
        }
    }
`;

const WrapperInstrumentsList = styled.div`
    width: 608px;
    height: 424px;
    border: 1px solid ${instrumentsListBoxBorderColor};
    background: ${instrumentListBoxBG};
    .tabNav {
        .ant-tabs-tab {
            color: ${tabNavTextColor};
            &.ant-tabs-tab-active, &:hover {
                color: ${tabNavSelectedTextColor};
                .favorite {
                   background-image: url(${favoriteActive})};
                }
            }
        }
        .ant-tabs-bar  {
            border-bottom: 1px solid ${tabNavUnderlineColor};
            margin-bottom: 0px;
        }
        .ant-tabs-ink-bar {
            background-color: ${tabNavSelectedUnderlineColor};
        }
        .favorite {
            padding-left: 25px;
            background-repeat: no-repeat;
            background-size: 12px 12px;
            background-position: 1px 3px;
            background-image: url(${favorite});
            &:hover {background-image: url(${favoriteHover})};
        }
    }
`;

const WrapperInstrumentsSearch = styled.div`
    box-sizing: border-box 
    width: 610px;
    height: 60px;
    padding: 17px 25px;
    background: ${searchBoxBGColor};
    border-bottom: 1px solid ${tabNavUnderlineColor};
    .ant-input-prefix {
        color: rgba(255, 255, 255, 0.8) !important;
    }
    .ant-input {
        background-color: ${searchBGColor};
        border: 1px solid ${searchBorderColor};
        color: ${tabNavSelectedTextColor};
        &:hover, &:focus {
            border: 1px solid ${tabNavSelectedTextColor} !important;
            -webkit-box-shadow: 0 0 0 0 ${tabNavSelectedTextColor};
            box-shadow: 0 0 0 0 ${tabNavSelectedTextColor};
        }
    }
    .ant-input-affix-wrapper .ant-input:not(:first-child) {
        margin-bottom: 2px;
        padding-left: 35px;
    }
`;

const WrapperInstrumentsDetails = styled.div`
    .title {
        width: 100%;
        height: 40px;
        background: ${instrumentDetailsTitleBGColor};
        border-bottom: 1px solid ${instrumentDetailsTitleBorderColor};
        font-size: 12px;
        color: ${instrumentDetailsTitleColor};
        .ant-col {
            &.left {
                text-align: left;
                margin-left: 40px;
            }
            &.center {
                text-align: right;
                margin-left: 25px;
            }
            &.right {
                text-align: right;
                margin-left: 95px;
            }
        }
    }
    .contentBox {
        width: 100%;
        height: 279px;
        overflow: auto;
        font-size: 14px;
        color: ${contentBoxTextColor};
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background: ${scrollbarThumbColor};
        }
        &::-webkit-scrollbar-track {
            background: ${scrollbarTrackColor};
        }
        .eachLine {
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            &:hover, &.active {
                background: ${eachLineBGColor};
            }
            .ant-col {
                &.favoriteIcon {
                    width: 40px;
                    i {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        margin: 14px;
                        background-repeat: no-repeat;
                        background-size: 12px 12px;
                        background-image: url(${favorite});
                        &.active {
                            background-image: url(${favoriteActive}) !important;
                        }
                        &:hover {
                            background-image: url(${favoriteHover});
                        }
                    }
                }
                &.left {
                    text-align: left;
                }
                &.center {
                    text-align: right;
                    margin-left: 53px;
                }
                &.right {
                    text-align: right;
                    margin-left: 120px;
                }
                &.down {color: ${downTextColor}}
                &.up {color: ${upTextColor}}
            }
        }
    }
`;

export { 
    WrapperMarketCmp,
    WrapperInstrumentsList,
    WrapperInstrumentsSearch,
    WrapperInstrumentsDetails
};