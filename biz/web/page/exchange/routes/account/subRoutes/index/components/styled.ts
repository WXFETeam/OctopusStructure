import styled from 'styled-components';

const WrappedSubMenuCmp = styled.div`
    .menuWrapper{
        padding-left:242px;
        background-color:rgba(249,249,250,1);
        box-shadow:0px 1px 0px 1px rgba(230,230,230,1);
        .menuItem{
            height:48px;
            margin-right:40px;
            a{
                color:rgb(146,148,154);
                font-size:14px;
                padding:14px 0;
                height:100%;
                line-height:48px;
            }
            &.active a{
                color:rgb(38,42,52);
                border-bottom:3px rgb(38,191,248) solid;
                font-weight:bold;
            }
        }
    }
    
`;

export {
    WrappedSubMenuCmp
}