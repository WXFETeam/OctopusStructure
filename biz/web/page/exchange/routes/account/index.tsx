import * as React from "react";
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import { WrappedAccountCmp } from './styled';
import _ from 'lodash';
type AccountProps = {
    routes: any,
    match: any
}

type AccountState = {
    isNeedMenu:boolean
}

export default class Account extends React.Component<AccountProps, AccountState> {
    constructor(props: AccountProps) {
        super(props);
        this.state = {
            isNeedMenu:true
        }
    }

    componentDidMount(){
        let spPageList = ['addAccount'];
        let url = window.location.pathname;
        let result = _.filter(spPageList,(item)=>{return url.includes(item)});
        if(result.length!=0){
            this.setState({isNeedMenu:false});
        }
    }

    render() {
        
        return (
            <WrappedAccountCmp>
                {this.state.isNeedMenu && <UserCenterLayout activeItem="account" />}
                {renderRoutes(this.props.routes, this.props.match.url)}
            </WrappedAccountCmp>
        )
    }
}