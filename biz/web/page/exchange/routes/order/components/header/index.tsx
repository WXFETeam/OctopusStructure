import * as React from "react";
import { withRouter } from 'react-router-dom';
import { get, set } from 'lodash';
import { Row, Col } from 'antd';
import { WrappedOrderHeaderCmp } from './styled';


type HeaderProps = {
    title?: any
}

export default class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return (
            <WrappedOrderHeaderCmp>
                { title }
            </WrappedOrderHeaderCmp>
        )
    }
}