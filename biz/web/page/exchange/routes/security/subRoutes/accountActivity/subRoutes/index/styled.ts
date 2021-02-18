import styled from 'styled-components';

const WrapperActivityRecordCmp = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(250,250,250,1);
    .title {
        font-size: 32px;
        font-weight: 400;
        color: rgba(25, 30, 38, 1);
        text-align: center;
        padding: 110px 0 40px 0;
    }

   .tips {
       font-size: 14px;
       color: #484C52;
       font-weight: 500;
       text-align: center;
       span {
           color: #00A0D2;
       }
   }

   .table {
       width: 1260px;
       height: 680px;
       background: rgba(255, 255, 255, 1);
       margin: 40px 0 60px 0;
       padding: 40px 40px 40px 31px
       .contentTab1 {
               width: 100%;
           .orderCurrentTable {
               width: 100%;
            }
       }
      
   }

   .failed {
       color: #E05A66;
   }

   .pageBox {
       margin-top:25px;
       width:100%;
       text-align:right;
    .ant-pagination-total-text{
        float:left;
    }
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
    WrapperActivityRecordCmp
}