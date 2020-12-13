import styled from 'styled-components';
const ModifyModalWrapped = styled.div `
    height:252px;
    padding-left:17px;
    box-sizing:border-box;
    .title{
      padding-top:30px;
      font-size:18px;
      color:#32363E;
      font-weight:bold;
    }
    .ant-modal-close{
      display:none;
    }
    .info{
      color:#484C52;
      font-size:14px;
      margin-top:46px;
      .input{
        border:none;
        border-bottom:1px #E6E6E6 solid;
        color:#92949A;
        box-shadow:none;
        &:focus{
          outline:none;
        }
      }
    }
    .btnWrapper{
      margin-top:40px;
      .btn{
        width:160px;
        font-size:14px;
        color:#92949A;
        &.sp{
          color:#00A0D2;
          margin-left:20px;
          border:1px #00A0D2 solid;
        }
      }
    }
`;
export { ModifyModalWrapped };
//# sourceMappingURL=styled.js.map