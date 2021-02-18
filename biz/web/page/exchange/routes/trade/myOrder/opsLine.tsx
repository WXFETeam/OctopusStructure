import * as React from "react";
import { WrapperOpsLineCmp } from './styled';
import { Row, Col, Checkbox } from 'antd';

type OpsLineProps = {
    type: string;
    changePairs: (hidePairs: any) => void,
    changeTypes?: (type: string) => void,
    dataSource?: Array<Object>
}

type OpsLineState = {
    orderType: string,
    showSelectedType: boolean
}

export default class OpsLine extends React.Component<OpsLineProps, OpsLineState> {
    constructor(props: OpsLineProps) {
        super(props);
        this.state = {
            orderType: "All",
            showSelectedType: false
        }
    }

    goToMore() {

    }

    cancelAll = () => {
        console.log(this.props.dataSource);
    }

    showTypeSelect = (showSelectedType) => {
        this.setState({ showSelectedType })
    }

    changeOrderType = orderType => {
        this.setState({ orderType });
        this.props.changeTypes(orderType);
    }

    render() {
        return (
            <WrapperOpsLineCmp>
                <div className="opsLine">
                    <div className="viewMore" onClick={this.goToMore}>View More &gt;</div>
                    {this.props.type == "openOrders" ?
                        <div className={this.state.showSelectedType ? "cancelOps showSelectedType" : "cancelOps"}>
                            <a className="btn" onClick={this.cancelAll}>Cancel All</a>
                            <span className="verticalLine">|</span>
                            <a className={this.state.showSelectedType ? "select show" : "select"} onMouseEnter={this.showTypeSelect.bind(this, true)} onMouseLeave={this.showTypeSelect.bind(this, false)}>{this.state.orderType}
                                {this.state.showSelectedType ?
                                    <ul className="typeList">
                                        {["All", "Limit", "Market"].map(item =>
                                            <li key={item} className={item == this.state.orderType ? "active" : ""} onClick={this.changeOrderType.bind(this, item)}>{item}</li>
                                        )}
                                    </ul> : null
                                }
                            </a>
                        </div> : null
                    }
                    <div className="hideOther">
                        <Checkbox onChange={this.props.changePairs}>Hide Other Pairs</Checkbox>
                    </div>
                </div>
            </WrapperOpsLineCmp>
        );
    }
}