import styled from 'styled-components';
const eyePng = require("@webExchangeImgs/amazon3.png");

const WrapperPhoneCmp = styled.div`
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
        display: inline-table;
        font-size: 14px;
        width:468px;
        box-sizing:border-box;
        min-height:498px;
        padding: 56px 40px 60px;
        background-color: #fff;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
        .ant-select-selection {
            border: 0px;
            border-bottom: 1px solid #e6e6e6;
            border-radius: 0px;
            -webkit-transition: unset;
            transition: unset;
            &:hover {
                border-color: #e6e6e6;
            }
        }
        .ant-select-focused .ant-select-selection,
        .ant-select-selection:focus,
        .ant-select-selection:active {
            -webkit-box-shadow: unset;
            box-shadow: unset;
        }
        .ant-select-arrow{
            right:16px;
        }
        .has-error .ant-select-open .ant-select-selection,
        .has-error .ant-select-focused .ant-select-selection {
            -webkit-box-shadow: unset;
            box-shadow: unset;
        }
        .ant-select-selection__rendered { margin-left: 0px;}
        .has-error .ant-select-selection-selected-value { color: #ff2e49;}
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
        .inputBox {
            position: relative;
            margin: 20px 0 18px;
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
                padding-top: 10px;
                text-align: left;
                .bothSmsTit {
                    font-size: 16px;
                    color:#92949A;
                }
                button {
                    float: right;
                    margin-top: 0;
                }
            }
            .bothGaTit {
                font-size: 16px;
                color:#92949A;
                margin-top: 40px;
                margin-bottom: 0;
            }
        }
        .confirmBtn {
            width: 100%;
            height: 40px;
            margin: 80px 0 20px;
            color: #fff;
            font-weight: 600;
            background-color: #00a0d2;
            border-radius: 1px;
        }
    }
`;

export {
    WrapperPhoneCmp
}