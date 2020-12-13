import {
    getErrorMessage,
} from './helpers';
import { intervalStore, instrumentStore } from '@webExchangeMobx/index';

var newDate = Date.now();
var HistoryProvider = /** @class */ (function() {
    function HistoryProvider(datafeedUrl, requester) {
        this._datafeedUrl = datafeedUrl;
        this._requester = requester;
    }
    // 过滤数据（webApp.kDataArray是当前交易对全部数据）
    function getKlineData(start, end) {
        let list = JSON.parse(JSON.stringify(webApp.kDataArray));
        let result = list.filter((data) => {
            if (data.time >= start * 1000 && data.time <= ((end * 1000) + (5 * 60 * 1000))) {
                return data;
            }
        });
        return result;
    }
    // 获取更多的历史数据
    function getHistoryData() {
        return new Promise((resolve, reject) => {
            ajax({
                method: "get",
                url: "trade.candleSticks",
                params: {size: 1000, period: intervalStore.currentInterval, instrumentId: instrumentStore.currentInstrument, endTime: webApp.kDataArray[0].time / 1000},
                callback: (data) => {
                    resolve(data);
                }
            })
        })
    }

    HistoryProvider.prototype.getBars = function(symbolInfo, resolution, rangeStartDate, rangeEndDate) {
        var _this = this;
        var requestParams = {
            symbol: symbolInfo.ticker || '',
            resolution: resolution,
            from: rangeStartDate,
            to: rangeEndDate,
        };
        return new Promise(function(resolve, reject) {
            let response = {
                bars: [],
                meta: {
                    noData: true,
                    nextTime: undefined
                }
            }
            let result = getKlineData(rangeStartDate, rangeEndDate);
            if (webApp.isMock) {
                result = webApp.kDataArray;
            }
            if (webApp.kDataArray[0] && webApp.kDataArray[0].time > rangeEndDate * 1000) {
                // 获取更多的历史数据
                getHistoryData().then((data) => {
                    let index = 0;
                    for (let i = (data.length - 1); i >= 0; i--) {
                        if (data[i].time < webApp.kDataArray[0].time) {
                            index = i;
                            break;
                        }
                    }
                    if (data.length > 0 && index > 0) {
                        // 存在历史数据
                        webApp.kDataArray = data.slice(0, index + 1).concat(webApp.kDataArray);
                        response.meta.noData = false;
                        response.meta.nextTime = webApp.kDataArray[0].time;
                        response.bars = webApp.kDataArray;
                    }
                    resolve(response);
                });
            } else {
                // 实时更新数据
                if (result.length > 0) {
                    response.bars = result;
                    response.meta.noData = false;
                    response.meta.nextTime = webApp.kDataArray[0].time;
                }
                resolve(response);
            }
        });
    };
    return HistoryProvider;
}());
export {
    HistoryProvider
};