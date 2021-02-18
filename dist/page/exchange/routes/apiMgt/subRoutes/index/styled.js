import styled from 'styled-components';
const WrappApiListCmp = styled.div `
    width:100%;
    background:rgba(245,245,245,1);
    .apiListBox{
        width:1260px;
        margin:60px auto 0px;
        padding-bottom:60px;
        .apiListTitle{
            margin-bottom:24px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            color:#262A34;
            font-size:20px;
        }
        .headerBox{
            display:flex;
            align-items:center;
            justify-content:space-between;
            .headerItemTitle{
                color:#32363E;
                font-size:16px;
            }
        }
        .ant-collapse-borderless{
            background-color:rgba(245,245,245,1);
            .ant-collapse-item{
                border-bottom:0 none;
                margin-bottom:20px;
                background:#fff;
                .settingBox{
                    display:none;;
                }
            }
        }
        .ant-collapse-item-active{
            .ant-collapse-header{
                .settingBox{
                    display:block;
                }
            }
            .apiContentBox{
                border-top:1px solid rgba(230,230,230,1);
                padding-top:40px;
                padding-bottom:40px;
                font-size:14px;
                .apiItem{
                    margin-bottom:40px;
                    .popTips{
                        font-size:12px;
                        line-height:17px;
                      
                    }
                }
                .ipList{
                    margin-top:24px;
                    margin-bottom:24px;
                   .ipItem{
                       color:#00A0D2;
                       margin-right:20px;
                       display:inline-block;
                       background:#ECF8FC;
                       font-size:12px;
                       padding:4px 12px;
                   } 
                }
                .apiItemTitle{
                    color:#92949A;
                    margin-bottom:12px;
                }
                .apiItemContent{
                   color:#32363E;
                   .ipInput{
                      .ant-btn-primary{
                        border-color:#d9d9d9;
                        background-color:#fff;
                        border-left:0 none;
                      } 
                   }
                }
            }
        }
    }
    .createApiBox{
        width:100%;
        background:#fff;
        padding:60px 0px;
        .createContent{
            width:1260px;
            margin:0 auto;
            .creatTitle{
                color:#191E26;
                font-size:32px;
                line-height:40px;
                margin-bottom:24px;
            }
            .apiInfo{
                font-size:14px;
                line-height:24px;
                color:#191E26;
                margin-bottom:12px;
            }
            .apiLink{
                color:#00A0D2;
                font-size:14px;
                margin-bottom:52px;
            }
            .apiForm{
                display:flex;
                margin-top:52px;
                .apiInput{
                    width:420px;
                    border:0 none;
                    margin-right:12px;
                    border-bottom:1px solid #e6e6E6;
                    &:focus{
                        box-shadow:none;
                    }
                }
                .creatApiBtn{
                    width:96px;
                    font-size:14px;
                    background:linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
                    box-shadow:0px 8px 20px 0px rgba(58,189,232,0.4);
                    color:#FFFFFF;
                    &:hover,&:focus{
                        background:linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
                        border-color:none;
                        color:#FFFFFF;
                    }
                }
            }
        }
    }
`;
export { WrappApiListCmp };
//# sourceMappingURL=styled.js.map