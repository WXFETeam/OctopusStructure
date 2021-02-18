import styled from 'styled-components';

const cmpNS: string = 'Trade.Header';
const customizeStyleCmpList: string[] = [
    'navBorderColor',
    'navBGColor', 
    'navItemTextColor', 
    'navItemUnderlineColor', 
    'navSelectedItemTextColor',
    'timeZoneTimeTextColor', 
    'timeZoneDateTextColor',
    'nameTextColor',
    'loginTextColor',
    'arrowDown',
    'arrowUp',
    'arrowRight',
    'darkIcon',
    'darkActiveIcon',
    'lightIcon',
    'lightActiveIcon',
    'avatarIcon',
    'avatarActiveIcon'
];

var { 
    navBorderColor,
    navBGColor, 
    navItemTextColor, 
    navItemUnderlineColor,
    navSelectedItemTextColor, 
    timeZoneTimeTextColor, 
    timeZoneDateTextColor,
    nameTextColor,
    loginTextColor,
    arrowDown,
    arrowUp,
    arrowRight,
    darkIcon,
    darkActiveIcon,
    lightIcon,
    lightActiveIcon,
    avatarIcon,
    avatarActiveIcon
} = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);

const WrapperHeaderCmp = styled.div`
    width: 100%;
    height: 100%;
    .logoBox {
        float: left;
        width: 160px;
        height: 100%;
        padding: 10px;
        img {
            width: 80%;
            margin-left: 10px;
        }
    }
    .navBox {
        float: left;
        width: calc(100% - 744px);
        height: 100%;
        box-shadow: ${navBorderColor} 1px 1px 0px 0px;
        .ant-menu-horizontal {
            line-height: 54px;
            background: ${navBGColor};
            border-bottom: 0px;
            transition: unset;
            -webkit-transition: unset;
            .ant-menu-item {
                color: ${navItemTextColor};
                &.ant-menu-item-selected, &.ant-menu-item-active {
                    color: ${navSelectedItemTextColor};
                    border-bottom: 2px solid ${navItemUnderlineColor};
                }
            }
        }
    }
    .timezoneBox {
        float: left;
        width: 292px;
        height: 100%;
        overflow: auto;
        text-align: center;
        cursor: pointer;
        box-shadow: ${navBorderColor} 1px 1px 0px 0px;
        .time {
            font-size: 14px;
            color: ${timeZoneTimeTextColor}
        }
        .date {
            display: inline-block;
            margin-left: 20px;
            font-size: 12px;
            color: ${timeZoneDateTextColor}
        }
    }
    .themeBox {
        float: left;
        width: 80px;
        height: 100%;
        box-shadow: ${navBorderColor} 1px 1px 0px 0px;
        cursor: pointer;
        i {
            display: inline-block;
            margin: 18px 30px;
            width: 20px;
            height: 20px;
            background-size: 20px 20px;
            background-repeat: no-repeat;
            &.dark {
                background-image: url(${lightIcon});
                &:hover {background-image: url(${lightActiveIcon});}
            }
            &.light {
                background-image: url(${darkIcon});
                &:hover {background-image: url(${darkActiveIcon});}
            }
        }
    }
    .avatarBox {
        float: left;
        width: 212px;
        height: 100%;
        cursor: pointer;
        .name {
            font-size: 14px;
            color: ${nameTextColor}
        }
        i {
            display: inline-block;
            width: 10px;
            height: 10px;
            margin-left: 20px;
            margin-top: -4px;
            background-size: 10px 10px;
            background-repeat: no-repeat;
            background-image: url(${avatarIcon});
            &:hover {background-image: url(${avatarActiveIcon});}
        }
        .arrow {
            display: inline-block;
            width: 12px;
            height: 8px;
            margin-left: 15px;
            background-position: 0px -1px;
            background-size: 12px 8px;
            background-repeat: no-repeat;
            &.down {
                background-image: url(${arrowDown});
            }
            &.up {
                background-image: url(${arrowUp});
            }
        }
    }
    .noLoginBox {
        float: left;
        width: 212px;
        height: 100%;
        .loginText {
            color: ${loginTextColor};
            font-size: 14px;
            cursor: pointer;
        }
        .regBtn {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            width: 96px;
            text-align: center;
            color: #fff;
            background: rgba(0, 160, 210, 1);
        }
    }
`;

export { 
    WrapperHeaderCmp
};