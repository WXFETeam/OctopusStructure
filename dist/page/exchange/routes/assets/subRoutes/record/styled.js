import styled from 'styled-components';
const WrappedRecordCmp = styled.div `
    width: 100%;
    min-height: calc(100vh - 246px);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .searchWrapped{
        width: 1268px;
        padding-top: 32px;
        .btn-title{
            display: inline-block;
            margin-right: 24px;
        }
        .ant-radio-group-solid label{
            width: 120px;
            margin-right: 24px;
            text-align: center;
        }
        .ant-radio-button-wrapper-checked{
            background: #27C0F9!important;
            border: 1px solid #27C0F9!important;
        }
        .ant-col:first-child{
            border-right: 1px solid #E6E6E6;
        }
        .ant-col:last-child{
            margin-left: 40px;
        }
    }
    .recordContentWrapped{
        width: 1268px;
        margin-top: 32px;
        padding: 40px;
        border: 1px solid #E6E6E6;
        position: relative;
        .export{
            position: absolute;
            top: 90px;
            right: 40px;
        }
    }
    .recordForm{
        .ant-form-item{
            margin-right: 40px;
        }
    }
    .recordTable{
        .ant-table{
            width: 1188px;
        }
        .ant-pagination{
            li:first-child{
                position: absolute;
                left: 0px;
            }
        }
    }
    .currency{
        .ant-select-selector{
            width: 120px;
        }
    }
    .searchBtn{
        margin-left: 30px;
    }
`;
export { WrappedRecordCmp };
//# sourceMappingURL=styled.js.map