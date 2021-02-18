import styled from 'styled-components';
const WrapperFaceVerifyCmp = styled.div `
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
        padding: 80px 173px 95px;
        background-color: #fff;
        box-shadow: 0px 0px 12px 0px #d2d4d6;
        .tit {
            font-size: 24px;
            font-weight: 500;
            line-height: 33px;
            color: #32363e;
            margin-bottom: 75px;
        }
        .contentBox {
            display: flex;
            justify-content: center;
        }
        .leftBox {
            width: 124px;
            margin-right: 60px;
            padding: 6px 0;
        }
        .rightBox {
            width: 342px;
        }
        img {
            width: 124px;
            height: 124px;
            background-color: #191e26;
        }
        .content1 {
            font-size: 18px;
            line-height: 28px;
            color: #32363e;
            margin-bottom: 0;
        }
        .content2 {
            font-size: 14px;
            line-height: 28px;
            margin: 12px 0;
            a {
                color: #00a0d2;
                border-bottom: 1px solid #00a0d2;
            }
        }
        .content3 {
            font-size: 14px;
            color: #484c52;
            line-height: 28px;
            margin-bottom: 0;
        }
        .tip {
            color: #92949a;
            line-height: 20px;
            text-align: center;
            margin: 80px 0 0;
            a {
                color: #00a0d2;
            }
        }
    }
`;
export { WrapperFaceVerifyCmp };
//# sourceMappingURL=styled.js.map