import React from 'react';

const columns = [
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',    
        render: (value) => (
            <div>{ value }</div>
    )},{
        title: '币对',
        dataIndex: 'currency',
        key: 'currency',
        render: (value) => (
            <div>{ value }</div>
    )},{
        title: '类型',
        dataIndex: 'type',
        key: 'type',    
        render: (value) => (
            <div>{ value }</div>
    )},{
        title: '数量',
        dataIndex: 'size',
        key: 'size',    
        render: (value) => (
            <div>{ value }</div>
    )},{
        title: '时间',
        dataIndex: 'date',
        key: 'date',    
        render: (value) => (
            <div>{ value }</div>
    )}
]

export default columns;