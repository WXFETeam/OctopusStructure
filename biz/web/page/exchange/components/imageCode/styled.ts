import styled from 'styled-components';

const WrapperImageCodeCmp = styled.div`
    .main-container {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10000;
        &.close {
            display: none;
        }
    }
    .image-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.36);
    }
    .image-code {
        position: absolute;
        user-select: none;
        width: 380px;
        height: 354px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 2;
        background-color: #fff;
        box-shadow: 0px 4px 8px 0px #92949a;
    }
    .image-container {
        width: 339px;
        height: 210px;
        position: relative;
        background-color: #ddd;
        margin: 20px;
    }
    .canvas {
        position: absolute;
        top: 0;
        left: 0;
    }
    .reload-container {
        padding: 14px 20px 13px 0;
        box-shadow: 0px -1px 0px 0px #e6e6e6;
        width: 100%;
        height: 48px;
    }
    .reload-close {
        float: right;
        width: 63px;
    }
    .reload-wrapper {
        display: inline-block;
        width: 18px;
        height: 21px;
        background-size: cover;
        margin-right: 24px;
    }
    .close-wrapper {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-size: cover;
    }
    .reload-tips {
        font-size: 14px;
        color: #666;
    }
    .slider-wrapper {
        position: relative;
        margin: 0 20px 20px;
        width: 340px;
        height: 36px;
    }
    .slider-bar {
        width: 100%;
        height: 100%;
        line-height: 36px;
        font-size: 14px;
        text-align: center;
        color: #484c52;
        background-color: #e6e6e6;
    }
    .slider-button {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 36px;
        color: #76787e;
        line-height: 36px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #d2d4d6;
    }
    .tips-container,
    .tips-container--active {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        align-items: center;
        padding: 10px;
        transform: translate(-50%, -50%);
        transition: all 0.25s;
        background: #fff;
        border-radius: 5px;
        visibility: hidden;
        opacity: 0;
    }
    .tips-container--active {
        visibility: visible;
        opacity: 1;
    }
    .tips-text {
        color: #666;
    }
`;

export {
    WrapperImageCodeCmp
}