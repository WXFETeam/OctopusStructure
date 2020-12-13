import styled, { createGlobalStyle } from 'styled-components';
const explainIcon = require('@webExchangeImgs/kyc/explainIcon.png');
const agreementIcon = require('@webExchangeImgs/kyc/agreementIcon.png');
const clauseIcon = require('@webExchangeImgs/kyc/clauseIcon.png');
const rightWhite = require('@webExchangeImgs/kyc/rightWhite.png');
const WrapperAgreementCmp = styled.div `
    position: relative;
    width: 844px;
    display: inline-block;
    .routeName {
        width: 100%;
        height: 100px;
        line-height: 100px;
        color: #32363e;
        font-size: 28px;
        font-weight: 300;
        margin-bottom: 40px;
        box-shadow: 0px 1px 0px 0px #e6e6e6;
    }
    .agreementTit {
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #32363e;
        padding-bottom: 40px;
        width: 100%;
    }
    .agreementItem {
        width: 100%;
        height: 120px;
        border: 1px solid #e6e6e6;
        display: flex;
        align-items: center;
        padding: 34px 40px;
        margin-bottom: 24px;
        &.reskExplanationUrl .itemLeft::before {
            background-image: url(${explainIcon});
        }
        &.applyUrl .itemLeft::before {
            background-image: url(${agreementIcon});
        }
        &.businessUrl .itemLeft::before {
            background-image: url(${clauseIcon});
        }
        .itemLeft {
            flex: 1;
            position: relative;
            padding-left: 68px;
            &::before {
                display: inline-block;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 44px;
                height: 48px;
                background-size: cover;
            }
            .name {
                font-size: 18px;
                color: #32363e;
                font-weight: 500;
                line-height: 24px;
            }
            .content {
                font-size: 14px;
                color: #76787e;
                line-height: 20px;
                padding-top: 8px;
            }
        }
        .itemRight {
            button {
                width: 110px;
                height: 32px;
                border-radius: 1px;
                border: 1px solid #00a0d2;
                color: #00a0d2;
                font-size: 14px;
                font-weight: 500;
            }
            .confirmAgreement {
                width: 196px;
                font-size: 14px;
                a {
                    color: #92949a;
                    border-bottom: 1px solid #e6e6e6;
                    margin-right: 24px;
                }
                span {
                    color: #5eb44e;
                }
                .icon {
                    position: relative;
                    top: 2px;
                    right: -5px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: #5eb44e;
                    display: inline-block;
                    &::after {
                        display: inline-block;
                        content: '';
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        margin: auto;
                        width: 9px;
                        height: 6px;
                        background-size: cover;
                        background-image: url(${rightWhite});
                    }
                }
            }
        }
    }
    .agreementBtn {
        text-align: right;
        padding-top: 56px;
        .saveBtn {
            width: 184px;
            height: 36px;
            border-radius: 1px;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            background-color: #e6e6e6;
        }
    }
`;
const GlobalStyle = createGlobalStyle `
    .agreementModal {
        .ant-modal-content {
            width: 800px;
            border-radius: 0;
        }
        .ant-modal-close, .ant-modal-header {
            display: none;
        }
        .ant-modal-body {
            padding: 60px 60px 50px;
        }
        .modalHeader {
            width: 100%;
            text-align: center;
            padding-bottom: 24px;
            border-bottom: 1px solid #e6e6e6;
            .headerTit {
                font-size: 24px;
                font-weight: 500;
                color: #32363e;
                line-height: 28px;
            }
            .headerPoint {
                font-size: 14px;
                line-height: 20px;
                color: #76787e;
                padding-top: 12px;
            }
        }
        .modalContent {
            margin-top: 24px;
            width: 100%;
            height: 412px;
            overflow: auto;
            font-size: 14px;
        }
        .modalBtn {
            text-align: center;
            padding-top: 48px;
            .cfmBtn {
                width: 200px;
                height: 40px;
                border-radius: 1px;
                color: #fff;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
`;
export { WrapperAgreementCmp, GlobalStyle };
//# sourceMappingURL=styled.js.map