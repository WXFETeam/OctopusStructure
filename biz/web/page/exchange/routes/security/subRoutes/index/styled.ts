import styled from 'styled-components';

const WrapperContent = styled.div`
    width:100%;
    background-color:#fff;
    .content{
        width:1260px;
        height:auto;
        margin:0 auto;
        padding-top:33px;
    }
    .title{
        font-size:24px;
        font-weight:bold;
        color:#262A34;
    }
    .grade{
        margin-top:16px;
        .item{
            width:160px;
            .line{
                width:160px;
                height:4px;
                background-color:#ECF8FC;
                &.active{
                    background-color:#00A0D2;
                }
            }
            .text{
                margin-top:28px;
                img{
                    margin-top:-4px;
                }
                span{
                    color:#262A34;
                    font-size:14px;
                    font-weight:400;
                    cursor:pointer;
                    text-decoration:underline;
                    margin-left:12px;
                }
            } 
            &.active{
                .text{
                    .icon{
                        background-color:#F2F9F0;
                        color:#5EB44E;
                    }
                    span{
                        cursor:unset;
                        text-decoration:none;
                    }
                } 
            }
        }
    }
`;

const Content = styled.div`
    width:1260px;
    padding-bottom:148px;
    .block{
        height:260px;
        &.border{
            border:1px #E6E6E6 solid;
            border-radius:1px;
            padding:0 40px;
        }
        .title{
            font-weight:500;
        }
        .twofa{
            width:100%;
            height:80px;
            margin-top:20px;
        }
        p{
            margin-bottom:8px;
        }
        .type{
            font-size:18px;
            color:#262A34;
            font-weight:550;
        }
        .tip{
            font-size:14px;
            color:#76787E;
            font-weight:400;
        }
        .btn{
            width:80px;
            height:30px;
            border-radius:1px;
            border:1px solid #484C52;
            box-shadow:0 2px 1px 0 rgba(0,0,0,0.03);
            font-size:14px;
            font-weight:550;
            color:#484C52;
            /* background:rgba(236,248,252,1); */
            &.active,&:hover{
                color:#00A0D2;
                border:1px solid rgba(0,160,210,1);
            }
        }
        .small-block{
            padding:23px 40px;
            border:1px solid #E6E6E6;
            border-radius:1px;
            .title{
                font-size:18px;
                color:#262A34;
                font-weight:550;
                line-height:32px;
            }
            .ask{
                font-size:14px;
                line-height:20px;
                font-weight:bold;
                color:#484C52;
            }
            .switch{
                width:48px;
                margin-left:40px;
                line-height:0;
                .ant-switch-inner{
                    margin-left:20px;
                }
                &.ant-switch-checked{
                    background-color:#5EB44E;
                    .ant-switch-inner{
                        margin-left:6px;
                    }
                }
            }
            .email{
                font-size:14px;
                color:#383C52;
                font-weight:400;
                line-height:28px;
                margin-right:24px;
            }
        }
        .list{
            margin-top:10px;
            .item{
                height:28px;
                font-size:12px;
                .error{
                    color:#E05A66;
                }
            }
        }
    }
`;

export {
    WrapperContent,
    Content
}