import styled from 'styled-components';

const WrapperIndexCmp = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 100px;
    background-color: #ffffff;
    .title {
        font-size: 36px;
        color: #262A34;
        padding-bottom: 48px;
    }
    .pwTitle {
        font-size: 18px;
        font-weight: 600;
    }

    .pwIntro {
        font-size: 14px;
        color:rgba(118,120,126,1);
    }
    .downIcon {
        border-left: 2px solid #00A0D2;
        border-bottom: 2px solid #00A0D2;
        height: 10px;
        width: 10px;
        transform: translate(2px, -2px) rotate(-45deg);
        -webkit-transform: translate(2px, -2px) rotate(-45deg);
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        display: inline-block;
        -moz-transform: translate(2px, -2px) rotate(-45deg);
        -ms-transform: translate(2px, -2px) rotate(-45deg);
        -o-transform: translate(2px, -2px) rotate(-45deg);
    }
    .upIcon {
        border-left: 2px solid #00A0D2;
        border-bottom: 2px solid #00A0D2;
        height: 10px;
        width: 10px;
        transform: translate(2px, -4px) rotate(135deg);
        -webkit-transform: translate(2px, -2px) rotate(135deg);
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        display: inline-block;
        -moz-transform: translate(2px, -2px) rotate(135deg);
        -ms-transform: translate(2px, -2px) rotate(135deg);
        -o-transform: translate(2px, -2px) rotate(135deg); 
        position: relative;
        top: 4px;
    }
    .setting {
        
       font-size:14px;
       font-weight:500;
       color:rgba(0,160,210,1);
       margin-top: 24px;
    }

    .ant-slider {
        width: 360px;
    }
    .ant-slider-handle {
        background-color: #00A0D2;
        border: solid 2px #00A0D2;
    }

    .ant-slider:hover .ant-slider-track {
        background-color: #00A0D2;
    }
    .content {
        padding-bottom: 208px;
    }
`;

export {
    WrapperIndexCmp
}