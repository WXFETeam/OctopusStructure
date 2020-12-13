import styled from 'styled-components';
const checkIcon = require('@webExchangeImgs/kyc/checkIcon.png');
const rightGrey = require('@webExchangeImgs/kyc/rightGrey.png');
const rightWhite = require('@webExchangeImgs/kyc/rightWhite.png');
const WrapperSubmitSuccessCmp = styled.div `
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding-top: 142px;
    background-color: #fff;
    .auditIcon {
        margin: 0 auto;
        width: 86px;
        height: 96px;
        background: url(${checkIcon}) no-repeat;
        background-size: cover;
    }
    .auditTit {
        color: #192e26;
        font-size: 28px;
        line-height: 40px;
        padding: 40px 0 24px;
    }
    .auditContent {
        line-height: 24px;
        font-size: 14px;
        color: #192e26;
        margin: 0 40px;
        padding-bottom: 60px;
    }
    .auditStatus {
        display: flex;
        justify-content: center;
        .statusItem {
            position: relative;
            width: 230px;
            &.done::after {
                background-color: #5eb44e !important;
            }
            &.not .text {
                color: #92949a;
            }
            &.notLast {
                &::after {
                    position: absolute;
                    display: inline-block;
                    content: '';
                    top: 12px;
                    right: -90px;
                    width: 180px;
                    height: 2px;
                    background-color: #eee;
                }
            }
            .icon {
                position: relative;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-color: #f9f9fa;
                margin: 0 auto;
                &::before {
                    position: absolute;
                    display: inline-block;
                    content: '';
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 12px;
                    height: 8px;
                    background-size: cover;
                    background-image: url(${rightGrey});
                }
                &.done {
                    background-color: #5eb44e;
                    &::before {
                        background-image: url(${rightWhite});
                    }
                }
                &.doing {
                    background-color: #fff;
                    border: 1px solid #5eb44e;
                    &::before {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: #5eb44e;
                        background-image: none;
                    }
                }
            }
            .text {
                font-size: 14px;
                line-height: 22px;
                font-weight: 500;
                color: #262a34;
                padding: 20px 0 8px;
            }
            .date {
                font-size: 14px;
                line-height: 16px;
                color: #92949a;
            }
        }
    }
    .auditLink {
        padding: 80px 0 108px;
        color: #00a0d2;
    }
`;
export { WrapperSubmitSuccessCmp };
//# sourceMappingURL=styled.js.map