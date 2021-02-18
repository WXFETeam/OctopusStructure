import * as React from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from 'antd';
import { WrappedIdentificationCmp } from "./styled";
import InstitutionLayout from "./components/institutionLayout/index";

interface routesProps {
    [props: string]: any,
    from?: string,
    to?: string,
    path?: string,
    exact?: boolean,
    layout?: boolean,
    auth?: boolean,
    routes?: any
}

type IdentificationProps = {
    routes: Array<routesProps>;
    match: any;
    history: any,
}

type IdentificationState = {
}

export default class Identification extends React.Component<IdentificationProps, IdentificationState> {
    constructor(props: IdentificationProps) {
        super(props);
    }

    componentDidMount() {
        window.onscroll = () => {
            let mainCom = document.getElementById('institutionIdentificationBox');
            if (mainCom) {
                let pageYOffset = window.pageYOffset;
                if (pageYOffset >= 390) {
                    mainCom.className = 'ant-row mainBox fix';
                } else {
                    mainCom.className = 'ant-row mainBox'
                }
            }
        }
    }

    render() {
        const layoutProps = {
            match: this.props.match,
            history: this.props.history
        };
        return (
            <WrappedIdentificationCmp>
                <Row justify="center" className="title">
                    企业认证
                </Row>
                <Row id="institutionIdentificationBox" className="mainBox">
                    <InstitutionLayout {...layoutProps} />
                    <div className="routeBox">
                        {renderRoutes(this.props.routes, this.props.match.url)}
                    </div>
                </Row>
            </WrappedIdentificationCmp>
        )
    }
}