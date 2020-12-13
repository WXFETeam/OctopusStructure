import * as React from "react";
import { Menu, Dropdown } from 'antd';
import { WrapperActionsCmp } from './styled';
export default class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.changeMinDropdown = minDropdownStatus => {
            this.setState({ minDropdownStatus });
        };
        this.changeHourDropdown = hourDropdownStatus => {
            this.setState({ hourDropdownStatus });
        };
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
        let minList = [];
        let hourList = [];
        let otherList = [];
        let result = [{ title: 'Time', value: 'realTime', wsParam: 'realTime' }];
        for (let i = 0; i < list.length; i++) {
            if (list[i].title.indexOf('m') >= 0) {
                minList.push(list[i]);
            }
            else if (list[i].title.indexOf('H') >= 0) {
                hourList.push(list[i]);
            }
            else {
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
        let title = '';
        for (let i = 0; i < list.length; i++) {
            if (list[i].value == val || list[i].wsParam == val) {
                title = list[i].title;
                break;
            }
        }
        return title || 'Time';
    }
    getMenu(item, index, currentIntervalTitle) {
        let isSelected = false;
        let menu = (React.createElement(Menu, null, item.map((item2, index2) => {
            if (item2.title == currentIntervalTitle)
                isSelected = true;
            return React.createElement(Menu.Item, { className: item2.title == currentIntervalTitle ? 'selected' : '', key: index2 },
                React.createElement("a", { onClick: () => { this.changeInterval(item2.wsParam); } }, item2.title));
        })));
        return React.createElement(Dropdown, { className: isSelected ? "action-btn selected" : "action-btn", overlayClassName: "resolutionDropdown", key: index, overlay: menu, onVisibleChange: index == 1 ? this.changeMinDropdown : this.changeHourDropdown },
            React.createElement("a", null,
                isSelected ? currentIntervalTitle : item[0].title,
                " ",
                React.createElement("span", { className: index == 1 ? (this.state.minDropdownStatus ? 'arrow up' : 'arrow down') : (this.state.hourDropdownStatus ? 'arrow up' : 'arrow down') })));
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
        };
    }
    render() {
        const resolutions = this.getResolutions();
        const currentChartType = this.props.currentChartType;
        const fullscreen = this.state.fullscreen;
        let currentIntervalTitle = this.getIntervalTitle(this.state.currentInterval);
        return (React.createElement(WrapperActionsCmp, null,
            currentChartType == '0' ?
                React.createElement("div", { className: "leftActions" }, resolutions.map((item, index) => {
                    return (Array.isArray(item) ?
                        this.getMenu(item, index, currentIntervalTitle) :
                        React.createElement("a", { onClick: () => { this.changeInterval(item.wsParam); }, className: currentIntervalTitle == item.title ? "action-btn selected" : "action-btn", key: index }, item.title));
                })) : null,
            React.createElement("div", { className: "rightActions" },
                React.createElement("a", { onClick: () => { this.props.changeChartType('0'); }, className: currentChartType == '0' ? 'action-btn selected' : 'action-btn' }, "TradingView"),
                React.createElement("a", { onClick: () => { this.props.changeChartType('1'); }, className: currentChartType == '1' ? 'action-btn selected' : 'action-btn' }, "Depth"),
                React.createElement("a", { onClick: this.handleFullScreen.bind(this), className: fullscreen ? "action-btn fullscreen hasFull" : "action-btn fullscreen" },
                    React.createElement("span", null)))));
    }
}
//# sourceMappingURL=actions.js.map