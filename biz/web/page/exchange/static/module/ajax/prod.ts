import { message } from 'antd';
import { ajaxLoadingStore, langStore } from '@webMobx/index';
import { timezoneStore } from '@webExchangeMobx/index';
import axios from 'axios';

const { host, apiList } = constants.ajax;

class Ajax {
    ajax(ops: any): any {
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
        if (config.url.match(/^\//)) { config.url = config.url.substr(1, config.url.length) };
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
        })
        let requestObj: any = {};
        if (method.toUpperCase() == 'GET') {
            requestObj = {
                method,
                url: url || config.url,
                params: config.params,
                headers
            }
        } else {
            requestObj = {
                method,
                url: url,
                data: config.data,
                headers
            }
        }
        if (config.urlName) requestObj.url = `${requestObj.url}${config.urlName}`;
        instance.request(requestObj).then((data: any) => {
            ajaxLoadingStore.changeStatus(false);
            config.callback.call(this, config.isFullData ? data.data : data.data.data);
        }).catch((error: any) => {
            ajaxLoadingStore.changeStatus(false);
            if (config.handlerErr) {
                config.callback.call(this, Object.assign({ success: false }, error.response));
            } else {
                message.error(error.response.data.errorMsg);
            }
        })
    }
}

var ajaxObj = new Ajax();
export default ajaxObj.ajax;