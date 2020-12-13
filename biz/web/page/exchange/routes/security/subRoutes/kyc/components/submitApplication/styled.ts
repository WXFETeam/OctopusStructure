import styled from 'styled-components';

const WrapperSubmitApplicationCmp = styled.div`
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
    .submitTit {
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #32363e;
        padding-bottom: 24px;
        width: 100%;
    }
    .submitItem {
        width: 100%;
        height: 48px;
        line-height: 48px;
        color: #76787e;
        font-size: 14px;
        border-left: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        &.submitItem0 {
            border-top: 1px solid #e6e6e6;
        }
        .itemLeft {
            padding-left: 40px;
            font-weight: 500;
        }
    }
    .institutionInfo {
        margin-top: 40px;
    }
    .ant-checkbox-wrapper {
        padding-top: 42px;
        font-size: 14px;
        color: #32363e;
    }
    .submitAppBtn {
        text-align: right;
        padding-top: 80px;
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

export {
    WrapperSubmitApplicationCmp
}