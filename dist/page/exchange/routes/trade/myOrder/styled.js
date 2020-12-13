import styled from 'styled-components';
const customizeStyleCmpList = [
    'tabNavTextColor',
    'tabNavSelectedTextColor',
    'tabNavUnderlineColor',
    'tabNavSelectedUnderlineColor',
    'myOrderTableHeaderBG',
    'myOrderTableBodyBGColor',
    'myOrderTableBodyHoverBGColor',
    'myOrderTableHeaderLineColor',
    'opsBGColor',
    'opsBorderColor',
    'opsTextColor',
    'viewMoreTextColor',
    'arrowDown',
    'arrowUp',
    'showSelectdTypeBGColor',
    'selectedTypeTextColor',
    'selectedTypeTextActiveColor',
    'buyTextColor',
    'sellTextColor',
    'cancelBtnColor',
    'cancelBtnBorderColor',
    'scrollbarThumbColor',
    'scrollbarTrackColor'
];
const cmpNS = 'Trade.MyOrder';
var { tabNavTextColor, tabNavSelectedTextColor, tabNavUnderlineColor, tabNavSelectedUnderlineColor, myOrderTableHeaderBG, myOrderTableBodyBGColor, myOrderTableBodyHoverBGColor, myOrderTableHeaderLineColor, opsBGColor, opsBorderColor, opsTextColor, viewMoreTextColor, arrowDown, arrowUp, showSelectdTypeBGColor, selectedTypeTextColor, selectedTypeTextActiveColor, buyTextColor, sellTextColor, cancelBtnColor, cancelBtnBorderColor, scrollbarThumbColor, scrollbarTrackColor } = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);
const WrapperMyOrderCmp = styled.div `
    width: 100%;
    height: 100%;
    .tabNav {
        height: 100%;
        background: ${myOrderTableHeaderBG};
        .ant-tabs-tab {
            color: ${tabNavTextColor};
            &.ant-tabs-tab-active, &:hover {
                color: ${tabNavSelectedTextColor};
            }
        }
        .ant-tabs-bar  {
            border-bottom: 1px solid ${tabNavUnderlineColor};
            margin-bottom: 0px;
            .ant-tabs-nav-scroll { 
                padding: 0 20px;
                .ant-tabs-ink-bar {
                    background-color: ${tabNavSelectedUnderlineColor};
                }
            }
        }
        .myOrderTable {
            height: 100%;
            width: 100%;
            .ant-empty-description {
                color: #92949a;
            }
            .sell {
                color: ${sellTextColor};
            }
            .buy {
                color: ${buyTextColor};
            }
            .cancelBtn {
                display: inline-block;
                width: 60px
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: ${cancelBtnColor};
                border: 1px solid ${cancelBtnBorderColor};
            }
            .ant-table-tbody > tr {
                -webkit-transition: unset;
                transition: unset;
                cursor: pointer;
                &.ant-table-row:hover > td {
                    background: ${myOrderTableBodyHoverBGColor}
                }
            }
            .ant-table-thead > tr > th {
                padding: 0 0 0 17px;
                font-size: 12px;
                height: 28px;
                line-height: 28px;
                color: ${tabNavTextColor};
                background: ${myOrderTableHeaderBG};
                border-bottom: 1px solid ${myOrderTableHeaderLineColor};
                -webkit-transition: unset;;
                transition: unset;
            }
            .ant-table { 
                background: ${myOrderTableBodyBGColor};
            }
            .ant-table thead > tr > th, .ant-table tbody > tr > td, .ant-table tfoot > tr > th, .ant-table tfoot > tr > td {
                padding: 0;
                font-size: 12px;
                height: 28px;
                line-height: 28px;
                color: ${tabNavTextColor};
                background: ${myOrderTableBodyBGColor};
                border-bottom: 0px;
                -webkit-transition: unset;;
                transition: unset;
            }
            .ant-table-body, .ant-table-content {
                overflow: auto !important;
                &::-webkit-scrollbar {
                    width: 5px;
                    height: 5px;
                }
                &::-webkit-scrollbar-thumb {
                    background: ${scrollbarThumbColor};
                    border-radius: 5px;
                }
                &::-webkit-scrollbar-track {
                    background: ${scrollbarTrackColor};
                    border-radius: 0;
                }
            }
            .ant-table-body {
                max-height: ${(document.body.offsetHeight - 55) * 0.3125 - 73 - 29}px !important;
                min-height: ${(document.body.offsetHeight - 55) * 0.3125 - 73 - 29}px !important;
            }
            .ant-table-content {
                max-height: ${(document.body.offsetHeight - 55) * 0.3125 - 73}px !important;
                min-height: ${(document.body.offsetHeight - 55) * 0.3125 - 73}px !important;
            }
        }
    }
`;
const WrapperOpenOrdersCmp = styled.div ` 

`;
const WrapperOrderHistoryCmp = styled.div `

`;
const WrapperTradeHistoryCmp = styled.div `

`;
const WrapperPotfolioCmp = styled.div `

`;
const WrapperOpsLineCmp = styled.div `
    width: 100%;
    height: 28px;
    line-height: 28px;
    padding: 0 24px 0 16px;
    background: ${opsBGColor};
    border-bottom: 1px solid ${opsBorderColor};
    color: ${opsTextColor};
    .opsLine {
        font-size: 12px;
        .hideOther {
            float: right;
            margin-right: 40px;
            .ant-checkbox-wrapper {
                color: ${opsTextColor};
                font-size: 12px;
                .ant-checkbox-inner {
                    width: 14px;
                    height: 14px;
                }
            }
        }
        .cancelOps {
            position: relative;
            float: right;
            margin-right: 40px;
            width: 182px;
            height: 20px;
            line-height: 20px;
            border: 1px solid ${opsTextColor};
            cursor: pointer;
            margin-top: 4px;
            &.showSelectedType {
                background-color: ${showSelectdTypeBGColor};
            }
            .verticalLine {
                position: absolute;
                top: -3px;
            }
            .btn {
                display: inline-block;
                width: 89px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: ${opsTextColor};
            }
            .select {
                display: inline-block;
                width: 89px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: ${opsTextColor};
                background-repeat: no-repeat;
                background-size: 10px 7px;
                background-image: url(${arrowDown});
                background-position: 71px 7px;
                &.show {
                    background-image: url(${arrowUp});
                }
            }
            .typeList {
                position: absolute;
                top: 20px;
                right: 0;
                width: 89px;
                background: ${showSelectdTypeBGColor};
                padding-left: 0;
                z-index: 1;
                li {
                    text-align: center;
                    height: 25px;
                    line-height: 25px;
                    color: ${selectedTypeTextColor};
                    list-style: none;
                    &.active, &:hover {
                        color: ${selectedTypeTextActiveColor};
                    }
                }
            }
        }
        .viewMore {
            float: right;
            text-align: right;
            cursor: pointer;
            color: ${viewMoreTextColor};
        }
    }
`;
export { WrapperMyOrderCmp, WrapperOpenOrdersCmp, WrapperOrderHistoryCmp, WrapperTradeHistoryCmp, WrapperPotfolioCmp, WrapperOpsLineCmp };
//# sourceMappingURL=styled.js.map