import styled from 'styled-components';

const WrapperChooseVerifyCmp = styled.div`
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .title {
        color: #191e26;
        font-size: 28px;
        margin-bottom: 46px;
        text-align: center;
    }
    .frameItem {
        display: inline-table;
        font-size: 14px;
        padding: 40px 40px 54px;
        background-color: #fff;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
        .ant-checkbox-group {
            width: 100%;
            line-height: 20px;
            padding-bottom: 23px;
            margin-bottom: 20px;
            border-bottom: 1px solid #e6e6e6;
        }
        .ant-checkbox-wrapper {
            color: #191e26 !important;
        }
        .secondR {
            padding-top: 20px;
        }
        .content {
            color: #92949a;
            font-size: 12px;
            line-height: 24px;
            margin-bottom: 34px;
        }
        button {
            width: 380px;
            height: 40px;
            line-height: 40px;
            font-weight: 600;
            color: #fff;
            border-radius: 1px;
        }
    }
`;

export {
    WrapperChooseVerifyCmp
}