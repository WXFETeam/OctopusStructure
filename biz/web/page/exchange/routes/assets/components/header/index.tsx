import * as React from "react";
import { WrappedHeaderCmp } from './styled';

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
            <WrappedHeaderCmp>
                { title }
            </WrappedHeaderCmp>
        )
    }
}