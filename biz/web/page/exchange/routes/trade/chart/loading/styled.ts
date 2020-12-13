import styled, { createGlobalStyle } from 'styled-components';

const LoadingWrapper = styled.div`
    position: absolute;
    z-index: 150;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    background: transparent;
    visibility: visible;
    &.hide {
        visibility: hidden;
    }
    .loading-spinner {
        position: absolute;
        width: 0;
        z-index: 20000;
        left: 50%;
        top: 50%;
        .spinner-item {
            position: absolute;
            top: -1px;
            opacity: 0;
            animation: opacity-60-0-0-17 0.666667s linear infinite;
            .spinner-dot {
                position: absolute;
                width: 3px;
                height: 3px;
                background: #0246D2;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
                transform-origin: left center 0px;
                border-radius: 1px;
            }
            &.item-0 {
                animation-name: opacity-60-0-0-17;
                .spinner-dot {
                    transform: rotate(0deg) translate(30px, 0px);
                }
            }
            &.item-1 {
                animation-name: opacity-60-0-1-17;
                .spinner-dot {
                    transform: rotate(21deg) translate(30px, 0px);
                }
            }
            &.item-2 {
                animation-name: opacity-60-0-2-17;
                .spinner-dot {
                    transform: rotate(42deg) translate(30px, 0px);
                }
            }
            &.item-3 {
                animation-name: opacity-60-0-3-17;
                .spinner-dot {
                    transform: rotate(63deg) translate(30px, 0px);
                }
            }
            &.item-4 {
                animation-name: opacity-60-0-4-17;
                .spinner-dot {
                    transform: rotate(84deg) translate(30px, 0px);
                }
            }
            &.item-5 {
                animation-name: opacity-60-0-5-17;
                .spinner-dot {
                    transform: rotate(105deg) translate(30px, 0px);
                }
            }
            &.item-6 {
                animation-name: opacity-60-0-6-17;
                .spinner-dot {
                    transform: rotate(127deg) translate(30px, 0px);
                }
            }
            &.item-7 {
                animation-name: opacity-60-0-7-17;
                .spinner-dot {
                    transform: rotate(148deg) translate(30px, 0px);
                }
            }
            &.item-8 {
                animation-name: opacity-60-0-8-17;
                .spinner-dot {
                    transform: rotate(169deg) translate(30px, 0px);
                }
            }
            &.item-9 {
                animation-name: opacity-60-0-9-17;
                .spinner-dot {
                    transform: rotate(190deg) translate(30px, 0px);
                }
            }
            &.item-10 {
                animation-name: opacity-60-0-10-17;
                .spinner-dot {
                    transform: rotate(211deg) translate(30px, 0px);
                }
            }
            &.item-11 {
                animation-name: opacity-60-0-11-17;
                .spinner-dot {
                    transform: rotate(232deg) translate(30px, 0px);
                }
            }
            &.item-12 {
                animation-name: opacity-60-0-12-17;
                .spinner-dot {
                    transform: rotate(254deg) translate(30px, 0px);
                }
            }
            &.item-13 {
                animation-name: opacity-60-0-13-17;
                .spinner-dot {
                    transform: rotate(275deg) translate(30px, 0px);
                }
            }
            &.item-14 {
                animation-name: opacity-60-0-14-17;
                .spinner-dot {
                    transform: rotate(296deg) translate(30px, 0px);
                }
            }
            &.item-15 {
                animation-name: opacity-60-0-15-17;
                .spinner-dot {
                    transform: rotate(317deg) translate(30px, 0px);
                }
            }
            &.item-16 {
                animation-name: opacity-60-0-16-17;
                .spinner-dot {
                    transform: rotate(338deg) translate(30px, 0px);
                }
            }
        }
        
    }
`;

