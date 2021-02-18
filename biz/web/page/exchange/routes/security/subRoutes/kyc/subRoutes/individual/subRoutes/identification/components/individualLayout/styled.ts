import styled from 'styled-components';

const rightGrey = require("@webExchangeImgs/kyc/rightGrey.png");
const rightWhite = require("@webExchangeImgs/kyc/rightWhite.png");
const directGrey = require("@webExchangeImgs/kyc/directGrey.png");
const directBlue = require("@webExchangeImgs/kyc/directBlue.png");
const control = require("@webExchangeImgs/kyc/control.png");
const controlActive = require("@webExchangeImgs/kyc/controlActive.png");
const financial = require("@webExchangeImgs/kyc/financial.png");
const financialActive = require("@webExchangeImgs/kyc/financialActive.png");
const agreement = require("@webExchangeImgs/kyc/agreement.png");
const agreementActive = require("@webExchangeImgs/kyc/agreementActive.png");
const other = require("@webExchangeImgs/kyc/other.png");
const otherActive = require("@webExchangeImgs/kyc/otherActive.png");
const submit = require("@webExchangeImgs/kyc/submit.png");
const submitActive = require("@webExchangeImgs/kyc/submitActive.png");

const WrappedIndividualLayoutCmp = styled.div`
    .layoutCmp {
        width: 310px;
        background-color: #fff;
        margin-right: 20px;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
    }
    .navBar {
        padding: 24px 0;
        font-size: 16px;
        .navItem {
            height: 56px;
            line-height: 56px;
            color: #484c52;
            position: relative;
            padding: 0 24px 0 60px;
            &::before {
                position: absolute;
                content: '';
                width: 24px;
                height: 24px;
                background-size: cover;
                top: 0;
                bottom: 0;
                left: 24px;
                margin: auto 0;
            }
            &.active {
                color: #00a0d2;
                background-color: #f9f9f9;
                .navIcon {
                    background-color: #fff;
                }
            }
            .navIcon {
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                right: 24px;
                width: 24px;
                height: 24px;
                background-color: #f9f9f9;
                border-radius: 50%;
                &::after {
                    position: absolute;
                    content: '';
                    width: 14px;
                    height: 10px;
                    background: url(${rightGrey}) no-repeat;
                    background-size: cover;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    margin: auto;
                }
                &.hasInfo {
                    background-color: #00a0d2;
                    &::after {
                        background-image: url(${rightWhite});
                    }
                }
            }
            &.customerInfo {
                &::before {
                    background-image: url(${control});
                }
                &.active::before {
                    background-image: url(${controlActive});
                }
            }
            &.financialInfo {
                &::before {
                    background-image: url(${financial});
                }
                &.active::before {
                    background-image: url(${financialActive});
                }
            }
            &.agreement {
                &::before {
                    background-image: url(${agreement});
                }
                &.active::before {
                    background-image: url(${agreementActive});
                }
            }
            &.otherInfo {
                &::before {
                    background-image: url(${other});
                }
                &.active::before {
                    background-image: url(${otherActive});
                }
            }
            &.submitApplication {
                &::before {
                    background-image: url(${submit});
                }
                &.active::before {
                    background-image: url(${submitActive});
                }
                .navIcon::after {
                    width: 13px;
                    height: 8px;
                    background-image: url(${directGrey});
                }
                &.active .navIcon::after {
                    background-image: url(${directBlue});
                }
            }
        }
    }
`;

export {
    WrappedIndividualLayoutCmp
}