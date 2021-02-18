import styled from 'styled-components';

const WrappedIdentificationCmp = styled.div`
    width: 1260px;
    margin: 0 auto;
    background-color: #f9f9f9;
    .title {
        padding: 104px 0 48px;
        font-size: 34px;
        color: #191e26;
        line-height: 40px;
    }
    .mainBox {
        width: 100%;
        &.fix {
            .layoutCmp {
                position: fixed;
                top: 0;
            }
            .routeBox {
                margin-left: 330px;
            }
        }
    }
    .routeBox {
        width: 926px;
        padding: 0 40px 90px;
        box-shadow: 0px 2px 6px 0px #e6e6e6;
        background-color: #fff;
    }
`;

export {
    WrappedIdentificationCmp
}