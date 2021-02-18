import * as React from 'react';
import { observable, action } from 'mobx';

class IntervalStore {
    @observable currentInterval: string; //当前k线周期

    constructor() {
        this.currentInterval = common.getLS("currentInterval") || '1m';
    }

    @action changeInterval(interval) {
        this.currentInterval = interval;
        common.setLS("currentInterval", interval)
    }
}

export default IntervalStore;
