import styled from 'styled-components';
const amazonPng = require("@webExchangeImgs/amazon3.png");

const WrapperLoginCmp = styled.div`
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .loginFrame {
        .title {
            color: #191326;
            font-size: 28px;
            margin-bottom: 46px;
            text-align: center;
        }
    }
`;

const WrapperLoginFormCmp = styled.div`
    padding: 60px 40px;
    width: 460px;
    height: 360px;
    background: #fff;
    box-shadow: 0px 2px 6px 0px #e6e6e6;
    .ant-form {
        .has-error { 
            color: #ff2e49;
        }
        .ant-col{
            width: 100%;
        }
        .formItem {
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
        .emailBox, .pwdBox {
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
        .email {
            padding-bottom: 20px;
        }
        button {
            width: 100%;
            height: 40px;
            background-color: #00a0d2;
            color: #fff;
            border-radius: 1px;
            font-size: 14px;
            font-weight: 600;
        }
    }
    .formBottom {
        padding-top: 28px;
        font-size: 14px;
        color: #92949a;
        a {
            display: inline-block;
            color: #92949a;
        }
        span {
            float: right;
        }
        .regA {
            color: #00a0d2;
            padding-left: 10px;
        }
    }
`;

export {
    WrapperLoginCmp,
    WrapperLoginFormCmp
}