import styled from 'styled-components';

const uploadIcon = require('@webExchangeImgs/kyc/uploadIcon.png');

const WrapperOtherInfoCmp = styled.div`
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
    .otherInfoForm {
        position: relative;
        width: 844px;
    }
    .formTit {
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #32363e;
        padding-bottom: 40px;
        width: 100%;
    }
    .formItem {
        width: 100%;
        margin-bottom: 56px;
        &.uploadItem {
            margin-bottom: 40px;
            textarea {
                width: 100%;
                height: 200px;
                border: 1px solid #e6e6e6;
                border-radius: 0;
                margin-bottom: 24px;
                resize: none;
            }
        }
        .ant-form-item-control {
            .ant-form-explain {
                position: absolute;
            }
        }
    }
    .otherInfoBtn {
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
    WrapperOtherInfoCmp
}