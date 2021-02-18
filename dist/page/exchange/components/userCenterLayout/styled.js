import styled from 'styled-components';
const avatarIcon = require("@webExchangeImgs/avatarIcon.png");
const WrappedUserCenterLayoutCmp = styled.div `
    width: 100%;
    height: 142px;
    background: #191e26;
    .navContent {
        min-width: 1260px;
        .account {
            margin-top: 40px;
            font-size: 18px;
            font-weight: 400;
            color: #fff;
            padding-left: 52px;
            background: url(${avatarIcon}) no-repeat;
            background-size: 26px;
        }
        .navBar {
            margin-top: 28px;
            padding-left: 0px;
            li {
                position: relative;
                font-size: 14px;
                font-weight: 500;
                color: rgb(118, 120, 126);
                margin-right: 60px;
                list-style: none;
                display: inline-block;
                cursor: pointer;
                padding: 6px 0 20px 0px;
                &.active {
                    color: rgb(255, 255, 255);
                    &:after {
                        position: absolute;
                        left: 50%;
                        content: '';
                        bottom: 0px;
                        display: inline-block;
                        border-width: 6px;
                        border-style: solid;
                        border-color: transparent transparent #fff transparent;
                        margin-left: -6px;
                    }
                }
                &:hover {
                    color: rgb(255, 255, 255);
                }
            }
        }
    }
`;
export { WrappedUserCenterLayoutCmp };
//# sourceMappingURL=styled.js.map