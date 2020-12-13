import styled from 'styled-components';

const WrappedAssetCmp = styled.div`
    width: 100%;
    min-height: calc(100vh - 246px);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WrappedAssetViewCmp = styled.div`
    width: 100%;
    background: #fafafa;
    padding-top: 38px;
    padding-bottom: 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .assetView{
        width: 1268px;
        display: flex;
    }
    .assetViewContent{
        font-size: 18px;
        font-weight: 400;
        color: #76787E;
        flex-basis: 40%;
        &.subAccount{
            border-left: 1px solid rgba(230,230,230,1);
            padding-left: 100px
        }
        .assetViewAmountDetail{
            align-items: flex-end;
            span{
                &:first-child{
                    margin-right: 8px;
                    font-size: 36px;
                    font-weight: 500;
                    color: #262A34;
                    line-height: 46px;
                }
                &:nth-child(2){
                    color: #262A34;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 18px;
                    margin-right: 24px;
                }
                &:last-child{
                    color: #92949A;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: 400;
                }
            }
        }
    }
`;

const WrappedAssetDetailListCmp = styled.div`
    width: 1268px;
    background: #fff;
    .assetSearch{
        width: 100%;
        padding-top: 32px;
        .searchCurrency{
            margin-right: 24px;
        }
    }
    .tableAction{
        span{
            text-decoration: underline;
            &:first-child{
                margin-right: 44px
            }
            &.show{
                cursor: pointer;
            }
            &.ban{
                color: #D2D4D6;
            }
        }
    }
`;

export {
    WrappedAssetCmp,
    WrappedAssetViewCmp,
    WrappedAssetDetailListCmp
}