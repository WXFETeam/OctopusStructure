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
        ajaxLoadingStore.changeStatus(true);
        let token = common.getLS("userInfo") ? common.getLS("userInfo").token : '';
        let headers = (token && config.needToken) ? { "X-JWT": token } : {};
        var instance = axios.create({
            baseURL: host,
            timeout: 50000
        });
        let requestObj = {};
        if (config.method.toUpperCase() == 'GET') {
            requestObj = {
                method: config.method,
                url: apiUrl || config.url,
                params: config.params,
                headers
            };
        }
        else {
            requestObj = {
                method: config.method,
                url: apiUrl,
                data: config.data,
                headers
            };
        }
        if (config.urlName)
            requestObj.url = `${requestObj.url}${config.urlName}`;
        instance.request(requestObj).then((data) => {
            ajaxLoadingStore.changeStatus(false);
            if (config.isFullData) {
                config.callback.call(this, data.data);
            }
            else {
                config.callback.call(this, data.data.data);
            }
        }).catch((error) => {
            ajaxLoadingStore.changeStatus(false);
            if (config.handlerErr) {
                config.callback.call(this, Object.assign({ success: false }, error.response));
            }
            else {
                message.error(error.response.data.errorMsg);
            }
        });
    }
}
var ajaxObj = new Ajax();
export default ajaxObj.ajax;
//# sourceMappingURL=ajax.js.map