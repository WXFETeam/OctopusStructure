import styled from 'styled-components';
const WrapperIndexCmp = styled.div `
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .title {
        width:100%;
        color: #191e26;
        font-size: 28px;
        margin-bottom: 40px;
        text-align: center;
    }
    .account,.email {
        width:1260px;
        height:232px;
        box-sizing:border-box;
        font-size: 14px;
        padding: 20px 40px;
        background-color: #fff;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
    }
    .email{
        margin-top:20px;
        height:328px;
    }
    .item{
        height:64px;
        line-height:64px;
        box-shadow:0 1px 0 0 rgba(238,238,238,1);
        .firstCol{
            width:229px;
        }
        .secondCol{
            width:871px;
        }
        .btn{
            width:80px;
        }
        &:last-child{
            box-shadow:none;
        }
        &.sp{
            height:72px;
            line-height:72px;
        }
    }
`;
export { WrapperIndexCmp };
//# sourceMappingURL=styled.js.map