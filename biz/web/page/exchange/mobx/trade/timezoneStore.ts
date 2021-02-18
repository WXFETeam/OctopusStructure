import * as React from 'react';
import { observable, action } from 'mobx';

class TimezoneStore {
    @observable currentTimezone: string; //当前时区

    constructor() {
        this.currentTimezone = common.getLS("currentTimezone") ? common.getLS("currentTimezone").toString() : (new Date().getTimezoneOffset()/60 > 0 ? new Date().getTimezoneOffset()/60*-1 + "" : "+" + new Date().getTimezoneOffset()/60*-1)
    }

    //更新已成交订单数据（服务器原始数据）
    @action changeTimezone(timezone) {
        this.currentTimezone = timezone;
        common.setLS("currentTimezone", timezone)
    }
}

export default TimezoneStore;
