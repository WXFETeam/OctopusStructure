import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperIndexCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

type IndexProps = {
    userStore?: any
}

type IndexState = {
}

@inject('userStore')
@observer
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
    }

    render() {
        return (
            <WrapperIndexCmp>
                
            </WrapperIndexCmp> 
        )
    }
}