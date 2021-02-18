import styled from 'styled-components';

const WrapperEnterpriseInfoCmp = styled.div`
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
    .enterpriseInfoForm {
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
        .insType {
            width: 400px;
        }
        &.inputAndCheckbox {
            .ant-checkbox-wrapper {
                padding-top: 12px;
            }
        }
    }
    .enterpriseInfoBtn {
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

export {
    WrapperEnterpriseInfoCmp
}