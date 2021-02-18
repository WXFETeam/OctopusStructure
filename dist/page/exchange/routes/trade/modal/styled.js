import styled from 'styled-components';
const customizeStyleCmpList = ['bgColor', 'textColor', 'registerBtnColor'];
const cmpNS = 'Trade.Modal';
var { bgColor, textColor, registerBtnColor } = getMulThemeProps.themeProps(customizeStyleCmpList, cmpNS);
const WrapperLoginModalCmp = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: ${bgColor};
    .modalArea {
        display: inline-block;
        position: absolute;
        width: 160px;
        height: 86px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        color: ${textColor};
        font-size: 14px;
        text-align: center;
        .top {
            button {
                width: 100%;
                height: 32px;
                border-radius: 1px;
                border: 0;
                font-weight: bold;
                color: ${textColor};
                background-color: ${registerBtnColor};
            }
        }
        .middle {
            margin: 12px 0 8px;
            height: 17px;
            line-height: 17px;
        }
        .bottom {
            a {
                display: inline-block;
                line-height: 17px;
                color: ${textColor};
                border-bottom: 1px solid ${textColor};
            }
        }
    }
`;
export { WrapperLoginModalCmp };
//# sourceMappingURL=styled.js.map