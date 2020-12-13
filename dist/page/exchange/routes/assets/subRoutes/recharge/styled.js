import styled from 'styled-components';
const WrappedRechargeCmp = styled.div `
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
        margin-bottom:32px;
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
        height:434px;
        margin-bottom:216px;
        width:100%;
        border:1px #E6E6E6 solid;
        color:#92949A;
        .leftPart{
            padding:40px;
            .attention{
                padding-top:68px;
                .attentionTitle{
                    font-size:14px;
                    color:#232A34;
                    font-weight:500;
                    line-height:20px;
                    margin-bottom:8px;
                }
                .attentionCol{
                    display:flex;
                    justify-content:flex-start;
                    font-size:14px;
                    color:484C52;
                    .attentiolCircle{
                        display:block;
                        margin-right:12px;
                        margin-top:6px;
                        width:4px;
                        height:4px;
                        background:rgba(72,76,82,1);
                        border-radius:50%;
                    }
                }
                
            }

        }
        .rightPart{
            background-color:#F9F9FA;
            padding:40px;
            box-shadow:-1px 0 0 0 rgba(230,230,230,1);
            .right-title{
                font-size:14px;
                color:#262A34;
                margin-bottom:24px;
            }
            .lookRecord{
                display:flex;
                align-items:center;
                margin-top:60px;
                .lookHref{
                    color:#262A34;
                    margin-left:8px;
                }
            }
            .BTC-address{
                display:flex;
                align-items:center;
                justify-content:space-between;
                .BTC-con{
                    height:112px;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    .address{
                        display:table;
                        background:#fff;
                        padding:10px 16px;
                        color:#27C0F9;
                    }
                }
                .qrcode-box{
                    width:112px;
                    height:112px;
                    background:#fff;
                    padding:8px;
                    border:1px solid rgba(230,230,230,1);
                }
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
                    background:rgba(236,249,254,1);
                    color:#27C0F9;
                    border:1px solid rgba(39,192,249,1);
            
                }
            }
        }
    }
}
`;
export { WrappedRechargeCmp };
//# sourceMappingURL=styled.js.map