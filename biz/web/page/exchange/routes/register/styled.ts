import styled from 'styled-components';

const amazonPng = require("@webExchangeImgs/amazon3.png");

const WrappedRegisterCmp = styled.div`
    width: 100%;
    height: 100%;
    background: #f5f5f5;
`;

const WrappedRegisterFormCmp = styled.div`
    padding: 60px 40px;
    width: 460px;
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(230, 230, 230, 0.5);
    .ant-col{
        width: 100%;
    }
    .title {
        color: #191326;
        font-size: 28px;
        margin-bottom: 46px;
        text-align: center;
    }
    .ant-select-selector {
        padding: 0px!important;
        font-size: 16px;
        font-weight: 500;
        color: #484C52;
        &:hover {
            border-color: #e6e6e6;
        }
    }
    .ant-select{
        border-bottom: 1px solid #E6E6E6;
        .ant-select-selection-item:after{
            display: none!important;
        }
    }
    .ant-select-focused .ant-select-selection,
    .ant-select-selection:focus,
    .ant-select-selection:active {
        -webkit-box-shadow: unset;
        box-shadow: unset;
    }
    .has-error .ant-select-open .ant-select-selection,
    .has-error .ant-select-focused .ant-select-selection {
        -webkit-box-shadow: unset;
        box-shadow: unset;
    }
    .ant-select-selection__rendered { margin-left: 0px;}
    .has-error .ant-select-selection-selected-value { color: #ff2e49;}
    .formItem {
        &.nation, &.email, &.pwd {
            margin-bottom: 60px;
        }
        .ant-input {
            border: 0px;
            border-bottom: 1px solid #e6e6e6;
            border-radius: 0px;
            padding: 0px;
            -webkit-transition: unset;
            transition: unset;
            &:focus {
                -webkit-box-shadow: unset;
                box-shadow: unset;
                border-bottom: 1px solid #00a0d2;
            }
        }
    }
    .has-error {
        .ant-input {
            border: 0px;
            border-bottom: 1px solid #ff2e49 !important;
            padding: 0px;
        }
        .label {
            color: #ff2e49 !important;
        }
        .ant-form-explain {
            text-align: center;
        }
    }
    .emailBox, .pwdBox, .recommendBox {
        position: relative;
        .label {
            position: absolute;
            font-size: 16px;
            top: 0px;
            color: #484c52;
            z-index: 1;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
            &.up {
                top: -30px;
                color: #00a0d2;
                font-size: 14px;
            }
        }
        .level {
            position: absolute;
            top: 10px;
            right: 0px;
            width:60px;
            height: 14px;
            line-height: 14px;
            font-size: 12px;  
            color: #ff2e49;
            z-index: 1;  
            display: none;
            &.up {
                display: block;
                top: -20px;
            }
            .text {
                display: inline-block;
                &.second {color: orange;}
                &.third {color: green;}
            }
            i {
                display: inline-block;
                width: 10px;
                height: 4px;
                margin-right: 6px;
                margin-bottom: 3px;
                background: #e6e6e6;
                &.one { 
                    &.first {background: #ff2e49;}
                    &.second {background: orange;}
                    &.third {background: green;}
                }
                &.two {
                    &.second {background: orange;}
                    &.third {background: green;}
                }
                &.three {
                    &.third {background: green;}
                }
            }
        }
        .pwdStatus {
            position: absolute;
            z-index: 2;
            top: 0px;
            right: 5px;
            width: 28px;
            height: 18px;
            cursor: pointer;
            background: url(${amazonPng}) no-repeat;
            &.show {
                background-position: -320px -369px;
            }
            &.hide {
                background-position: -320px -339px;
            }
        }
    }
    .policyBox {
        margin-top: 38px;
        .ant-checkbox-wrapper {
            line-height: 20px;
        }
    }
    .regBtn {
        display: inline-block;
        width: 100%;
        height: 40px;
        color: #fff;
        border-radius: 1px;
        margin-top: 8px;
        text-align: center;
    }
    .loginLink {
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #92949a;
        margin-top: 28px;
    }
`;

const WrappedRegisterSecondStepCmd = styled.div`
    padding: 60px 66px;
    width: 560px;
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(230, 230, 230, 0.5);
    text-align: center;
    .emailPic {
        width: 90px;
        height: 96px;
        margin-bottom: 20px;
    }
    .title {
        font-size: 28px;
        color: #191e26;
        margin-bottom: 32px;
    }
    .content {
        font-size: 14px;
        color: #191e26;
        margin-bottom: 20px;
    }
    .gotoEmail {
        display: block;
        color: #00a0d2;
        margin-bottom: 30px;
    }
    .line {
        width: 100%;
        height: 1px;
        background: #e6e6e6;
    }
    .ops {
        margin-top: 39px;
        height: 30px;
        .prompt {
            float: left;
            color: #191e26;
            font-size: 20px;
        }
        a {
            float: right;
            display: inline-block;
            width: 86px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            border: 1px solid #00a0d2;
            color: #00a0d2;
        }
    }
    .code {
        width: 100%;
        margin-top: 40px;
        cursor: pointer;
        .inputItem {
            font-size: 36px;
            font-weight: 500;
            color: #32363e;
            height: 48px;
            line-height: 36px;
            border-bottom: 1px solid rgb(230, 230, 230);
            &.active {
                border-bottom: 1px solid rgb(0, 160, 210);
            }        
        }
    }
`;

export {
    WrappedRegisterCmp,
    WrappedRegisterFormCmp,
    WrappedRegisterSecondStepCmd
}