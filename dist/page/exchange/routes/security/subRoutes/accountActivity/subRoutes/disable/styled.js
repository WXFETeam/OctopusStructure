import styled from 'styled-components';
const WrapperDisableCmp = styled.div `
    width: 100%;
    height: 100%;
    background:rgba(250,250,250,1);
    .disableBox {
        width: 518px;
        height: 700px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 20px 0px rgba(230,230,230,1);
        margin-top: 110px;
        margin: 110px 0 180px 0px;
        .iconImg  {
            display: flex;
            justify-content: center;
            >div {
                width: 95px;
                height: 95px;
                margin-top: 60px;
                width: 96px;
                height: 96px;
                img {
                    width: 95px;
                    height: 95px;
                }
            }
                 
        }

        .title {
            font-size:28px;
            font-weight:400;
            color:rgba(25,30,38,1);
            margin-top: 30px;
        }

        .content {
            width: 100%;
            padding-left: 40px;
            padding-right: 40px;
            .title {
                font-size:14px;
                font-weight:500;
                color:rgba(25,30,38,1)
            }
            .message {
                font-size:14px;
                font-weight:400;
                color:rgba(38,42,52,1);
                font-weight:400;
                color:rgba(38,42,52,1);
                line-height:28px;
            }
            .tips {
                font-size:14px;
                color: #92949A;
                font-weight:500;
            }
            .confirmBlueBtn {
                width: 100%;
                height: 42px;
                font-size:14px;
                color: #fff;
                margin-top: 40px
                background:linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
               &:hover {
                background: linear-gradient(45deg, rgba(2, 152, 205, 1) 0%, rgba(50, 176, 223, 1) 100%) !important;
            }
            }
        }
        
    }


`;
export { WrapperDisableCmp };
//# sourceMappingURL=styled.js.map