import styled from 'styled-components';
const uploadIcon = require('@webExchangeImgs/kyc/uploadIcon.png');
const CombinedShape = require('@webExchangeImgs/kyc/CombinedShape.png');
const WrapperFinancialInfoCmp = styled.div `
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
    .notice {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 1px;
        background-color: #ecf8fc;
        padding-left: 54px;
        position: relative;
        font-size: 12px;
        color: #00a0d2;
        margin-bottom: 29px;
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 18px;
            height: 18px;
            background: url(${CombinedShape}) no-repeat;
            background-size: cover;
            top: 11px;
            left: 24px;
        }
    }
    .financialForm {
        position: relative;
        width: 844px;
        display: inline-block;
        &::-webkit-scrollbar {
            width: 0;
            display: none;
        }
    }
    .formTit {
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #32363e;
        padding-bottom: 24px;
        float: left;
        width: 100%;
    }
    .formItem {
        width: 100%;
        margin-bottom: 56px;
        float: left;
        &.left, &.right {
            width: 400px;
            input {
                width: 400px;
            }
        }
        &.left {
            float: left;
        }
        &.right {
            float: right;
        }
        .ant-form-item-explain {
            position: absolute;
            bottom: -24px;
        }
        input {
            width: 100%;
            height: 32px;
            line-height: 32px;
            border: none;
            border-radius: 0;
            box-shadow: 0px 1px 0px 0px #e6e6e6;
            color: #484c52;
            padding: 0;
            &::placeholder {
                color: #92949a;
            }
            &:focus {
                box-shadow: 0px 1px 0px 0px #e6e6e6;
            }
        }
        .ant-radio-wrapper {
            margin: 0 0 0 75px;
            &:nth-child(1) {
                margin-left: 0;
            }
        }
        .ant-select-selector {
            color: #484c52;
            border: none;
            border-radius: 0;
            box-shadow: 0px 1px 0px 0px #e6e6e6;
            padding: 0;
            .ant-select-selection-item, .ant-select-selection-placeholder {
                width: 100%;
            }
            .ant-select-selection-search {
                display: none;
            }
        }
        .point {
            padding-top: 24px;
            color: #76787e;
            font-size: 14px;
            line-height: 24px;
            p {
                margin-bottom: 0;
                margin-top: 8px;
                color: #d3302f;
            }
        }
        &.formCheckbox {
            /* height: 80px; */
            .ant-row {
                line-height: 40px;
            }
            .capitalSource, .capitalSourceCountry {
                .ant-row {
                    width: 539.94px;
                }
            }
        }
        .employmentState {
            display: flex;
            height: 32px;
            line-height: 32px;
            input {
                width: 200px;
                display: none;
                &.active {
                    display: block;
                }
            }
        }
    }
    .financialBtn {
        text-align: right;
        padding-top: 24px;
        .saveBtn {
            width: 184px;
            height: 36px;
            border-radius: 1px;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
        }
    }
`;
export { WrapperFinancialInfoCmp };
//# sourceMappingURL=styled.js.map