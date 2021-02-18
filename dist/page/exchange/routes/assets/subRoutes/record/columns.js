import React from 'react';
const columns = [
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (value) => (React.createElement("div", null, value))
    }, {
        title: '币对',
        dataIndex: 'currency',
        key: 'currency',
        render: (value) => (React.createElement("div", null, value))
    }, {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        render: (value) => (React.createElement("div", null, value))
    }, {
        title: '数量',
        dataIndex: 'size',
        key: 'size',
        render: (value) => (React.createElement("div", null, value))
    }, {
        title: '时间',
        dataIndex: 'date',
        key: 'date',
        render: (value) => (React.createElement("div", null, value))
    }
];
export default columns;
//# sourceMappingURL=columns.js.map