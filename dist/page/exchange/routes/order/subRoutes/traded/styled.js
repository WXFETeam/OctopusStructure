import styled from 'styled-components';
const WrappedOrderTradedCmp = styled.div `
  width: 100%;
  min-height: calc(100vh - 246px);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .orderTradedForm{
    position: relative;
    .ant-row{
      margin-right: 40px;
      &:last-child{
        margin-right: 0px;
      }
      &.date{
        width: 224px;
      }
      &.pairs{
        width: 230px;
        .connect{
          margin-left: 12px;
          margin-right: 12px;
        }
        .ant-select{
          width: 100px;
        }
      }
      &.category{
        width: 120px;
        .ant-select{
          width: 120px;
        }
      }
    }
    .btnGroup{
      display: flex;
      align-items: flex-end;
      .btn{
        font-size: 14px;
        font-weight: 500;
        color: #484C52;
      }
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
`;
export { WrappedOrderTradedCmp };
//# sourceMappingURL=styled.js.map