var ChartsDataUtil = {
    /**
     * 格式化时间
     * @param day, time
     */
    formatterTime(day, time) {
        let y = day.substr(0, 4);
        let m = parseInt(day.substr(4, 2)) - 1;
        let d = day.substr(6);
        let hmsArr = time.split(':');
        return Date.UTC(y, m, d, hmsArr[0], hmsArr[1]);
    },
    /**
     * 格式化k线数据
     * @param data
     */
    formatterKData(data) {
        let klineDataArray = [];
        for (let i = 0; i < data.length; i++) {
            let dataArray = data[i].split(',');
            let kData = {};
            let tradingDay = dataArray[0];
            kData.time = dataArray[1];
            kData.time = this.formatterTime(tradingDay, kData.time);

            kData.volume = amazonCommon.scientificToNumber(Number(dataArray[2]));
            kData.high = Number(dataArray[3]);
            kData.low = Number(dataArray[4]);
            kData.open = Number(dataArray[5]);
            kData.close = Number(dataArray[6]);
            klineDataArray.push(kData);
        }
        return klineDataArray;
    }
};

export default ChartsDataUtil;