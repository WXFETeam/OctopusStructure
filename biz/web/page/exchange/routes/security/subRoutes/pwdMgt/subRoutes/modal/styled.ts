import styled from 'styled-components';

const WrapperModalCmp = styled.div`
    
        .title {      
            font-size:18px;
            font-weight:500;
            color:rgba(50,54,62,1);
            margin-top: 36px;
         }
     
         .tips {     
           font-size:14px;
           font-weight:500;
           color:rgba(72,76,82,1);
           margin-top: 24px;
         }
         .btn {
             margin-top: 64px;
             Button {
                 width: 130px;
                 margin-bottom: 16px;
             }
         }
      
`;


const WrapperSetTimeModalCmp = styled.div`
.title {      
    font-size:18px;
    font-weight:500;
    color:rgba(50,54,62,1);
    margin-top: 36px;
    margin-left: 17px;
 }

 .tips {     
   font-size:14px;
   font-weight:500;
   color:rgba(72,76,82,1);
   margin-top: 24px;
   margin-bottom: 24px;
   margin-left: 17px;
 }
 .btn {
     margin-top: 64px;
     Button {
         width: 130px;
         margin-bottom: 16px;
     }
 }
  .ant-slider {
    width: 220px;
    margin-left: 17px;
   }
  .ant-slider-handle {
    background-color: #00A0D2;
    border: solid 2px #00A0D2;
  }

  .ant-slider:hover .ant-slider-track {
    background-color: #00A0D2;
  }    
`;


export {
    WrapperModalCmp,
    WrapperSetTimeModalCmp
}