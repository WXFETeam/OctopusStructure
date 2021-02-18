import styled from 'styled-components';
const WrappCreateApiCmp = styled.div`
    width:100%;
    padding-top:110px;
    padding-bottom:200px;
    background:rgba(245,245,245,1);
    .apiTitle{
        font-size:32px;
        text-align:center;
        color:rgba(25,30,38,1);
        margin-bottom:48px;
    }
    .content{
        background:#fff;
        width:460px;
        padding:48px 40px;
        margin:0 auto;
        .apiInfo{
            font-size:14px;
            color:rgba(25,30,38,1);
            margin-bottom:12px;
        }
        .apiLink{
            color:#00A0D2;
            font-size:14px;
            display:block;
            margin-bottom:56px;
        }
        .apiInput{
            border:0 none;
            border-bottom:1px solid #e6e6E6;
            &:focus{
                box-shadow:none;
            }
        }
        .creatApiBtn{
            margin-top:40px;
            width:100%;
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
`;
const WrappRecordApiKeyCmp = styled.div`
    width:100%;
    padding-top:110px;
    padding-bottom:200px;
    background:rgba(245,245,245,1);
    .apiTitle{
        font-size:32px;
        text-align:center;
        color:rgba(25,30,38,1);
        margin-bottom:59px;
    }
    .content{
        background:#fff;
        width:1260px;
        padding:0  40px 100px;
        margin:0 auto;
        .apiInfo{
            height:80px;
            line-height:80px;
            font-size:18px;
            color:rgba(25,30,38,1);
            box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
        }
        .barCode{
            // background:#999;
            width:128px;
            height:128px;
            margin:80px auto 40px;
        }
        .recordInfoBox{
            display:flex;
            align-items:center;
            justify-content:center;
            .KeyTitle{
                font-size:16px;
                color:#32363E;
                margin-right:24px;
            }
            .keyContent{
                color:#00A0D2;
                font-size:16px;
                margin-right:25px;
            }
        }
        .apiLink{
            color:#00A0D2;
            font-size:14px;
            display:block;
            text-align:center;
            margin-top:40px;
            margin-bottom:56px;
        }
        .apiInput{
            border:0 none;
            border-bottom:1px solid #e6e6E6;
            &:focus{
                box-shadow:none;
            }
        }
        .creatApiBtn{
            width:280px;
            font-size:14px;
            margin:0 auto;
            margin-top:60px;
            display:block;
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
`;

export{
    WrappCreateApiCmp,
    WrappRecordApiKeyCmp
}