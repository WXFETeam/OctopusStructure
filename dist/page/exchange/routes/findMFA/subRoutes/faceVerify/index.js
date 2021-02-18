var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row } from 'antd';
import { WrapperFaceVerifyCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let FaceVerify = class FaceVerify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(WrapperFaceVerifyCmp, null,
            React.createElement(Row, { justify: "center", style: { height: '100%', paddingTop: 96 } },
                React.createElement("div", { className: "frame" },
                    React.createElement("div", { className: "title" }, "\u8BF7\u5B8C\u6210\u4EBA\u8138\u8BA4\u8BC1"),
                    React.createElement("div", { className: "frameItem" },
                        React.createElement("p", { className: "tit" }, "\u8BF7\u5728\u624B\u673A\u4E0A\u6253\u5F00Hashkey APP\u901A\u8FC7\u201C\u626B\u4E00\u626B\u201D\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u8FDB\u884C\u4EBA\u8138\u4FE1\u606F\u8BA4\u8BC1\u3002"),
                        React.createElement("div", { className: "contentBox" },
                            React.createElement("div", { className: "leftBox" },
                                React.createElement("img", { src: '' })),
                            React.createElement("div", { className: "rightBox" },
                                React.createElement("p", { className: "content1" }, "\u6CA1\u6709Hashkey\u624B\u673A\u5BA2\u6237\u7AEF\uFF1F"),
                                React.createElement("p", { className: "content2" },
                                    React.createElement("a", null, "\u4E0B\u8F7D>>")),
                                React.createElement("p", { className: "content3" },
                                    "\u201C\u626B\u4E00\u626B\u201D\u4F4D\u4E8EHashkey APP\u4E2D\u201C\u6211\u7684\u201D\u548C\u201C\u9996\u9875\u201D\u9875\u9762\u4E2D\uFF0C",
                                    React.createElement("br", null),
                                    "\u5982\u679C\u60A8\u627E\u4E0D\u5230\u8FD9\u4E2A\u529F\u80FD\uFF0C\u8BF7\u66F4\u65B0\u60A8APP\u81F3\u6700\u65B0\u7248\u672C"))),
                        React.createElement("p", { className: "tip" },
                            "\u65E0\u6CD5\u4F7F\u7528APP\uFF1F",
                            React.createElement("a", null, "\u7535\u8111\u8BA4\u8BC1"),
                            "\uFF08APP\u6682\u672A\u4E0A\u7EBF\uFF0C\u8BF7\u4F7F\u7528\u7535\u8111\u8BA4\u8BC1\uFF09"))))));
    }
};
FaceVerify = __decorate([
    inject('userStore'),
    observer
], FaceVerify);
export default FaceVerify;
//# sourceMappingURL=index.js.map