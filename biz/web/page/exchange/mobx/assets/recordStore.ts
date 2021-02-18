import * as React from 'react';
import { observable, action, computed } from 'mobx';

class recordStore {
    @observable rechargeRecordList: Array<Object>; // 充值记录
    @observable withdrawRecordList: Array<Object>; // 体现记录

    constructor() {
        this.rechargeRecordList = [];
        this.withdrawRecordList = [];
    }

    //更新充值记录
    @action.bound updateRechargeRecord(data) {
        this.rechargeRecordList = data;
    }

    //更新充值记录
    @action.bound updateWithdrawRecord(data) {
        this.withdrawRecordList = data;
    }
}

export default recordStore;
