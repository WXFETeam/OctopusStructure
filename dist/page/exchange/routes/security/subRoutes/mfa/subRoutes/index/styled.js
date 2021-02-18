import styled from 'styled-components';
const kycOrgImg = require("@webExchangeImgs/userCenter/kyc/kycOrg.png");
const kycPersonalImg = require("@webExchangeImgs/userCenter/kyc/kycPersonal.png");
const kycOrgSelectedImg = require("@webExchangeImgs/userCenter/kyc/kycOrgSelected.png");
const kycPersSelectedImg = require("@webExchangeImgs/userCenter/kyc/kycPersSelected.png");
const WrapperIndexCmp = styled.div `
    width: 100%;
    height: 100%;
    padding-top: 100px;
    background-color: #ffffff;

    .title {
        font-size: 36px;
        line-height: 40px;
        font-weight: 300;
    }

    .reminderWrapper {
        padding-top: 40px;
        margin-bottom: 60px;
    }

    .reminderIcon {
        height: 18px;
        width: 18px;
        margin-right: 12px;
        margin-bottom: 3px;
    }

    .reminder {
        width: 888px;
        height: 40px;
        border-radius: 1px;
        background-color: #ECF8FC;
        color: #00A0D2;
        padding-left: 24px;
        line-height: 40px;
    }

    .infoWrapper {
        width: 888px;
        .infoBox {
            height: 240px;
            width: 420px;
            border: 1px solid #e6e6e6;
            cursor: pointer;
            .infoImg {
                width: 54px;
                height: 64px;
                margin: 50px auto 20px auto;
            }
            &.personal {
                .infoImg {
                    background: url(${kycPersonalImg}) no-repeat;
                }
                &:hover {
                    border: 1px solid #eee;
                    box-shadow: 0 0 15px 3px #e2dddd;
                    .infoImg {
                        background: url(${kycPersSelectedImg}) no-repeat;
                    }
                }
            }
            &.org {
                .infoImg {
                    background: url(${kycOrgImg}) no-repeat;
                }
                &:hover {
                    border: 1px solid #eee;
                    box-shadow: 0 0 15px 3px #e2dddd;
                    .infoImg {
                        background: url(${kycOrgSelectedImg}) no-repeat;
                    }
                }
            }
            .infoTitle {
                font-size: 18px;
                font-weight: 500;
                line-height: 30px;
                margin-bottom: 20px;
            }

            .infoContent {
                font-size: 12px;
                font-weight: 300;
                line-height: 17px;
            }
        }

        .fileTitle {
            margin: 40px 0 20px 0;
            padding-bottom: 10px;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            border-bottom: 1px solid #E6E6E6;
            width: 420px;
        }

        .fileContent {
            color: #92949A;
            font-size: 12px;
            font-weight: 300;
            line-height: 24px;
            margin-bottom: 5px;
        }
    }

    

`;
export { WrapperIndexCmp };
//# sourceMappingURL=styled.js.map