import styled from 'styled-components';
const eyePng = require("@webExchangeImgs/mail/eye.svg");
const eyeClosePng = require("@webExchangeImgs/mail/eye_close.png");

const WrapperIndexCmp = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 0 100px;
    background-color: #ffffff;
    .title {
        font-size: 28px;
        color: #191E26;
    }
    .wrapper{
        width: 460px;
        height: 528px;
        background:rgba(255,255,255,1);
        box-shadow:0 2px 8px 0 rgba(230,230,230,0.8);
        .form{
            width:100%;
            padding:0 40px;
            .ant-input{
                border-radius:0;
                border-top:none;
                border-right:none;
                border-left:none;
            }
    
            .ant-input:focus, .ant-input-focused{
                box-shadow:none;
            }

            .next-btn{
                margin-top:40px;
                width:100%;
                height:40px;
                background:linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
                box-shadow:0px 8px 20px 0px rgba(58,189,232,0.4);
                border-radius:1px;
            }

            .password{
                padding-right:40px;
            }

            .pwdStatus {
                position: absolute;
                z-index: 2;
                top: 10px;
                right: 5px;
                width: 28px;
                height: 18px;
                -webkit-transform:scale(0.7); 
                -moz-transform:scale(0.7); 
                -o-transform:scale(0.7); 
                cursor: pointer;
                &.show {
                    background: url(${eyePng}) no-repeat;
                }
                &.hide {
                    background: url(${eyeClosePng}) no-repeat;
                }
            }
        }

    }

`;

export {
    WrapperIndexCmp
}