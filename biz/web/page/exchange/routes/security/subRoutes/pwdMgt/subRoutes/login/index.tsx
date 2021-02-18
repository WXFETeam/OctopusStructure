import * as React from "react";
import { Row, Col, Button } from 'antd';
import { observer, inject } from 'mobx-react/index';
import CorrectPwd from '../components/correctPwd'
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
            <CorrectPwd />   
        )
    }
}