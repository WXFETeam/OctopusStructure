import * as React from 'react';
import { observable, action, computed } from 'mobx';
class APIRecordStore{
    @observable apiRecordList:any;//api列表

    constructor() {
        this.apiRecordList = []
    }
    
    @action getapiRecordList(data){
        this.apiRecordList=data
    }
}
export default  APIRecordStore