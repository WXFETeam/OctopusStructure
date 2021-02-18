import { reverse } from 'lodash';
import { toJS } from 'mobx';
const { highlightDot } = constants.currency;
export default {
    trade: {
        instrumentsListMap(instrumentsList) {
            //处理instrumentList
            var newInstrumentList = [...toJS(instrumentsList)];
            newInstrumentList.map(item => {
                if (item.chgRate > 0) {
                    item.status = 'up';
                }
                else {
                    item.status = 'down';
                }
                item.volume = common.commafy(item.volume);
                item.lastPrice = common.formatDot(item.lastPrice, 6);
                item.lastPriceDollar = common.formatDot(item.lastPriceDollar, 6);
                item.chgRate = common.formatDot(item.chgRate, 3);
            });
            return newInstrumentList;
        },
        getCurrentInstrumentData(instrumentsList, currentInstrument) {
            return this.instrumentsListMap(toJS(instrumentsList)).filter(item => item.symbol == currentInstrument)[0] || {};
        },
        getInstrumentsPanelData({ searchBasicType, searchText, list, favoriteList }) {
            //筛选币对列表
            return list.filter(ins => {
                if (searchBasicType == "favorites") {
                    return favoriteList.indexOf(ins.symbol) > -1;
                }
                else if (searchBasicType == "ALL") {
                    return true;
                }
                else {
                    return ins.currency == searchBasicType;
                }
            }).filter(ins => {
                return searchText ? ins.target.match(new RegExp(searchText, "i")) : true;
            });
        },
        orderBookSellListMap(sellList, curDecimals) {
            //处理orderBook的sellList
            var [...newSellList] = toJS(sellList);
            var leftDotNum = curDecimals - highlightDot; //去除高亮尾数后的小数位数
            //按照用户所选decimals过滤小数点位数
            newSellList.map(item => item.price = common.formatDot(item.price, curDecimals));
            //分解小数点
            reverse(newSellList).map((item, i) => {
                //计算price位数高亮
                if (i == 0) {
                    item.full = true;
                }
                else {
                    let prevPrice = newSellList[i - 1].price;
                    let prevNum = common.formatDot(prevPrice, leftDotNum); //去除小数尾数位数后剩下的小数部分
                    let curPrice = item.price;
                    let curNum = common.formatDot(curPrice, leftDotNum);
                    if (curNum !== prevNum) {
                        //剩余部分相等
                        item.full = true;
                    }
                    else {
                        item.curNum = curNum;
                        item.leftNum = item.price.toString().slice(-2);
                    }
                }
                //拆分amount和total部分中“0”的部分
                item.amountZeroNum = item.amount.toString().split(".")[1] ? constants.currency.amountNum - item.amount.toString().split(".")[1].length : constants.currency.amountNum; //amount中需要补0的个数
                item.totalZeroNum = item.total.toString().split(".")[1] ? constants.currency.priceNum - item.total.toString().split(".")[1].length : constants.currency.priceNum; //amount中需要补0的个数
            });
            return reverse(newSellList);
        },
        orderBookBuyListMap(buyList, curDecimals) {
            //处理orderBook的buyList
            var [...newBuyList] = toJS(buyList);
            var leftDotNum = curDecimals - highlightDot; //去除高亮尾数后的小数位数
            //按照用户所选decimals过滤小数点位数
            newBuyList.map(item => item.price = common.formatDot(item.price, curDecimals));
            //分解小数点
            newBuyList.map((item, i) => {
                //计算price位数高亮
                if (i == 0) {
                    item.full = true;
                }
                else {
                    let prevPrice = newBuyList[i - 1].price;
                    let prevNum = common.formatDot(prevPrice, leftDotNum); //去除小数尾数位数后剩下的小数部分
                    let curPrice = item.price;
                    let curNum = common.formatDot(curPrice, leftDotNum);
                    if (curNum !== prevNum) {
                        //剩余部分相等
                        item.full = true;
                    }
                    else {
                        item.curNum = curNum;
                        item.leftNum = item.price.toString().slice(-2);
                    }
                }
                //拆分amount和total部分中“0”的部分
                item.amountZeroNum = item.amount.toString().split(".")[1] ? constants.currency.amountNum - item.amount.toString().split(".")[1].length : constants.currency.amountNum; //amount中需要补0的个数
                item.totalZeroNum = item.total.toString().split(".")[1] ? constants.currency.priceNum - item.total.toString().split(".")[1].length : constants.currency.priceNum; //total中需要补0的个数
            });
            return newBuyList;
        },
        tradeHistoryListMap(tradeHistoryList) {
            //处理tradeHistory数据使其满足列表渲染（实时未成交订单右侧列表）
            var [...newTradeHistoryList] = toJS(tradeHistoryList);
            var leftDotNum = constants.currency.priceNum - 2; //去除高亮尾数后的小数位数
            //按照币种位数过滤小数点位数
            newTradeHistoryList.map(item => item.price = common.formatDot(item.price, constants.currency.priceNum));
            //分解小数点
            newTradeHistoryList.map((item, i) => {
                //计算price位数高亮
                if (i == 0) {
                    item.full = true;
                }
                else {
                    let prevPrice = newTradeHistoryList[i - 1].price;
                    let prevNum = common.formatDot(prevPrice, leftDotNum); //去除小数尾数位数后剩下的小数部分
                    let curPrice = item.price;
                    let curNum = common.formatDot(curPrice, leftDotNum);
                    if (curNum !== prevNum) {
                        //剩余部分相等
                        item.full = true;
                    }
                    else {
                        item.curNum = curNum;
                        item.leftNum = item.price.toString().slice(-2);
                    }
                }
                //拆分amount部分中“0”的部分
                item.amountZeroNum = item.amount.toString().split(".")[1] ? constants.currency.amountNum - item.amount.toString().split(".")[1].length : constants.currency.amountNum; //amount中需要补0的个数
                item.date = item.time.split(" ")[0];
                item.dateTime = item.time.split(" ")[1];
                //设置side转换，0：buy; 1: sell
                item.side = item.side == '1' ? 'sell' : 'buy';
            });
            return newTradeHistoryList;
        },
        tradeHistoryTableMap(tradeHistoryList) {
            //处理tradeHistory数据使其满足表格渲染（K线行情下部表格）
            var [...newTradeHistoryTable] = toJS(tradeHistoryList);
            var leftDotNum = constants.currency.priceNum - 2; //去除高亮尾数后的小数位数
            //按照币种位数过滤小数点位数
            newTradeHistoryTable.map(item => item.price = common.formatDot(item.price, constants.currency.priceNum));
            //分解小数点
            newTradeHistoryTable.map((item, i) => {
                //拆分total部分中“0”的部分
                item.totalZeroNum = item.total.toString().split(".")[1] ? constants.currency.priceNum - item.total.toString().split(".")[1].length : constants.currency.priceNum; //total中需要补0的个数
                //设置side转换，0：buy; 1: sell
                item.side = item.side == '1' ? 'sell' : 'buy';
            });
            return newTradeHistoryTable;
        },
        openOrdersTableMap(openOrdersList) {
            var [...newOpenOrdersList] = toJS(openOrdersList);
            newOpenOrdersList.map(item => {
                //设置side转换，0：buy; 1: sell
                item.side = item.side == '1' ? 'sell' : 'buy';
                switch (item.type) {
                    case "0":
                        item.type = "Limit";
                        break;
                    case "1":
                        item.type = "Market";
                        break;
                }
            });
            return newOpenOrdersList;
        },
        orderHistoryTableMap(orderHistoryList) {
            var [...newOrderHistoryList] = toJS(orderHistoryList);
            newOrderHistoryList.map(item => {
                //设置side转换，0：buy; 1: sell
                item.side = item.side == '1' ? 'sell' : 'buy';
                //转换orderType
                switch (item.type) {
                    case "0":
                        item.type = "Limit";
                        break;
                    case "1":
                        item.type = "Market";
                        break;
                }
                //转换orderStatus
                switch (item.status) {
                    case "1":
                        item.status = "Pending";
                        break;
                    case "2":
                        item.status = "Finished";
                        break;
                    case "3":
                        item.status = "Canceled";
                        break;
                }
            });
            return newOrderHistoryList;
        },
        portfolioListMap(portfolioList) {
            return toJS(portfolioList);
        },
        intervalMap(val) {
            let result = '';
            let list = tradingviewConf.resolutions;
            for (let i = 0; i < list.length; i++) {
                if (list[i].wsParam == val || list[i].title == val) {
                    result = list[i].value;
                    break;
                }
            }
            return result;
        }
    },
};
//# sourceMappingURL=dataMapping.js.map