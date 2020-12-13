import styled from 'styled-components';

const avatarIcon = require("@webExchangeImgs/avatarIcon.png");

const WrapperHeaderCmp = styled.div`
    width: 100%;
    min-width: 1280px;
    height: 56px;
    padding: 0 15px;
    line-height: 56px;
    background: #191e26;
    border-bottom: 1px solid #32363e;
    .logo {
        width: 112px;
        height: 38px;
        cursor: pointer;
    }
    .menuBar {
        display: inline-block;
        width: 400px;
        font-size: 14px;
        li {
            display: inline-block;
            text-align: center;
            width: 60px;
            color: #92949a;
            cursor: pointer;
            &.active, &:hover {
                color: #fff;
            }
        }
    }
    .loginBtn {
        float: right;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        margin-right: 35px;
    }
    .regBtn {
        float: right;
        width: 84px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #fff;
        background: #00a0d2;
        margin-top: 14px;
        margin-right: 35px;
    }
    .avatarIcon {
        float: right;
        width: 26px;
        height: 26px;
        margin-right: 35px; 
        margin-top: 14px;
        background: url(${avatarIcon}) no-repeat;
        background-size: 26px 26px;
        cursor: pointer;
    }
    .localesChange {
        float: right;
        margin-top: 12px;
        .ant-select-selection {
            background: #191e26;
            border: 0px;
            .ant-select-selection__rendered {
                color: #fff;    
            }
        }
    }
`;

export { WrapperHeaderCmp }