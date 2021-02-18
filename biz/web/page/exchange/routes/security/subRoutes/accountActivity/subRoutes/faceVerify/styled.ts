import styled from 'styled-components';

const WrapperFaceCmp = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(250,250,250,1);
    .content {
        width: 1260px;
        height: 609px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 6px 0px rgba(230,230,230,0.65);
        .tips {
            font-size: 24px;
            font-weight: 500;
            color: rgba(50, 54, 62, 1);
            display: flex;
            justify-content: center;
            margin: 80px 0;
        }

        .content-left {
            margin-right: 60px;
        }

        .content-right {
            .tips-right {
                font-size: 18px;
                color: rgba(50, 54, 62, 1);
                font-weight:400;
                margin-bottom: 12px;
            }
            .intro {
                font-size: 14px;
                font-weight: 400;
                color: rgba(72, 76, 82, 1);
                margin-top: 12px;

            }
        }

        .unUse {
            margin-top: 81px;
            font-size: 14px;
            font-weight: 400;
            color: #92949A;
        }

        .btn {
            margin-top: 40px;
            
        }
    }
    .title {
        font-size: 24px;
        font-weight: 500;
        color: rgba(50, 54, 62, 1);
        margin: 96px 0 48px 0;
    }



`;

export {
    WrapperFaceCmp
}