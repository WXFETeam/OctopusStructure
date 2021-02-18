import * as React from "react";
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import { WrappedApiMgtCmp } from './styled';
import _ from 'lodash';
type ApiMgtProps = {
    routes: any,
    match: any
}

type ApiMgtState = {
    isNeedMenu:boolean
}

export default class ApiMgt extends React.Component<ApiMgtProps, ApiMgtState> {
    constructor(props: ApiMgtProps) {
        super(props);
        this.state = {
            isNeedMenu:true
        }
    }

    componentDidMount(){
        let spPageList = [];
        let url = window.location.pathname;
        let result = _.filter(spPageList,(item)=>{return url.includes(item)});
        if(result.length!=0){
            this.setState({isNeedMenu:false});
        }
    }

    render() {
        
        return (
            <WrappedApiMgtCmp>
                {this.state.isNeedMenu && <UserCenterLayout activeItem="api" />}
                {renderRoutes(this.props.routes, this.props.match.url)}
            </WrappedApiMgtCmp>
        )
    }
}