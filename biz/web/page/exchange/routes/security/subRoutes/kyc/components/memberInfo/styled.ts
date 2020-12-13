import styled, {createGlobalStyle} from 'styled-components';

const calendar = require('@webExchangeImgs/kyc/calendar.png');
const uploadIcon = require('@webExchangeImgs/kyc/uploadIcon.png');
const CombinedShape = require('@webExchangeImgs/kyc/CombinedShape.png');
const addIcon = require('@webExchangeImgs/kyc/addIcon.png');
const close = require('@webExchangeImgs/kyc/close.png');

const WrapperMemberInfoCmp = styled.div`
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
    .memberTitle {
        font-size: 16px;
        font-weight: 500;
        color: #32363e;
        line-height: 28px;
        padding-bottom: 20px;
    }
    .memberNotice {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 1px;
        background-color: #ecf8fc;
        padding-left: 54px;
        position: relative;
        font-size: 12px;
        color: #00a0d2;
        margin-bottom: 40px;
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
    .ant-collapse {
        border: 0;
        .ant-collapse-item {
            background-color: #fff;
            margin-bottom: 20px;
            border: 1px solid #e6e6e6;
        }
        .ant-collapse-header {
            height: 80px;
            font-size: 18px;
            line-height: 56px !important;
            padding-left: 40px !important;
            padding-right: 40px !important;
            .ant-collapse-arrow {
                right: 40px !important;
            }
            .headerTit {
                span {
                    display: inline-block;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background-color: #ecf8fc;
                    border: 1px solid #52bedf;
                    line-height: 32px;
                    text-align: center;
                    margin-right: 12px;
                }
            }
            .ant-collapse-extra {
                .deleteMember {
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    background-image: url(${close});
                    background-size: cover;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    right: 72px;
                }
            }
        }
        .ant-collapse-content {
            border-top: 0;
            .ant-collapse-content-box {
                padding: 60px 0 40px 0;
                margin: 0 40px;
                border-top: 1px solid #e6e6e6;
            }
        }
    }
    .memberInfoForm {
        position: relative;
        width: 100%;
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
        &.addressTestTit, &.cardFrontTit, &.cardBackTit, &.translateFileTit, &.selfieFileTit {
            padding-bottom: 24px;
        }
    }
    .formItem {
        width: 100%;
        margin-bottom: 56px;
        float: left;
        &.left, &.right {
            width: 360px;
            input {
                width: 360px;
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
            width: 360px;
        }
        .ant-picker-input {
            width: 360px;
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
                width: 360px;
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
        &.pointBox {
            color: #76787e;
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            margin-bottom: 40px;
            span {
                color: #484c52;
            }
        }
    }
    .modifyBtn {
        float: right;
        width: 80px;
        height: 32px;
        border: 1px solid #00a0d2;
        border-radius: 1px;
        font-size: 14px;
        font-weight: 500;
        color: #00a0d2;
    }
    .addMember {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border: 1px dashed #92949a;
        span {
            font-size: 14px;
            font-weight: 500;
            color: #32363e;
            padding-left: 24px;
            position: relative;
            &::before {
                display: inline-block;
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                margin: auto 0;
                width: 16px;
                height: 16px;
                background: url(${addIcon}) no-repeat;
                background-size: cover;
            }
        }
    }
    .memberInfoBtn {
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
`
const GlobalStyle = createGlobalStyle`
    .deleteMemberModal {
        .ant-modal-header {
            border-bottom: none;
        }
        .ant-modal-footer {
            border-top: none;
        }
    }
`;

export {
    WrapperMemberInfoCmp,
    GlobalStyle
}