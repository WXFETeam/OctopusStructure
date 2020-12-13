import styled from 'styled-components';

const uploadIcon = require('@webExchangeImgs/kyc/uploadIcon.png');
const docx = require('@webExchangeImgs/kyc/docx.png');
const xml = require('@webExchangeImgs/kyc/xml.png');
const rar = require('@webExchangeImgs/kyc/rar.png');
const ttf = require('@webExchangeImgs/kyc/ttf.png');
const doc = require('@webExchangeImgs/kyc/doc.png');
const txt = require('@webExchangeImgs/kyc/txt.png');
const pdf = require('@webExchangeImgs/kyc/pdf.png');
const png = require('@webExchangeImgs/kyc/png.png');
const jpeg = require('@webExchangeImgs/kyc/jpeg.png');
const jpg = require('@webExchangeImgs/kyc/jpg.png');
const zip = require('@webExchangeImgs/kyc/zip.png');
const docxRed = require('@webExchangeImgs/kyc/docxRed.png');
const xmlRed = require('@webExchangeImgs/kyc/xmlRed.png');
const rarRed = require('@webExchangeImgs/kyc/rarRed.png');
const ttfRed = require('@webExchangeImgs/kyc/ttfRed.png');
const docRed = require('@webExchangeImgs/kyc/docRed.png');
const txtRed = require('@webExchangeImgs/kyc/txtRed.png');
const pdfRed = require('@webExchangeImgs/kyc/pdfRed.png');
const pngRed = require('@webExchangeImgs/kyc/pngRed.png');
const jpegRed = require('@webExchangeImgs/kyc/jpegRed.png');
const jpgRed = require('@webExchangeImgs/kyc/jpgRed.png');
const zipRed = require('@webExchangeImgs/kyc/zipRed.png');

const WrapperUploadCmp = styled.div`
    .ant-upload-drag {
        background-color: #fff !important;
        border: 1px dashed #92949a;
        .ant-upload-btn {
            padding: 43px 0 !important;
        }
        .uploadText {
            position: relative;
            margin-left: 294px;
            padding-left: 50px;
            text-align: left;
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                content: '';
                width: 30px;
                height: 40px;
                background: url(${uploadIcon}) no-repeat;
                background-size: cover;
            }
            p {
                font-size: 14px;
                line-height: 20px;
                color: #92949a;
                margin-bottom: 0;
            }
            p:nth-child(1) {
                color: #484c52;
                margin-bottom: 6px;
            }
            a {
                color: #00a0d2;
                border-bottom: 1px solid #00a0d2;
            }
        }
    }
    .ant-upload-list {
        .ant-upload-list-item {
            width: 100%;
            height: 88px;
            line-height: 88px;
            background-color: #fff;
            border: 1px solid #e6e6e6;
        }
        .ant-upload-list-item-info {
            padding: 0 24px;
        }
        .ant-upload-list-item-progress {
            width: calc(100% - 80px);
            padding-left: 80px;
            bottom: 20px;
        }
        .ant-upload-text-icon div{
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            left: 24px;
            width: 36px;
            height: 36px;
            background-size: cover;
        }
        .ant-upload-list-item-card-actions  {
            right: 16px;
        }
        .ant-upload-list-item-name {
            position: relative;
            padding-left: 56px;
        }
    }
    .docx {
        width: 37px !important;
        background-image: url(${docx});
    }
    .ant-upload-list-item-error .docx {
        background-image: url(${docxRed});
    }
    .xml {
        background-image: url(${xml});
    }
    .ant-upload-list-item-error .xml {
        background-image: url(${xmlRed});
    }
    .rar {
        width: 37px !important;
        background-image: url(${rar});
    }
    .ant-upload-list-item-error .rar {
        background-image: url(${rarRed});
    }
    .ttf {
        background-image: url(${ttf});
    }
    .ant-upload-list-item-error .ttf {
        background-image: url(${ttfRed});
    }
    .doc {
        width: 37px !important;
        background-image: url(${doc});
    }
    .ant-upload-list-item-error .doc {
        background-image: url(${docRed});
    }
    .txt {
        background-image: url(${txt});
    }
    .ant-upload-list-item-error .txt {
        background-image: url(${txtRed});
    }
    .pdf {
        width: 37px !important;
        background-image: url(${pdf});
    }
    .ant-upload-list-item-error .pdf {
        background-image: url(${pdfRed});
    }
    .png {
        width: 37px !important;
        background-image: url(${png});
    }
    .ant-upload-list-item-error .png {
        background-image: url(${pngRed});
    }
    .jpeg {
        background-image: url(${jpeg});
    }
    .ant-upload-list-item-error .jpeg {
        background-image: url(${jpegRed});
    }
    .jpg {
        background-image: url(${jpg});
    }
    .ant-upload-list-item-error .jpg {
        background-image: url(${jpgRed});
    }
    .zip {
        background-image: url(${zip});
    }
    .ant-upload-list-item-error .zip {
        background-image: url(${zipRed});
    }
`

export {
    WrapperUploadCmp
}