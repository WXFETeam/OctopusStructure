import styled from 'styled-components';

const WrapperRiskCmp = styled.div`
    width: 100%;
    height: 100%;
    color: #191e26;
    .title {
        padding: 84px 0 46px;
        font-size: 28px;
        line-height: 40px;
        text-align: center;
    }
    .contentWrapper {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        padding-bottom: 46px;
    }
    .btnWrapper {
        width: 200px;
        height: 40px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border-radius: 1px;
        box-shadow: 0px 8px 20px 0px rgba(58, 189, 232, 0.4);
    }
`;

const WrapperStartCmp = styled.div`
    width: 1260px;
    margin: 0 auto;
    .formBox {
        overflow: auto;
        padding: 60px 30px;
        max-height: 1215px;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        &::-webkit-scrollbar {
            width: 0;
            display: none;
        }
        .radioBox {
            .radioTit {
                font-size: 16px;
                font-weight: 500;
                line-height: 20px;
                color: #262a34;
                padding-bottom: 15px;
            }
            .ant-radio-group {
                width: 100%;
                white-space: normal;
            }
            .radioItem {
                width: 100%;
                font-size: 14px;
                line-height: 22px;
                color: #32363e;
                margin-bottom: 12px;
            }
        }
    }
    .btns {
        padding-top: 60px;
        .submit, .reset {
            width: 200px;
            height: 40px;
            border-radius: 1px;
            font-size: 14px;
            font-weight: 600;
        }
        .submit {
            color: #fff;
            margin-right: 40px;
        }
        .reset {
            border: 1px solid #00a0d2;
            color: #00a0d2;
        }
    }
`;

const WrapperResultCmp = styled.div`
    .result {
        .firstLine {
            width: 100%;
            span {
                font-size: 24px;
                font-weight: 600;
                color: #00a0d2;
            }
        }
        .centerBtn {
            width: 240px;
            height: 40px;
            border: 1px solid #00a0d2;
            border-radius: 1px;
            color: #00a0d2;
            font-size: 14px;
            font-weight: 600;
        }
        a {
            padding-top: 42px;
            font-size: 14px;
            color: #262a34;
            border-bottom: 1px solid #262a34;
        }
        .confirmBtn {
            width: 200px;
            height: 40px;
            border-radius: 1px;
            box-shadow: 0px 8px 20px 0px rgba(58, 189, 232, 0.4);
            color: #fff;
            font-size: 14px;
            font-weight: 600;
        }
    }
`;

export {
    WrapperRiskCmp,
    WrapperStartCmp,
    WrapperResultCmp
}