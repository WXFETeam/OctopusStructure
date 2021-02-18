import styled from 'styled-components';
const amazonPng = require("@webExchangeImgs/amazon3.png");
const WrappedForgotPwdCmp = styled.div `
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .ant-col{
        width: 100%;
    }
`;
const WrappedForgotPwdStepFirstCmp = styled.div `
    .title {
        color: #191326;
        font-size: 28px;
        margin-bottom: 46px;
        text-align: center;
    }
    .stepFirstForm {
        padding: 64px 40px;
        width: 460px;
        background: #fff;
        box-shadow: 0px 2px 6px 0px rgba(230, 230, 230, 0.5);
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
        .formItem.email {
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
            .emailBox {
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
            }
        }
        .submitBtn {
            display: inline-block;
            width: 100%;
            height: 40px;
            color: #fff;
            background: #00a0d2;
            border-radius: 1px;
            margin-top: 8px;
            text-align: center;
        }
    }
`;
const WrappedForgotPwdStepSecondCmp = styled.div `
    padding: 60px 61px;
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
        margin-bottom: 29px;
    }
`;
const WrappedForgotPwdStepThirdCmp = styled.div `
    .title {
        color: #191326;
        font-size: 28px;
        margin-bottom: 46px;
        text-align: center;
    }
    .stepThirdtForm {
        padding: 62px 40px;
        width: 460px;
        background: #fff;
        box-shadow: 0px 2px 6px 0px rgba(230, 230, 230, 0.5);
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
            .pwdBox {
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
                    top: -2px;
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
        }
        .submitBtn {
            display: inline-block;
            width: 100%;
            height: 40px;
            color: #fff;
            background: #00a0d2;
            border-radius: 1px;
            margin-top: 8px;
            text-align: center;
        }
    }
`;
const WrappedForgotPwdStepFourthCmp = styled.div `
    width: 558px;
    height: 352px;
    padding: 60px;
    text-align: center;
    background: #fff;
    .title {
        font-size: 28px;
        color: #191e26;
        margin-bottom: 40px;
    }
    .content {
        font-size: 14px;
        color: #191e26;
        margin-bottom: 40px;
    }
    .code {
        width: 100%;
        cursor: pointer;
        margin-bottom: 28px;
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
export { WrappedForgotPwdCmp, WrappedForgotPwdStepFirstCmp, WrappedForgotPwdStepSecondCmp, WrappedForgotPwdStepThirdCmp, WrappedForgotPwdStepFourthCmp };
//# sourceMappingURL=styled.js.map