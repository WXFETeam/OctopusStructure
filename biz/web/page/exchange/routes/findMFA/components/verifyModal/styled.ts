import styled from 'styled-components';
const smartphone = require("@webExchangeImgs/verify/smartphone.png");

const WrapperVerifyCmp = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    text-align: center;
    .frameItem {
        display: inline-table;
        font-size: 14px;
        padding: 18px 40px 60px;
        background-color: #fff;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
        text-align: left;
        width: 100%;
        .tit {
            text-align: center;
            font-size: 18px;
            line-height: 24px;
            font-weight: 500;
            color: #32363e;
            padding-bottom: 18px;
            box-shadow: 0px 2px 0px 0px #00a0d2;
        }
        .inputBox {
            position: relative;
            margin: 40px 0 28px;
            .ant-col {
                height: 48px;
                width: 48px;
                box-shadow: 0px 1px 0px 0px #92949a;
                line-height: 36px;
                text-align: center;
                font-size: 36px;
                font-weight: 500;
                color: #32363e;
                margin-left: 30px;
                &.firstCol {
                    margin-left: 0px;
                }
                &.hasInput {
                    box-shadow: 0px 1px 0px 0px #00a0d2;
                }
            }
            .input-number {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 2;
                border: 0;
                opacity: 0;
            }
        }
        .content {
            color: #191e26;
            text-align: left;
            position: relative;
            margin: 38px 0 0;
            padding-left: 38px;
            &::before {
                display: inline-block;
                content: '';
                width: 26px;
                height: 32px;
                background: url(${smartphone}) no-repeat;
                background-size: cover;
                position: absolute;
                top: -5px;
                left: 0;
            }
        }
        .sendBox {
            button {
                border: 1px solid #00a0d2;
                border-radius: 1px;
                background-color: #fff;
                color: #00a0d2;
                width: 128px;
                height: 28px;
                line-height: 28px;
                margin: 14px 0 0 38px;
            }
        }
        .pointBox {
            color: #92949a;
            a {
                display: inline-block;
                color: #00a0d2;
            }
            .forgetPhone, .forgetGa {
                float: right;
            }
        }
        &.face {
            text-align: center;
            .faceP1 {
                color: #32363e;
                font-size: 18px;
                font-weight: 500;
                line-height: 25px;
                padding-top: 56px;
                margin-bottom: 24px;
            }
            .faceP2 {
                line-height: 20px;
                color: #76787e;
                margin-bottom: 40px;
            }
            button {
                width: 200px;
                height: 40px;
                line-height: 40px;
                color: #fff;
                font-weight: 600;
            }
        }
    }
`;

export {
    WrapperVerifyCmp,
}