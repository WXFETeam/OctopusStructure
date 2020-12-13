import styled from 'styled-components';
const WrapperModalCmp = styled.div `
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 6px 16px;
    .gaIcon {
        width: 32px;
    }
    .loseGA{
        margin-top: 20px;
        text-align: right;
        color: #00a0d2;
        font-size: 14px;
    }
    .inputBox {
        position: relative;
        margin: 40px 0 28px;
        .ant-col {
            height: 48px;
            width: 48px;
            box-shadow: 0px 1px 0px 0px #92949a;
            line-height: 48px;
            text-align: center;
            font-size: 36px;
            font-weight: 500;
            color: #32363e;
            margin-left: 20px;
            &.firstCol {
                margin-left: 0px;
            }
            &.hasInput {
                box-shadow: 0px 1px 0px 0px #00a0d2;
            }
        }
        .input-number {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            border: 0;
            opacity: 0;
        }
    }
    .gaInfo {
        display:flex;
        align-item:center;
        margin-bottom: 30px;
        .gaIcon{
            height:32px;
            margin-right:11px;
        }
        .gaInfoText {
            font-size:14px;
            color:#191E26;
            line-height: 32px;
        }
    }
   
    .center {
        text-align: center;
    }
`;
export { WrapperModalCmp };
//# sourceMappingURL=styled.js.map