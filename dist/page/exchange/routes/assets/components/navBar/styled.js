import styled from 'styled-components';
const WrappedNavBarCmp = styled.div `
    width: 100%;
    height: 48px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    .navContent {
        min-width: 1260px;
        .navBar {
            padding-left: 0px;
            li {
                position: relative;
                font-size: 14px;
                font-weight: 500;
                color: rgb(118, 120, 126);
                margin-right: 40px;
                list-style: none;
                display: inline-block;
                cursor: pointer;
                height: 48px;
                line-height: 48px;
                color: #92949a;
                &.active, &:hover {
                    color: #262a34;
                    border-bottom: 3px solid #00a0d2;
                }
            }
        }
    }
`;
export { WrappedNavBarCmp };
//# sourceMappingURL=styled.js.map