import * as React from "react";
import { Row, Button } from 'antd';
import { WrapperLoginModalCmp } from './styled';

export default class LoginModal extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <WrapperLoginModalCmp>
                <div className="modalArea">
                    <div className="top"><Button className="blueGlBtn">Register</Button></div>
                    <div className="middle">or</div>
                    <div className="bottom"><a>log in</a></div>
                </div>
            </WrapperLoginModalCmp>
        );
    }
}