var GlobalStyle = createGlobalStyle`
    @keyframes opacity-60-0-0-17 {
        0% {opacity: 0;}
        0.01% {opacity: 0;}
        0.02% {opacity: 1;}
        60.01% {opacity: 0;}
        100% {opacity: 0;}
    }
    @keyframes opacity-60-0-1-17 {
        0% {opacity: 0;}
        5.89235% {opacity: 0;}
        5.90235% {opacity: 1;}
        65.8924% {opacity: 0;}
        100% {opacity: 0;}
    }
    @keyframes opacity-60-0-2-17 {
        0% {opacity: 0;}
        11.7747% {opacity: 0;}
        11.7847% {opacity: 1;}
        71.7747% {opacity: 0;}
        100% {opacity: 0;}
    }
    @keyframes opacity-60-0-3-17 {
        0% {opacity: 0;}
        17.6571% {opacity: 0;}
        17.6671% {opacity: 1;}
        77.6571% {opacity: 0;}
        100% {opacity: 0;}
    }
    @keyframes opacity-60-0-4-17 {
        0% {opacity: 0;}
        23.5394% {opacity: 0;}
        23.5494% {opacity: 1;}
        83.5394% {opacity: 0;}
        100% {opacity: 0;}
    }
    @keyframes opacity-60-0-5-17 {
        0% {opacity: 0;}
        29.4218% {opacity: 0;}
        29.4318% {opacity: 1;}
        89.4218% {opacity: 0;}
        100% {opacity: 0;}
    }
    @keyframes opacity-60-0-6-17 {
        0% {opacity: 0;}
        35.3041% {opacity: 0;}
        35.3141% {opacity: 1;}
        95.3041% {opacity: 0;}
        100% {opacity: 0;}
    }
    @keyframes opacity-60-0-7-17 {
        0% {opacity: 0.0197745;}
        41.1865% {opacity: 0;}
        41.1965% {opacity: 1;}
        1.18647% {opacity: 0;}
        100% {opacity: 0.0197745;}
    }
    @keyframes opacity-60-0-8-17 {
        0% {opacity: 0.117814;}
        47.0688% {opacity: 0;}
        47.0788% {opacity: 1;}
        7.06882% {opacity: 0;}
        100% {opacity: 0.117814;}
    }
    @keyframes opacity-60-0-9-17 {
        0% {opacity: 0.215853;}
        52.9512% {opacity: 0;}
        52.9612% {opacity: 1;}
        12.9512% {opacity: 0;}
        100% {opacity: 0.215853;}
    }
    @keyframes opacity-60-0-10-17 {
        0% {opacity: 0.313892;}
        58.8335% {opacity: 0;}
        58.8435% {opacity: 1;}
        18.8335% {opacity: 0;}
        100% {opacity: 0.313892;}
    }
    @keyframes opacity-60-0-11-17 {
        0% {opacity: 0.411931;}
        64.7159% {opacity: 0;}
        64.7259% {opacity: 1;}
        24.7159% {opacity: 0;}
        100% {opacity: 0.411931;}
    }
    @keyframes opacity-60-0-12-17 {
        0% {opacity: 0.509971;}
        70.5982% {opacity: 0;}
        70.6082% {opacity: 1;}
        30.5982% {opacity: 0;}
        100% {opacity: 0.509971;}
    }
    @keyframes opacity-60-0-13-17 {
        0% {opacity: 0.60801;}
        76.4806% {opacity: 0;}
        76.4906% {opacity: 1;}
        36.4806% {opacity: 0;}
        100% {opacity: 0.60801;}
    }
    @keyframes opacity-60-0-14-17 {
        0% {opacity: 0.706049;}
        82.3629% {opacity: 0;}
        82.3729% {opacity: 1;}
        42.3629% {opacity: 0;}
        100% {opacity: 0.706049;}
    }
    @keyframes opacity-60-0-15-17 {
        0% {opacity: 0.804088;}
        88.2453% {opacity: 0;}
        88.2553% {opacity: 1;}
        48.2453% {opacity: 0;}
        100% {opacity: 0.804088;}
    }
    @keyframes opacity-60-0-16-17 {
        0% {opacity: 0.902127;}
        94.1276% {opacity: 0;}
        94.1376% {opacity: 1;}
        54.1276% {opacity: 0;}
        100% {opacity: 0.902127;}
    }
`;

export { LoadingWrapper, GlobalStyle };