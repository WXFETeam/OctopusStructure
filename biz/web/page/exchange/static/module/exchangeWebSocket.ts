"use strict";
import { message } from 'antd';
var events = require('events');
let clientEmitter: any;
let initEmitter = function() {
    if (!clientEmitter) {
        clientEmitter = new events.EventEmitter();
    }
    return clientEmitter;
}
export default {
    ws: null,
    emitter: initEmitter(),
    // ws连接中状态
    wsConnectStatus: 'init',
    // 需要订阅的列表
    subscribeList: [],
    // 已经订阅的列表
    hasSubscribe: [],
    getEmitter() {
        return this.emitter;
    },

    /**
     * ws收到推送消息
     * @param topic
     * @param receiveData
     */
    ws_msgReceive(topic, receiveData, totalReceive) {
        if (receiveData && topic) {
            let topics = constants.ws.topics;
            for (let key in topics) {
                if (topic == topics[key]) {
                    this.emitter.emit(key, receiveData, totalReceive);
                    break;
                }
            }
        }
    },

    /**
     * ws是否连接
     * @returns {boolean}
     */
    ws_stateOnConnect() {
        let isConnect = false;
        if (this.ws !== null && this.ws.isConnected()) {
            isConnect = true;
        }
        return isConnect;
    },

    ws_Connect() {
        //注册消息接收方法
        this.ws.register(this.ws_msgReceive.bind(this));
    },

    // ws开始建立连接
    ws_onMsgConnect() {
        if (this.wsConnectStatus != 'isConnecting') {
            this.wsConnectStatus = 'isConnecting';
            this.ws = new wsClient();
            this.ws.setOnclose(this.ws_msgReconnect.bind(this));
            this.ws.setOnError(this.ws_msgReconnect.bind(this));
            this.ws.setOnConnect(this.ws_Connect.bind(this));
            this.ws.connect(constants.ws.wsUrl, '', () => {
                this.wsConnectStatus = 'isConnected'; // ws连接成功
                // token没过期需要auth
                // let token = common.getLS("token");
                // let now = Date.now() / 1000;
                // if (token && JSON.parse(atob(token.split('.')[1])).exp > now) {
                //     this.ws.auth(common.getLS("token"));
                // }
                // 重新订阅
                let subscribeList = this.subscribeList;
                if (subscribeList && subscribeList.length > 0) {
                    for (let i = 0; i < subscribeList.length; i++) {
                        this.addTopicSubscribe(subscribeList[i])
                    }
                    subscribeList = [];
                }
                // 重连成功
                if (this.reconnectCount > 0) {
                    this.emitter.removeAllListeners();
                }
                // 重连次数从0开始，重新计数
                this.reconnectCount = 0;
            });
        }
    },

    // 订阅主题
    addTopicSubscribe(info: any) {
        if (this.ws != null && this.ws.isConnected()) {
            this.ws.subscribe(info.topicName, info.params);
            // 监听topic
            let index = -1;
            for(let i = 0; i < this.hasSubscribe.length; i++) {
                if (this.hasSubscribe[i].topicName == info.topicName) {
                    this.hasSubscribe[i] = info;
                    index = i;
                    break;
                }
            }
            if (index < 0) {
                this.hasSubscribe.push(info);
                this.emitter.on(info.topicName.toUpperCase(), info.emitCB);
            }
        } else {
            this.subscribeList.push(info);
            this.ws_onMsgConnect();
        }
    },

    // 取消订阅
    deleteTopicSubscribe(info: any) {
        if (this.ws != null && this.ws.isConnected()) {
            this.ws.unsubscribe(info.topicName, info.params);
            // this.emitter.removeListener(info.topicName.toUpperCase(), info.emitCB);
        }
    },

    // ws关闭
    ws_onMsgClose() {
        if (this.ws !== null && this.ws.isConnected()) {
            let hasSubscribe = this.hasSubscribe;
            for(let i = 0; i < hasSubscribe.length; i++) {
                this.ws.unsubscribe(hasSubscribe[i].topicName, hasSubscribe[i].params)
            }
            this.emitter.removeAllListeners();
            this.ws.disconnect();
            this.hasSubscribe = [];
            this.ws = null;
        }
    },

    // ws重连
    ws_msgReconnect() {
        if (this.ws !== null) {
            this.ws_onMsgClose();
            this.ws = null;
        }
        //断开后隔5s进行重连
        if (this.reconnectCount < constants.ws.wsMaxReconnectCount || constants.ws.wsMaxReconnectCount === -1) {
            setTimeout(() => {
                this.wsConnectStatus = 'init';
                this.reconnectCount = this.reconnectCount + 1;
                this.ws_onMsgConnect();
            }, 5000);
        } else {
            // 超过重连次数
            message.warning('Network connection is not good enough to steadily receive updates of market infomation. Please refresh the page manually.', 30 * 60);
        }
    }
};