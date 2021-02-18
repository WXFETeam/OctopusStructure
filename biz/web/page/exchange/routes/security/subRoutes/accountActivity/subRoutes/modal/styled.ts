import styled from 'styled-components';

const WrapperModalCmp = styled.div`
    
        .title {      
            font-size:18px;
            font-weight:500;
            color:rgba(50,54,62,1);
            margin-top: 50px;
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
                 margin-bottom: 40px;
             }
         }
      
`;

const WrapperRemoveModalCmp = styled.div`
    
    .tips {
        font-size:18px;
        font-weight:500;
        color:rgba(50, 54, 62, 1);
        text-align: center;
        margin: 36px 0 60px 0;
    }

    .btn {
       
        Button {
            width: 130px;
            margin-bottom: 36px;
        }
      
`;


export {
    WrapperModalCmp,
    WrapperRemoveModalCmp
    
}