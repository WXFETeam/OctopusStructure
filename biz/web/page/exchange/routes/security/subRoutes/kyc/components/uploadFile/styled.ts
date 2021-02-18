import styled from 'styled-components';

const uploadIcon = require('@webExchangeImgs/kyc/uploadIcon.png');
const uploadFile = require('@webExchangeImgs/kyc/uploadFile.png');

const WrapperUploadFileCmp = styled.div`
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
    .uploadFileForm {
        position: relative;
        width: 844px;
        display: inline-block;
        &::-webkit-scrollbar {
            width: 0;
            display: none;
        }
    }
    .pointBox {
        color: #76787e;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        padding-bottom: 40px;
        span {
            color: #484c52;
        }
    }
    .formTit {
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #32363e;
        padding-bottom: 24px;
        width: 100%;
    }
    .formItem {
        width: 100%;
        margin-bottom: 40px;
        .ant-form-item-explain {
            position: absolute;
            bottom: -24px;
        }
        .hashkeyCompanyMinute {
            position: relative;
            a.upload {
                position: absolute;
                right: 0;
                top: -44px;
                line-height: 20px;
                font-size: 14px;
                color: #00a0d2;
                border-bottom: 1px solid #00a0d2;
                &::before {
                    display: inline-block;
                    content: '';
                    position: absolute;
                    left: -20px;
                    top: 2px;
                    width: 16px;
                    height: 17px;
                    background: url(${uploadFile}) no-repeat;
                    background-size: cover;
                }
            }
        }
    }
    .uploadFileBtn {
        padding-top: 24px;
        font-size: 14px;
        .saveBtn {
            float: right;
            width: 184px;
            height: 36px;
            border-radius: 1px;
            color: #fff;
            font-weight: 500;
        }
    }
`

export {
    WrapperUploadFileCmp
}