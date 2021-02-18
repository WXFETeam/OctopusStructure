import * as React from 'react';
import { observable, action } from 'mobx';

class ServerTimeStore {
    @observable currentServerTime: number;

    constructor() {
        this.currentServerTime = new Date().getTime();
    }

    @action changeServerTime(time) {
        this.currentServerTime = time;
    }
}

export default ServerTimeStore;
