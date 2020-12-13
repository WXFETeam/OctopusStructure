import styled from 'styled-components';
const calendar = require('@webExchangeImgs/kyc/calendar.png');
const uploadIcon = require('@webExchangeImgs/kyc/uploadIcon.png');
const WrapperCustomerInfoCmp = styled.div `
    width: 100%;
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
    .customerForm {
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
        padding-bottom: 56px;
        float: left;
        width: 100%;
        &.addressTestInfo, &.certFront, &.certBack, &.certTranslate {
            padding-bottom: 24px;
        }
    }
    .formItem {
        width: 400px;
        margin-bottom: 56px;
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
            width: 400px;
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
        .ant-select-selector {
            color: #484c52;
            border: 0;
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
        .ant-picker {
            border: 0;
            box-shadow: none;
            padding: 0;
            width: 400px;
        }
        .ant-picker-input {
            width: 400px;
        }
        .ant-picker-suffix {
            display: none;
        }
        .ant-checkbox-wrapper {
            position: absolute;
            top: 5px;
            right: 0;
            width: 60px;
        }
        .birthDate {
            position: relative;
            border: 0;
            box-shadow: none;
            padding: 0;
            &::after {
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                right: 8px;
                top: 8px;
                background: url(${calendar}) no-repeat;
                background-size: cover;
            }
            .ant-picker-suffix {
                display: none;
            }
        }
        .phone {
            .ant-input-wrapper {
                width: 400px;
                display: flex;
            }
            .ant-input-group-addon {
                width: 132px;
                background-color: transparent;
                border: 0;
                .ant-form-item {
                    margin-bottom: 0;
                }
            }
            .ant-select {
                width: 132px;
                .ant-select-selector {
                    width: 132px;
                    color: #484c52;
                    border-radius: 0;
                    box-shadow: 0px 1px 0px 0px #e6e6e6 !important;
                    padding: 0;
                    text-align: left;
                    .ant-select-selection-item, .ant-select-selection-placeholder {
                        width: 100%;
                    }
                    .ant-select-selection-search {
                        display: none;
                    }
                }
                .ant-select-arrow {
                    right: 24px;
                    &::after {
                        position: absolute;
                        right: -12px;
                        top: -4px;
                        content: '';
                        width: 1px;
                        height: 20px;
                        background-color: #e6e6e6;
                    }
                }
            }
        }
        .addressProofFile {
            width: 100%;
            .point {
                padding-top: 24px;
                color: #76787e;
                font-size: 14px;
                line-height: 24px;
            }
        }
        &.addressItem {
            width: 100%;
            float: left;
            input {
                width: 100%;
            }
        }
        &.uploadItem {
            width: 100%;
            float: left;
        }
    }
    .pointBox {
        color: #76787e;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        padding: 20px 0 20px 29px;
        margin-bottom: 24px;
        background-color: #f9f9fa;
        width: 100%;
        float: left;
        span {
            color: #484c52;
        }
    }
    .customerBtn {
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
export { WrapperCustomerInfoCmp };
//# sourceMappingURL=styled.js.map