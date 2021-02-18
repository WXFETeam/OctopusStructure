import styled from 'styled-components';
const customizeStyleCmpList: string[] = [
    'textColor',
    'inputLabelColor',
    'titleColor',
    'activeTextColor',
    'boxShadow',
    'headerBgColor',
    'headerFeesIcon',
    'headerFeesIconActive',
    'contentBgColor',
    'contentBuyColor',
    'contentSellColor',
    'contentTabTextColor',
    'contentTabSelectedTextColor',
    'contentTabSelectedBorderColor',
    'contentInputTextColor',
    'contentInputBgColor',
    'contentInputLimitValueBgColor',
    'contentInputBorderColor',
    'contentInputFocusBorderColor',
    'contentInputDisabledTextColor',
    'contentInputDisabledBgColor',
    'btnActiveColor',
    'feesDetailBorderColor',
    'feesDetailBgColor',
    'feesDetailTextColor',
    'feesDetailBtnColor',
    'tabSelectBgColor',
    'tabSelectBorderColor',
    'tabSelectTextColor',
    'tabSelectedTextColor',
    'orderAgingTitColor',
    'orderAgingBorderColor'
];
const cmpNS: string = 'Trade.BuyOrSell';

var { 
    textColor,
    inputLabelColor,
    titleColor,
    activeTextColor,
    boxShadow,
    headerBgColor,
    headerFeesIcon,
    headerFeesIconActive,
    contentBgColor,
    contentBuyColor,
    contentSellColor,
    contentTabTextColor,
    contentTabSelectedTextColor,
    contentTabSelectedBorderColor,
    contentInputTextColor,
    contentInputBgColor,
    contentInputLimitValueBgColor,
    contentInputBorderColor,
    contentInputFocusBorderColor,
    contentInputDisabledTextColor,
    contentInputDisabledBgColor,
    btnActiveColor,
    feesDetailBorderColor,
    feesDetailBgColor,
    feesDetailTextColor,
    feesDetailBtnColor,
    tabSelectBgColor,
    tabSelectBorderColor,
    tabSelectTextColor,
    tabSelectedTextColor,
    orderAgingTitColor,
    orderAgingBorderColor
} = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);

const WrapperInputItemCmp = styled.div`
    .inputItem {
        margin-bottom: 12px;
        .label {
            font-size: 12px;
            line-height: 12px;
            color: ${inputLabelColor};
            padding-bottom: 8px;
            margin-bottom: 0;
        }
        input {
            width: 100%;
            font-size: 12px;
            color: ${contentInputTextColor};
            background-color: ${contentInputBgColor};
            border-radius: 0;
            border: 1px solid ${contentInputBorderColor};
            padding-right: 34px;
            &::placeholder {
                color: ${contentInputDisabledTextColor};
            }
            &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
                position: relative;
                right: -32px;
                top: 1px;
                width: 8px;
                height: 14px;
                background-color: rgba(255, 255, 255, 0);
            }
            &.ant-input-disabled {
                background-color: ${contentInputDisabledBgColor};
            }
        }
        .ant-input-affix-wrapper {
            background-color: ${contentInputBgColor};
            border: 1px solid ${contentInputBorderColor};
            border-radius: 0;
            box-shadow: none;
            height: 24px;
        }
        .ant-input-affix-wrapper-focused {
            border: 1px solid ${contentInputFocusBorderColor} !important;
        }
        .ant-input-affix-wrapper-disabled {
            background-color: ${contentInputDisabledBgColor};
        }
        .ant-input-suffix {
            color: ${contentInputDisabledTextColor};
            padding-right: 8px;
            line-height: 14px;
        }
    }
    a {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        text-align: center;
        background-color: ${contentInputBgColor};
        color: ${textColor};
        border: 1px solid ${contentInputBorderColor};
        margin-right: 8px;
        &.active {
            border: 1px solid ${btnActiveColor};
            color: ${btnActiveColor};
        }
    }
`;

