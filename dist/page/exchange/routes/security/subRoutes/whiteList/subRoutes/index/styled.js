import styled from 'styled-components';
const WrapHeaderCmp = styled.div `
    width:100%;
    text-align:center;
    color:#191E26;
    font-size:32px;
    padding-top:110px;
    padding-bottom:58px;
`;
const WrapperIndexCmp = styled.div `
    width: 1260px;
    margin:0 auto 160px;
    padding-top: 100px;
    background-color: #ffffff;
    padding:56px 40px 85px;
    // padding: 50px 200px;
    .orderCurrentTable{
        .status{
            display:flex;
            align-items:center;
            .statusIcon{
                width:6px;
                height:6px;
                border-radius:50%;
                margin-right:10px;
                &.statusPending{
                    background:#00A0D2;
                }
                &.statusError{
                    background:#E05A66;
                }
                &.statusOK{
                    background:#5EB44E;
                }
            }
        }
    }
    .functionBar {
        margin-bottom: 20px;
        .ant-col:last-child{
            text-align: right;
        }
        .whiteListSelect{
           border-bottom:1px solid #E6E6E6;
           .ant-select-selection-item{
               width:100%;
           }
        }
        .whiteBtn{
            width:170px;
            height:36px;
            border-radius:1px;
            background:rgba(236,248,252,1);
            border:0 none;
            box-shadow:0 2px 1px 0 rgba(0,0,0,0.03);
            font-size:14px;
            font-weight:550;
            color:#00A0D2;
            &.active,&:hover{
                color:#00A0D2;
            }
           }
        .switchBox{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            div{
                font-size:14px;
            }
            img{
                   margin-right:22px;
            }
            .ant-switch{
                width:52px;
            }
        }
    }
    .whitePageBox{
        margin-top:25px;
        width:100%;
        text-align:right;
        .ant-pagination-total-text{
            float:left;
        }
    }
    .ant-table-wrapper{
        width: 100%;
    }
`;
const WrapperModalCmp = styled.div `
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 6px 16px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    .emailModal{
         display: flex;
         flex-direction: column;
         align-items: center;
         .emailIcon{
             height:96px;
             margin-bottom:30px;
         }
         .emailOk{
             font-size:28px;
             color:#191E26;
             margin-bottom:32px;
         }
         .resendEmail{
             margin-top:30px;
             width:100%;
             border-top:1px solid #E6E6E6;
             padding-top:29px;
             padding-bottom:38px;
             font-size:14px;
             text-align:center;
             a{
                 color:#00A0D2;
             }

         }
    }
    .ant-tabs-bar{
        border-bottom:1px solid #D2D4D6;
    }
    .SelectStyle{
        width:100%;
        border-bottom:1px solid #E6E6E6;
        margin-bottom:60px;
        .ant-select-selection-item{
            width:100%;
        }
    }
    .modalButtonBox{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:40px;
        button{
            width:160px;
            &:hover,&:active{
                color:#E05A66;
                border:1px solid #E05A66;
            }

        }
    }
    p{
        margin-bottom:0;
    }
    .delTitle {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 24px;
        text-align:left;
    }
    .info{
        text-align:left;
        font-size:14px;
        color:#484C52;
        .infoName{
            color:#92949A;
        }
    }
    .submitBtn{
        width:100%;
        background:linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
        box-shadow:0px 8px 20px 0px rgba(58,189,232,0.4);
        color:#FFFFFF;
        &:hover,&:focus{
            background:linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
            border-color:none;
            color:#FFFFFF;
        }
    }
    .tabinput {
        margin-top: 40px;
        border:0 none;
        border-bottom:1px solid #e6e6e6;
        &:hover,&:focus{
            box-shadow:none;
            border-color:none;
        }
    }
    .ant-tabs-nav .ant-tabs-tab {
       width:200px;
       text-align:center;
       font-size:14px;
        margin-right: 0 !important;
        border:1px solid #D2D4D6;
        color:#484C52;
        padding:8px 0;
    }
    .ant-tabs-nav .ant-tabs-tab-active {
        font-weight: 500;
        background: #ecf8fc;
        border:1px solid #52BEDF;
        color: #52BEDF;
    }
    .ant-tabs-ink-bar{
        height:1px;
        background:#52BEDF;
    }
    .ant-modal-footer .submitBtn {
        width: 400px;
        height: 40px;
        background: linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
        box-shadow: 0px 8px 20px 0px rgba(58,189,232,0.4);
        border-radius: 1px;
        color: #ffffff;
    }
    .gaIcon {
        width: 32px;
    }
    .inputNum {
        width: 48px;
        margin-right: 20px;
        border-radius: 0;
        border-bottom: 1px solid #00a0d2;
        border-top: none;
        border-left: none;
        border-right: none;
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
export { WrapperIndexCmp, WrapperModalCmp, WrapHeaderCmp };
//# sourceMappingURL=styled.js.map