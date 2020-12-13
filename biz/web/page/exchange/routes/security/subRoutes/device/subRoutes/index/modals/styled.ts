import styled from 'styled-components';

const ConfirmModalWrapped = styled.div`
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
      margin-top:5px;
      .des{
        color:#92949A;
      }
    }
    .btnWrapper{
      margin-top:40px;
      .btn{
        width:160px;
        font-size:14px;
        color:#92949A;
        &.sp{
          color:#E05A66;
          margin-left:20px;
          border:1px #E05A66 solid;
        }
      }
    }
`

const WrapperEmailCmp = styled.div`
  width: 100%;
  background-color: #ffffff;
  .wrapper{
      width: 518px;
      height: 432px;
      background:rgba(255,255,255,1);
      color:#191E26;
      /* box-shadow:0 2px 8px 0 rgba(230,230,230,0.8); */
      .origin-mail{
          width:96px;
          height:96px;
      }
      .title {
          font-size: 28px;
          color: #191E26;
      }
      .link{
        color:#00A0D2;
      }
  }
`

export {
  ConfirmModalWrapped,
  WrapperEmailCmp
}