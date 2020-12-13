import styled from 'styled-components';
const eyePng = require("@webExchangeImgs/amazon3.png");
const WrapperGACmp = styled.div `
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
    .frame {
        width:1260px;
        min-height:560px;
        box-sizing:border-box;
        font-size: 14px;
        padding: 80px 165px 60px;
        background-color: #fff;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
        .ant-input {
            border: 0px;
            border-bottom: 1px solid #e6e6e6;
            border-radius: 0px;
            padding: 0px;
            -webkit-transition: unset;
            transition: unset;
            &:focus {
                -webkit-box-shadow: unset;
                box-shadow: unset;
                /* border-bottom: 1px solid #00a0d2; */
            }
        }
        .phoneWrapper{
            display:flex;
            margin-bottom:40px;
            position:relative;
            .verticalLine{
                width:1px;
                height:24px;
                background-color:rgb(230,230,230);
                position:absolute;
                left:160px;
                top:3px;
            }
            .country{
                width:261px;
            }
            .phone{
                padding-left:20px;
            }
            
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
                margin-left: 19px;
                &.firstCol {
                    margin-left: 0px;
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
        .sendBox {
            color: #191e26;
            text-align: center;
            button {
                border: 1px solid #00a0d2;
                border-radius: 1px;
                background-color: #fff;
                color: #00a0d2;
                width: 128px;
                height: 28px;
                line-height: 28px;
                margin-top: 36px;
            }
        }
        .pointBox {
            color: #92949a;
            a {
                display: inline-block;
                color: #00a0d2;
            }
            .forgetPhone, .forgetGa {
                float: right;
            }
        }
        .sms {}
        .ga {
            p {
                color: #191e26;
                text-align: center;
                margin-bottom: 0;
            }
        }
        .content {
            .sendBox {
                padding-top: 20px;
                text-align: left;
                .bothSmsTit {
                    font-size: 20px;
                }
                button {
                    float: right;
                    margin-top: 0;
                }
            }
            .bothGaTit {
                font-size: 20px;
                color: #191e26;
                margin-top: 60px;
                margin-bottom: 0;
            }
        }
    }
`;
const Content = styled.div `
    margin-top:60px;
    .stepTitle{
        width:100%;
        text-align:center;
        font-size:24px;
        color:#32363E;
        font-weight:500;
    }
    .box{
        display:flex;
        margin:60px auto 0;
        width:460px;
        justify-content:space-between;
        .qrCodeInput{
            width:168px;
            color:#32363E;
            font-size:14px;
            font-weight:500;
            text-align:center;
            background-color:rgb(245,245,245);
        }
    }
    .pwdWrapper{
        margin:40px auto 0;
        width:380px;
        position:relative;
        .pwdStatus {
            position: absolute;
            z-index: 2;
            top: 2px;
            right: 5px;
            width: 28px;
            height: 18px;
            -webkit-transform:scale(0.7); 
            -moz-transform:scale(0.7); 
            -o-transform:scale(0.7); 
            cursor: pointer;
            background: url(${eyePng}) no-repeat;
            &.show {
                background-position: -320px -369px;
            }
            &.hide {
                background-position: -320px -339px;
            }
        }
    }
    .smsBox {
        margin:40px auto 0;
        width:380px;
        display:flex;
        justify-content:space-between;
        .smsTip {
            width:100px;
            font-size: 14px;
        }
        button {
            border: 1px solid #00a0d2;
            border-radius: 1px;
            background-color: #fff;
            color: #00a0d2;
            width: 128px;
            height: 28px;
        }
    }
    .forgetPhone {
        margin:24px auto 0;
        width:380px;
        text-align:right;
        span{
            font-size: 14px;
            color: #00A0D2;
            cursor:pointer;
            margin-right:10px;
        }
    }
    .inputBox{
        .ant-col {
            height:40px!important;
            line-height:30px!important;
            margin-left:18px!important;
            &.firstCol {
                margin-left: 0px!important;
            }
        }
    }
    .btnWrapper{
        display:flex;
        justify-content:center;
        .btn {
            width: 280px;
            height: 40px;
            color: #fff;
            background: #00a0d2;
            border-radius: 1px;
            margin: 64px auto 0;
            text-align: center;
        }
    }
    .return{
        text-decoration:underline;
        width:100%;
        text-align:center;
        font-size:14px;
        color:#92949A;
        margin-top:40px;
        cursor:pointer;
    }
`;
export { WrapperGACmp, Content };
//# sourceMappingURL=styled.js.map