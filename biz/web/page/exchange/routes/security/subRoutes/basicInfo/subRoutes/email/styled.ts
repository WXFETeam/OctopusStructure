import styled from 'styled-components';

const WrapperIndexCmp = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 0 100px;
    background-color: #ffffff;
    .title {
        font-size: 36px;
        color: #262A34;
    }

    .title-confirm{
        color: #262A34;
    }

    .title-link{
        color: #262A34;
        width:400px;
        height:36px;
        border-radius:26px;
        border:1px solid rgba(230,230,230,1);
        .lock-icon{
            width:11px;
            height:14px;
        }
    }

    .process{
        width:1260px;
        height:564px;
        padding-top:60px;
        box-sizing:border-box;
        box-shadow:0 2px 20px 0 rgba(230,230,230,1);
        .process-title{
            margin:0 auto;
            width:920px;
            height:40px;
            color:rgba(0,160,210,1);
            background:rgba(236,248,252,1);
            .process-icon{
                width:18px;
                height:18px;
            }
        }

        .step-img{
            width:120px;
            height:120px;
        }

        .arrow-img{
            width:10px;
            height:18px;
            margin:51px 39px 0;
        }

        .next-btn{
            width:280px;
            height:40px;
            background:linear-gradient(45deg,rgba(0,160,210,1) 0%,rgba(58,189,232,1) 100%);
            box-shadow:0px 8px 20px 0px rgba(58,189,232,0.4);
            border-radius:1px;
        }

        .forget-btn{
            font-weight:400;
            color:rgba(0,160,210,1);
        }
    }

`;

export {
    WrapperIndexCmp
}