import styled from 'styled-components';
const WrappedTableCmp = styled.div `
    .ant-table{
        width: 1268px;
        font-size: 12px;
        color: #484C52;
        font-weight: 400;
        line-height: 17px;
        margin-top: 0px;
        thead > tr > th{
            background: rgba(250,250,250,1);
            border-bottom: 0px;
        }
        .ant-table-tbody{
            font-size: 12px;
            font-weight: 500;
            color: #484C52;
        }
    }
`;
const WrappedHorizontalFormCmp = styled.div `
    .ant-form{
        width: 1268px;
        display: flex;
        align-items: flex-end;
        .ant-form-item-control-input-content{
            display: flex;
        }
        .ant-form-item-label{
            label{
                line-height: 14px;
                font-size: 14px;
                color: #92949A;
            }
        }
        
        .ant-input{
            border: none;
            border-bottom: 1px solid #E6E6E6;
            border-radius: 0px;
            &:focus{
                border: none;
                box-shadow: none;
                border-bottom: 1px solid #E6E6E6;
            }
        }

        .ant-select{
            border-bottom: 1px solid #E6E6E6;
            .ant-select-selection-item:after{
                display: none!important;
            }
        }
        
        .ant-picker{
            border-bottom: 1px solid #E6E6E6!important;
        }

        .ant-btn{
            text-align: right;
            font-size: 14px;
            font-weight: 400;
            color: #92949A;
            border-color: #E6E6E6;
        }
    }
    
`;
const WrappedVerticalFormCmp = styled.div `
    .ant-form{
        width: 1268px;
        .ant-form-item-label{
            label{
                line-height: 14px;
                font-size: 14px;
                color: #92949A;
            }
        }
        .ant-input{
            border: none;
            border-bottom: 1px solid #E6E6E6;
            border-radius: 0px;
            &:focus{
                border: none;
                box-shadow: none;
                border-bottom: 1px solid #E6E6E6;
            }
        }
        .ant-select{
            border-bottom: 1px solid #E6E6E6;
            .ant-select-selection-item:after{
                display: none!important;
            }
        }

        .ant-picker{
            border-bottom: 1px solid #E6E6E6!important;
        }

        .ant-btn{
            text-align: right;
            font-size: 14px;
            font-weight: 400;
            color: #92949A;
            border-color: #E6E6E6;
        }
    }
    
`;
export { WrappedTableCmp, WrappedVerticalFormCmp, WrappedHorizontalFormCmp };
//# sourceMappingURL=commonStyled.js.map