import { message } from 'antd';
import { ajaxLoadingStore } from '@webMobx/index';
import axios from 'axios';
const { host, apiList } = constants.ajax;
class Ajax {
    ajax(ops) {
        let config = Object.assign({
            url: "",
            data: "",
            params: "",
            urlName: '',
            method: "get",
            handlerErr: false,
            needToken: true,
            callback: function () { }
        }, ops);
        if (config.url.match(/^\//)) {
            config.url = config.url.substr(1, config.url.length);
        }
        ;
        let apiUrl = apiList;
        config.url.split(".").map(key => apiUrl = apiUrl[key]);
        let method = apiUrl.match(/\s/) ? apiUrl.split(" ")[0] : config.method;
        let url = apiUrl.match(/\s/) ? apiUrl.split(" ")[1] : apiUrl;
        ajaxLoadingStore.changeStatus(true);
        let token = common.getLS("userInfo") ? common.getLS("userInfo").token : '';
        let headers = (token && config.needToken) ? { "X-JWT": token } : {};
        var instance = axios.create({
            baseURL: config.customeHost || host,
            timeout: 50000
        });
        let requestObj = {};
        if (method.toUpperCase() == 'GET') {
            requestObj = {
                method,
                url: url || config.url,
                params: config.params,
                headers
            };
        }
        else {
            requestObj = {
                method,
                url: url,
                data: config.data,
                headers
            };
        }
        if (config.urlName)
            requestObj.url = `${requestObj.url}${config.urlName}`;
        instance.request(requestObj).then((data) => {
            ajaxLoadingStore.changeStatus(false);
            config.callback.call(this, config.isFullData ? data.data : data.data.data);
        }).catch((error) => {
            ajaxLoadingStore.changeStatus(false);
            if (config.handlerErr) {
                config.callback.call(this, Object.assign({ success: false }, error.response));
            }
            else {
                let filePath = config.url.replace(/\./g, "/");
                let resFile = { "errorMsg": "没有找到本地mock文件" };
                try {
                    resFile = require(`@webExchangeMock/data/${filePath}.json`);
                }
                catch (e) { }
                console.log(`${config.url}:`, resFile);
                if (config.url.match(/mockWS/)) {
                    config.callback.call(this, resFile);
                }
                else {
                    message.error("接口通信失败，本次执行本地静态文件返回", 1, () => {
                        config.callback.call(this, resFile);
                    });
                }
            }
        });
    }
}
var ajaxObj = new Ajax();
export default ajaxObj.ajax;
//# sourceMappingURL=dev.js.map