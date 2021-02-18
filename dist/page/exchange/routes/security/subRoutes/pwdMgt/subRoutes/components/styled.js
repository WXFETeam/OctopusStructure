import styled from 'styled-components';
const amazonPng = require("@webExchangeImgs/amazon3.png");
const WrapperCorrectPwdCmp = styled.div `
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    .title{
        font-size:34px;
        color:rgba(25,30,38,1);
        margin-top: 110px;
        margin-bottom: 40px;
        font-weight: 400;
    }

    .tip{
        width:460px;
        height:40px;
        background:rgba(236,248,252,1);
        border-radius:1px;
        line-height: 40px;
        font-size:12px;
        font-weight:400;
        color:rgba(0,160,210,1);
        img{
            margin-left: 28px;
            margin-right: 9px;
            vertical-align: text-bottom;
            width: 18px;
            height: 18px
        }

    }

    .CorrectPwdForm{
        padding: 60px 40px;
        width: 460px;
        height: 416px;
        background: #fff;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
        .ant-col{
            width: 100%;
        }
        margin-top: 40px;
        
            .has-error { 
                color: #ff2e49;
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
  

`;
export { WrapperCorrectPwdCmp };
//# sourceMappingURL=styled.js.map