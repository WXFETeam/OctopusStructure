import * as React from "react";
import { Menu, Dropdown } from 'antd';
import { WrapperActionsCmp } from './styled';

type ActionsState = {
    minDropdownStatus: boolean,
    hourDropdownStatus: boolean,
    currentInterval: string,
    fullscreen: boolean
}

type ActionsProps = {
    [props: string]: any
}

export default class Actions extends React.Component<ActionsProps, ActionsState> {
    constructor(props: ActionsProps) {
        super(props);
        this.state = {
            minDropdownStatus: false,
            hourDropdownStatus: false,
            currentInterval: this.props.currentInterval,
            fullscreen: false
        };
        this.changeInterval = this.changeInterval.bind(this);
    }

    getResolutions() {
        let list = tradingviewConf.resolutions;
        let minList: Array<any> = [];
        let hourList: Array<any> = [];
        let otherList: Array<any> = [];
        let result: Array<any> = [{title: 'Time', value: 'realTime', wsParam: 'realTime'}];
        for(let i = 0; i < list.length; i++) {
            if (list[i].title.indexOf('m') >= 0) {
                minList.push(list[i]);
            } else if (list[i].title.indexOf('H') >= 0) {
                hourList.push(list[i]);
            } else {
                otherList.push(list[i]);
            }
        }
        result.push(minList);
        result.push(hourList);
        result = result.concat(otherList);
        return result;
    }

    getIntervalTitle(val) {
        let list = tradingviewConf.resolutions;
        let title: string = '';
        for (let i = 0; i < list.length; i++) {
            if (list[i].value == val || list[i].wsParam == val) {
                title = list[i].title;
                break;
            }
        }
        return title || 'Time';
    }

    getMenu(item: any, index: any, currentIntervalTitle: any) {
        let isSelected: boolean = false;
        let menu = (
            <Menu>
                {item.map((item2: any, index2: any) => {
                    if (item2.title == currentIntervalTitle) isSelected = true;
                    return <Menu.Item className={item2.title == currentIntervalTitle ? 'selected' : ''} key={index2}>
                        <a onClick={() => {this.changeInterval(item2.wsParam);}}>{item2.title}</a>
                    </Menu.Item>
                })}
            </Menu>
        );
        return <Dropdown className={isSelected ? "action-btn selected" : "action-btn"} overlayClassName="resolutionDropdown" key={index} overlay={menu} onVisibleChange={index == 1 ? this.changeMinDropdown : this.changeHourDropdown}>
            <a>{isSelected ? currentIntervalTitle : item[0].title} <span className={index == 1 ? (this.state.minDropdownStatus ? 'arrow up' : 'arrow down') : (this.state.hourDropdownStatus ? 'arrow up' : 'arrow down')}></span></a>
        </Dropdown>
    }

    changeMinDropdown = minDropdownStatus => {
        this.setState({ minDropdownStatus })
    }

    changeHourDropdown = hourDropdownStatus => {
        this.setState({ hourDropdownStatus })
    }

    changeInterval(val) {
        this.props.changeInterval(val);
        this.setState({
            currentInterval: val
        });
    }

    handleFullScreen() {
        let element = document.getElementById('tradingviewOrDepth');
        let fullscreen = this.state.fullscreen;
        common.fullScreen(fullscreen, element);
    }

    componentDidMount() {
        window.onresize = () => {
            let fullscreen = common.ifFullScreen();
            this.setState({
                fullscreen: fullscreen
            });
        }
    }

    render() {
        const resolutions = this.getResolutions();
        const currentChartType = this.props.currentChartType;
        const fullscreen = this.state.fullscreen;
        let currentIntervalTitle = this.getIntervalTitle(this.state.currentInterval);
        return (
            <WrapperActionsCmp>
                {currentChartType == '0' ? 
                    <div className="leftActions">
                        {resolutions.map((item: any, index: any) => {
                            return (Array.isArray(item) ? 
                                this.getMenu(item, index, currentIntervalTitle) : 
                                <a onClick={() => {this.changeInterval(item.wsParam)}} className={currentIntervalTitle == item.title ? "action-btn selected" : "action-btn"} key={index}>{item.title}</a>)
                        })}
                    </div> : null
                }
                <div className="rightActions">
                    <a onClick={() => {this.props.changeChartType('0');}} className={currentChartType == '0' ? 'action-btn selected' : 'action-btn'}>TradingView</a>
                    <a onClick={() => {this.props.changeChartType('1');}} className={currentChartType == '1' ? 'action-btn selected' : 'action-btn'}>Depth</a>
                    <a onClick={this.handleFullScreen.bind(this)} className={fullscreen ? "action-btn fullscreen hasFull" : "action-btn fullscreen"}><span></span></a>
                </div>
            </WrapperActionsCmp>
        );
    }
}