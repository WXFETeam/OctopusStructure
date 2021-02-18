import styled from 'styled-components';
const eyePng = require("@webExchangeImgs/mail/eye.svg");
const eyeClosePng = require("@webExchangeImgs/mail/eye_close.png");
const WrapperIndexCmp = styled.div `
    width: 100%;
    height: 100%;
    padding: 100px 0 100px;
    background-color: #ffffff;
    .title {
        font-size: 28px;
        color: #191E26;
    }
    .wrapper{
        width: 1260px;
        height: 609px;
        background:rgba(255,255,255,1);
        box-shadow:0 2px 8px 0 rgba(230,230,230,0.8);
        .inner-title{
            font-size:24px;
            color:rgba(50,54,62,1);
        }

        .download-btn{
            font-size:14px;
            color: rgba(0,160,210,1);
        }

        .inner-text{
            font-size:14px;
            color:rgba(72,76,82,1);
        }

        .auth-btn{
            font-size:14px;
            color:rgba(146,148,154,1);
            .ant-btn-link{
                color:rgba(0,160,210,1);
                font-size:14px;
            }
        }

        .finish-btn{
            .ant-btn{
                width:200px;
                height:36px;
                border-radius:1px;
                font-size:14px;
                color:rgba(0,160,210,1);
                border:1px solid rgba(0,160,210,1);
            }
        }
    }

`;
export { WrapperIndexCmp };
//# sourceMappingURL=styled.js.map