import * as React from "react";
import { Select } from 'antd';
import { WrapperOrderAging } from './styled';
const { Option } = Select;
export default class OrderAging extends React.Component {
    constructor(props) {
        super(props);
        this.changeOrderAging = (val) => {
        };
        this.state = {
            selectValue: '0'
        };
    }
    render() {
        const orderList = [
            { text: '24 Hours Active', value: '0' },
            { text: '3*24 Hours Active', value: '1' },
            { text: 'Always Active', value: '2' }
        ];
        let { selectValue } = this.state;
        return (React.createElement(WrapperOrderAging, null,
            React.createElement("div", { className: "title" }, "Order aging"),
            React.createElement("div", { className: "selectBox" },
                React.createElement(Select, { dropdownClassName: "orderAgingSelectDropdown", defaultValue: selectValue, onChange: this.changeOrderAging }, orderList.map((item, index) => React.createElement(Option, { key: index, value: item.value }, item.text))))));
    }
}
//# sourceMappingURL=orderAging.js.map