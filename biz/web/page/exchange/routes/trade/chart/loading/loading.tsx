import * as React from 'react';
import { LoadingWrapper, GlobalStyle } from './styled';

interface FormProps {
    isReady?: boolean
}

export default class Loading extends React.Component<FormProps, {}> {
    constructor(props: FormProps) {
        super(props);
    }

    render() {
        const dotList = new Array(17);
        for (let i = 0; i < 17; i++) {
            dotList[i] = i;
        }
        let isReady = this.props.isReady;
        return (
            <LoadingWrapper className={isReady ? "hide" : ""}>
                <GlobalStyle />
                <div className="loading-spinner">
                    {dotList.map((item, index) => <div key={index} className={"spinner-item item-" + index}>
                        <div className="spinner-dot"></div>
                    </div>)}
                </div>
            </LoadingWrapper>
        )
    }
}