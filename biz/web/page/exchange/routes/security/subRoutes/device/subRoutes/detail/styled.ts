import styled from 'styled-components';

const WrappedDeviceCmp = styled.div`
  width: 100%;
  min-height: calc(100vh - 246px);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
      width:100%;
      color: #191e26;
      font-size: 28px;
      margin-bottom: 40px;
      padding-top:100px;
      text-align: center;
  }
  .orderTradedForm{
    position: relative;
    align-items: flex-end;
    .ant-row{
      margin-right: 40px;
      &:last-child{
        margin-right: 0px;
      }
      .ant-calendar-picker-input{
        width: 224px;
      }
      .ant-input-group{
        .connect{
          margin-left: 12px;
          margin-right: 12px;
        }
        .ant-select{
          width: 100px;
        }
      }
      .typeSelected{
        width: 120px;
      }
    }
    .btnGroup{
      display: flex;
      align-items: flex-end;
      .resetBtn{
        margin-right: 12px;
      }
    }
    .export{
      position: absolute;
      bottom: 0px;
      right: 0px;
      font-size: 14px;
      font-weight: 400;
      color: #262A34;
      line-height: 14px;
      cursor: pointer;
      text-decoration: underline;
      .anticon-export{
        margin-right: 8px;
      }
    }
  }
`
const WrappedTableCmp = styled.div`
  width:1260px;
  height:702px;
  overflow:auto;
  box-sizing:border-box;
  font-size: 14px;
  padding: 60px 40px;
  background-color: #fff;
  box-shadow: 0px 2px 20px 0px #e6e6e6;
  .tip{
    padding-bottom:10px;
    color:#92949A;
  }
  .ant-table-thead > tr > th{
      background: rgba(250,250,250,1);
      border-bottom: 0px;
  }
  .ant-table-body{
      .ant-table-thead{
          color: #92949A;
      }
      font-size: 12px;
      font-weight: 500;
      color: #484C52;
  }
  .expandIcon{
      position:relative;
      top:11px;
      left:1130px;
      font-size:12px;
      z-index:1;
    }
    .anticon-close{
      font-size:12px;
      cursor:pointer;
    }
    .paginationWrapper{
      justify-content:flex-end;
      padding-top:24px;
      position:relative;
      .ant-pagination-total-text{
        position:absolute;
        left:0;
      }
      .ant-pagination-item{
        &:hover{
          background-color:#ECF8FC;
          a{
            color:#00A0D2;
          }
        }
      }
      .ant-pagination-item-active,.ant-pagination-item-active:hover{
        background-color:#00A0D2;
        a{
          color:#fff;
        }
      }
    }
`;

export {
  WrappedDeviceCmp,
  WrappedTableCmp,
}