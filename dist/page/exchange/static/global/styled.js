import { createGlobalStyle } from 'styled-components';
const cmpNS = 'Trade.Header';
const customizeStyleCmpList = [
    'dropdownBGColor',
    'dropdownSelectedBGColor',
    'dropdownTextColor',
    'dropdownSelectedTextColor',
    'menuItemLine',
    'arrowRight',
    'scrollbarThumbColor',
    'scrollbarTrackColor'
];
const chartCmpNS = 'Trade.Chart';
const chartStyleCmpList = [
    'actionDropdownTextColor',
    'actionDropdownBgColor',
    'actionSelectedBtnColor',
    'actionSelectedBgColor'
];
const buyOrSellCmpNS = 'Trade.BuyOrSell';
const buyOrSellStyleCmpList = [
    'tabSelectBgColor',
    'tabSelectBorderColor',
    'tabSelectTextColor',
    'tabSelectedTextColor',
    'tabSelectedBgColor'
];
const primaryCmpNS = 'Primary.Button';
const primaryStyleCmpList = [
    'blueDefaultColor',
    'blueHoverColor',
    'bluePressedColor',
    'greenDefaultColor',
    'greenHoverColor',
    'greenPressedColor',
    'redDefaultColor',
    'redHoverColor',
    'redPressedColor'
];
var { dropdownBGColor, dropdownSelectedBGColor, dropdownTextColor, dropdownSelectedTextColor, menuItemLine, arrowRight, scrollbarThumbColor, scrollbarTrackColor } = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);
var { actionDropdownTextColor, actionDropdownBgColor, actionSelectedBtnColor, actionSelectedBgColor } = getMulThemeProps.themeProps(chartStyleCmpList, chartCmpNS);
var { tabSelectBgColor, tabSelectBorderColor, tabSelectTextColor, tabSelectedTextColor, tabSelectedBgColor } = getMulThemeProps.themeProps(buyOrSellStyleCmpList, buyOrSellCmpNS);
var { blueDefaultColor, blueHoverColor, bluePressedColor, greenDefaultColor, greenHoverColor, greenPressedColor, redDefaultColor, redHoverColor, redPressedColor } = getMulThemeProps.themeProps(primaryStyleCmpList, primaryCmpNS);
const GlobalStyle = createGlobalStyle `
    .timezoneDropdown, .avatarDropdown {
        top: 58px !important;
        border: 1px solid ${dropdownSelectedBGColor};
        .ant-dropdown-menu {
            border-radius: 0px;
            background: ${dropdownBGColor};
            .ant-dropdown-menu-item {
                font-size: 12px;
                padding-left: 25px;
                background: ${dropdownBGColor};
                color: ${dropdownTextColor};
                &.ant-dropdown-menu-item-active, &.ant-dropdown-menu-item-selected {
                    background: ${dropdownSelectedBGColor};
                    color: ${dropdownSelectedTextColor};
                }
            }
            .ant-dropdown-menu-submenu {
                background: ${dropdownBGColor};
                .ant-dropdown-menu-submenu-title {
                    color: ${dropdownTextColor};
                    font-size: 12px;
                    padding-left: 25px;
                    background: inherit;
                    &:hover {
                        color: ${dropdownSelectedTextColor};
                    }
                }
                &.ant-dropdown-menu-submenu-active {
                    background: ${dropdownSelectedBGColor};
                    color: ${dropdownSelectedTextColor};
                }
            }
            .menuItemLine {
                width: 80%;
                height: 1px;
                margin-left: 10%;
                margin-top: 5px;
                margin-bottom: 5px;
                background: ${menuItemLine};
            }
            .arrowRight {
                float: right;
                display: inline-block;
                width: 8px;
                height: 13px;
                margin-top: 5px;
                background-size: 8px 13px;
                background-repeat: no-repeat;
                background-image: url(${arrowRight});
            }
        }
    }
    .timezoneDropdown {
        max-height: 400px;
        overflow: auto;
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
    .colorSetting {
        margin-left: 6px;
        .ant-dropdown-menu {
            background: ${dropdownBGColor} !important;
            margin-left: 8px;
            margin-top: -6px;
            border: 1px solid ${dropdownSelectedBGColor};
            border-radius: 0px;
            .ant-dropdown-menu-item {
                font-size: 12px;
                color: ${dropdownTextColor};
                &.ant-dropdown-menu-item-active, &.ant-dropdown-menu-item-selected {
                    color: ${dropdownSelectedTextColor};
                    background: ${dropdownSelectedBGColor};
                }
                .themeIcon {
                    float: left;
                    width: 14px;
                    height: 14px;
                    margin-right: 24px;
                    margin-top: 5px;
                    border-radius: 50%;
                    &.defaultGreen {
                        background: ${constants.themeColors.default.green}
                    }
                    &.defaultRed {
                        background: ${constants.themeColors.default.red}
                    }
                    &.mode1Green {
                        background: ${constants.themeColors.mode1.green}
                    }
                    &.mode1Red {
                        background: ${constants.themeColors.mode1.red}
                    }
                    &.mode2Green {
                        background: ${constants.themeColors.mode2.green}
                    }
                    &.mode2Red {
                        background: ${constants.themeColors.mode2.red}
                    }
                }
            }
        }
    }
    .instrumentsDropdown {
        padding-top: 15px !important;
        z-index: 999;
    }
    .resolutionDropdown {
        z-index: 2147483647 !important;
        .ant-dropdown-menu {
            background-color: ${actionDropdownBgColor};
            .ant-dropdown-menu-item {
                &:hover, &.selected {
                    background-color: ${actionSelectedBgColor};
                    a {
                        color: ${actionSelectedBtnColor};
                    }
                }
                a {
                    display: inline-block;
                    color: ${actionDropdownTextColor};
                    font-size: 12px;
                    line-height: 16px;
                }
            }
        }
    }
    .tradeTypeSelectDropdown, .orderAgingSelectDropdown {
        border-radius: 0 !important;
        background-color: ${tabSelectBgColor} !important;
        border: 1px solid ${tabSelectBorderColor};
        .ant-select-item {
            font-size: 12px;
            line-height: 22px;
            color: ${tabSelectTextColor};
            background-color: ${tabSelectBgColor};
            border-radius: 0;
            &.ant-select-item-option-selected, &:hover {
                color: ${tabSelectedTextColor} !important;
                background-color: ${tabSelectedBgColor} !important;
            }
        }
    }
    .verifyModal {
        .ant-modal-body {
            padding: 0;
        }
    }

    .blueGlBtn {
        background-color: ${blueDefaultColor} !important;
        &:hover {
            background-color: ${blueHoverColor} !important;
        }
        &:active {
            background-color: ${bluePressedColor} !important;
        }
    }

    .greenGlBtn {
        background-color: ${greenDefaultColor} !important;
        &:hover {
            background-color: ${greenHoverColor} !important;
        }
        &:active {
            background-color: ${greenPressedColor} !important;
        }
    }

    .redGlBtn {
        background-color: ${redDefaultColor} !important;
        &:hover {
            background-color: ${redHoverColor} !important;
        }
        &:active {
            background-color: ${redPressedColor} !important;
        }
    }

    .confirmBlueBtn {
        background: linear-gradient(44deg, rgba(0, 160, 210, 1) 0%, rgba(58, 189, 232, 1) 100%) !important;
        &:hover {
            background: linear-gradient(45deg, rgba(2, 152, 205, 1) 0%, rgba(50, 176, 223, 1) 100%) !important;
        }
    }
`;
export default GlobalStyle;
//# sourceMappingURL=styled.js.map