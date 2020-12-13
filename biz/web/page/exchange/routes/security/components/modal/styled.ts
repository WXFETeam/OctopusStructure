import styled from 'styled-components';

const WrapperTwoFACmp = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    text-align:center;
    .btnWrapper{
        width:392px;
        margin:0 auto;
        Button{
            width:176px;
            height:56px;
            font-weight:bold;
            font-size:16px;
            border-radius:0;
            padding-left:55px;
        }
        .btn{
            position:relative;
            img{
                position:absolute;
                top:10px;
                left:40px;
                z-index:1;
            }
        }
    }
    .tip{
        color:#00A0D2;
        margin-top:60px;
        cursor:pointer;
    }
    .des{
        text-decoration:underline;
        color:#92949A;
        font-size:16px;
        cursor:pointer;
        margin-bottom:50px;
    }
`;

export {
    WrapperTwoFACmp,
}