import styled from 'styled-components';
const EmailConfirmCmp = styled.div`
    width: 100%;
    background: rgba(245,245,245,1);
    padding-top:110px;
    .emailModal{
        width:518px;
        padding:40px;
        background:#fff;
        margin:0 auto;
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
`;
export {EmailConfirmCmp}