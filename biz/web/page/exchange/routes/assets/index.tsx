import * as React from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedAssetsCmp } from './styled';
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import NavBar from './components/navBar';

type AssetsProps = {
    routes: any,
    match: any
}

export default class Assets extends React.Component<AssetsProps, {}> {
    constructor(props: AssetsProps) {
        super(props);
    }

    render() {
        return (
            <WrappedAssetsCmp>
                <UserCenterLayout activeItem="assets" />
                <NavBar />
                {renderRoutes(this.props.routes, this.props.match.url)}
            </WrappedAssetsCmp>
        )
    }
}