const WrapperBuyOrSellCmp = styled.div`
    width: 100%;
    height: 100%;
    .header {
        width: 100%;
        height: 40px;
        background-color: ${headerBgColor};
        padding: 12px 20px;
        border-top: 1px solid ${boxShadow};
        border-bottom: 1px solid ${boxShadow};
        .title {
            float: left;
            color: ${titleColor};
            font-size: 14px;
            font-weight: 600;
            line-height: 17px;
        }
        .fees {
            float: right;
            color: ${textColor};
            font-size: 12px;
            position: relative;
            .icon {
                display: inline-block;
                position: relative;
                top: 2px;
                width: 12px;
                height: 12px;
                margin-left: 4px;
                background-image: url(${headerFeesIcon});
                background-size: cover;
            }
            .detail {
                position: absolute;
                display: none;
                bottom: -100px;
                right: 0;
                width: 216px;
                height: 96px;
                background-color: ${feesDetailBgColor};
                border: 1px solid ${feesDetailBorderColor};
                font-size: 12px;
                z-index: 2;
                padding: 16px;
                .detail-item {
                    position: relative;
                    width: 100%;
                    height: 18px;
                    line-height: 16px;
                    font-weight: 300;
                    color: ${feesDetailTextColor};
                    .item-title {
                        position: absolute;
                        left: 0;
                    }
                    .percent {
                        position: absolute;
                        right: 0;
                    }
                }
                .more a {
                    display: inline-block;
                    padding-top: 10px;
                    font-weight: 400;
                    color: ${feesDetailBtnColor};
                }
            }
            &:hover {
                color: ${titleColor};
                .icon {
                    background-image: url(${headerFeesIconActive});
                }
                .detail {
                    display: block;
                }
            }
        }
    }
    .content {
        width: 100%;
        height: calc(100% - 40px);
        padding: 24px 20px;
        .direction {
            width: 100%;
            height: 28px;
            a {
                display: inline-block;
                width: 100%;
                height: 100%;
                font-size: 14px;
                text-align: center;
                line-height: 28px;
                font-weight: bold;
                color: ${textColor};
                background-color: ${contentBgColor};
                &.buy {
                    border-top-left-radius: 2px;
                    border-bottom-left-radius: 2px;
                    &.active {
                        color: ${activeTextColor};
                        background-color: ${contentBuyColor};
                    }
                }
                &.sell {
                    border-top-right-radius: 2px;
                    border-bottom-right-radius: 2px;
                    &.active {
                        color: ${activeTextColor};
                        background-color: ${contentSellColor};
                    }
                }
            }
        }
        .inputArea {
            position: relative;
            width: 100%;
            padding-bottom: 24px;
            .ant-tabs {
                width: 100%;
                .ant-tabs-bar {
                    margin: 0 0 44px 0;
                    border-bottom: 1px solid ${boxShadow};
                    .ant-tabs-nav-container {
                        padding: 0;
                        .ant-tabs-tab {
                            padding: 18px 0 8px;
                            margin: 0;
                            font-size: 14px;
                            line-height: 16px;
                            font-weight: 600;
                            text-align: center;
                            color: ${contentTabTextColor};
                            &.ant-tabs-tab-active {
                                color: ${contentTabSelectedTextColor};
                            }
                        }
                        .ant-tabs-tab:nth-child(1) {
                            width: 34px;
                        }
                        .ant-tabs-tab:nth-child(2) {
                            margin: 0 20px;
                            width: 62px;
                        }
                        .ant-tabs-tab:nth-child(3) {
                            width: 116px;
                        }
                        .ant-tabs-ink-bar {
                            background-color: ${contentTabSelectedBorderColor};
                        }
                    }
                }
                .tabSelect {
                    height: 16px;
                    position: relative;
                    .icon {
                        display: inline-block;
                        position: relative;
                        width: 12px;
                        height: 12px;
                        margin-right: 4px;
                        background-image: url(${headerFeesIcon});
                        background-size: cover;
                        &:hover .tabSelectDetail {
                            display: block;
                        }
                    }
                    .tabSelectDetail {
                        position: fixed;
                        z-index: 2;
                        margin-top: 19px;
                        right: 20px;
                        width: 252px;
                        height: 248px;
                        background-color: ${tabSelectBgColor};
                        border: 1px solid ${tabSelectBorderColor};
                        text-align: left;
                        padding: 10px 12px;
                        font-size: 12px;
                        display: none;
                        .detailItme {
                            padding-bottom: 20px;
                            .detailTit {
                                line-height: 15px;
                                color: ${tabSelectedTextColor};
                                padding-bottom: 8px;
                                span {
                                    border-bottom: 1px solid ${tabSelectedTextColor};
                                }
                            }
                            .detailCon {
                                line-height: 16px;
                                color: ${tabSelectTextColor};
                            }
                        }
                    }
                }
                .ant-select {
                    overflow: hidden;
                    height: 100%;
                    width: 100px;
                    .ant-select-selector {
                        top: 2px;
                        border: 0;
                        border-radius: 0;
                        height: 16px;
                        box-shadow: none;
                        background-color: transparent;
                        color: ${contentTabTextColor};
                        padding: 0;
                        .ant-select-selection-search {
                            display: none;
                        }
                        .ant-select-selection-item {
                            text-overflow: initial;
                            line-height: 16px;
                        }
                    }
                    .ant-select-arrow {
                        color: ${contentTabTextColor};
                        right: 0;
                        top: 60%;
                    }
                }
            }
            .balance {
                font-size: 12px;
                text-align: right;
                color: ${textColor};
                position: absolute;
                right: 0;
                top: 54px;
            }
        }
        .buyBtn, .sellBtn {
            width: 100%;
            height: 32px;
            border: 0;
            border-radius: 2px;
            font-size: 14px;
            font-weight: bold;
            color: ${activeTextColor};
        }
        .buyBtn {
            background-color: ${contentBuyColor};
        }
        .sellBtn {
            background-color: ${contentSellColor};
        }
    }
`;

const WrapperMarketCmp = styled(WrapperInputItemCmp)`
    
`;

const WrapperLimitCmp = styled(WrapperInputItemCmp)`
    .limitPriceValue {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        padding-left: 12px;
        color: ${textColor};
        background-color: ${contentInputLimitValueBgColor};
    }
`;

const WrapperStopCmp = styled(WrapperInputItemCmp)`
    
`;

const WrapperAmountCmp = styled(WrapperInputItemCmp)`
    .percent {
        width: 100%;
        padding-top: 8px;
        a {
            width: 57px;
        }
        a:nth-child(4) {
            margin-right: 0;
        }
    }
`;

const WrapperOrderAging = styled.div`
    padding-top: 18px;
    display: flex;
    border-top: 1px solid ${orderAgingBorderColor};
    .title {
        color: ${orderAgingTitColor};
        flex: 1;
        text-align: left;
    }
    .selectBox {
        width: 120px;
        color: ${contentTabTextColor};
        .ant-select {
            width: 120px !important;
        }
    }
`;

export { 
    WrapperBuyOrSellCmp,
    WrapperOrderAging,
    WrapperMarketCmp,
    WrapperLimitCmp,
    WrapperStopCmp,
    WrapperAmountCmp
};