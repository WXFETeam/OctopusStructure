import styled from 'styled-components';
const WrappedWithdrawCmp = styled.div `
    width: 100%;
    min-height: calc(100vh - 246px);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tab-wrapper{
        margin-top:32px;
        .ant-tabs-bar{
            border-bottom:0 none;
            padding-bottom:16px;
        }
    }
    .ant-tabs.ant-tabs-card .ant-tabs-card-bar{
        .ant-tabs-tab{
            width:148px ; 
            text-align:center;
            font-size:14px;
            background:#fff;
            border:1px solid rgba(230,230,230,1);
        }
        .ant-tabs-tab-active{
            background:#27C0F9;
            color:#fff;
            border:1px solid #27C0F9;

        }

    } 
    .ant-form-vertical{
        flex-direction: column;
        align-items: baseline;
        .content{
            height:560px;
            width:100%;
            border:1px #E6E6E6 solid;
            color:#92949A;
            .leftPart{
                padding:40px;
                .assetInfo{
                    font-size:14px;
                    margin-bottom:4px;
                }
                .ant-select-selection-item{
                    i{
                        display:inline-block;
                        width:28px;
                        height:28px;
                        border-radius:50%;
                        border:1px rgba(230,230,230,1) solid;
                        text-align:center;
                        img{
                            width:18px;
                            margin-top:-8px;
                        }
                    }
                    .coin{
                        position:relative;
                        top:-3px;
                        margin-left:12px;
                    }
                }
            }
            .rightPart{
                background-color:#F9F9FA;
                box-shadow:-1px 0 0 0 rgba(230,230,230,1);
                padding:40px;
                .right-title{
                    font-size:14px;
                    color:#262A34;
                    margin-bottom:24px;
                }
                .ant-form-item-label label{
                    color:#000;
                    font-weight:bold;
                    margin-bottom:4px;
                }
                .ant-radio-button-wrapper{
                    width:124px;
                    margin-right:18px;
                    &.ant-radio-button-wrapper-checked{
                        color:#27C0F9;
                        background-color:#ECF9FE;
                    }
                }
                .inputWrapper{
                    padding-bottom:10px;
                    border-bottom:1px #E6E6E6 solid;
                    margin-top:30px;
                    .ant-input-affix-wrapper{
                        background-color:#F9F9FA;
                        border:none;
                        box-shadow:none;
                        input{
                            border:none;
                            background-color:#F9F9FA;
                            color:rgba(38,42,52,1);
                            font-weight:bold;
                        }
                    }
                }
                .suffix{
                    a{
                        margin-right:18px;
                    }
                    span{
                        margin-left:20px;
                    }
                }
                .tip{
                    display:flex;
                    justify-content:flex-end;
                    color:#92949A;
                    margin-top:6px;
                    .amount{
                        color:#262A34;
                    }
                }
                .btn{
                    width:100%;
                    height:40px;
                    margin-top:40px;
                    text-align:center;
                    color:#fff;
                    background:linear-gradient(45deg,rgba(57,158,250,1) 0%, rgba(39,192,249,1) 100%);
                    box-shadow:0 8px 20px 0 rgba(39,192,249,0.24);
                    border-radius:1px;
                }
                .tab-right-wrapper{
                    .ant-tabs-bar{
                        border-bottom:0 none;
                    }
                }
                .ant-tabs.ant-tabs-card .ant-tabs-card-bar{
                    .ant-tabs-tab{
                        width:130px; 
                        text-align:center;
                        font-size:14px;
                        background:#fff;
                        border:1px solid rgba(230,230,230,1);
                    }
                    .ant-tabs-tab-active{
                        background:#ECF9FE;
                        color:#27C0F9;
                        border:1px solid #27C0F9;
                    }
                
                }
            }
        }
    }
`;
export { WrappedWithdrawCmp };
//# sourceMappingURL=styled.js.map