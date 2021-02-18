import themeConf from 'mulThemeConf';
import { themeStore } from '@webExchangeMobx/index';
let env = process.env.NODE_ENV;

const widget = () => {
    let currentThemeObj = themeStore.currentThemeObj;
    let mode = currentThemeObj.mode;
    mode = mode.replace(mode[0], mode[0].toUpperCase());
    let cssPage = `${currentThemeObj.mode}Theme`;
    let key = `${currentThemeObj.theme}${mode}Theme`;
    let tradeCss = themeConf[key].Trade;
    
    let overrideConfig = {
        up: tradeCss.Chart.upColor,
        down: tradeCss.Chart.downColor,
        bg: tradeCss.bgColor,
        grid: "rgba(255, 255, 255, 0)",
        cross: "#92949a",
        border: tradeCss.bgColor,
        volume_up: tradeCss.Chart.volumeUpColor,
        volume_down: tradeCss.Chart.volumeDownColor,
        line: tradeCss.bgColor,
        scaleLine: tradeCss.Chart.lineColor,
        scaleText: tradeCss.Chart.textColor,
        area: '#00a0ff',
        areatop: "rgba(111, 161, 255, 0.5)",
        areadown: "rgba(23, 27, 43, 0.2)",
        cssPage: `${cssPage}.css`
    };
    return {
        debug: false,
        locale: 'en',
        interval: 1,
        container_id: 'tv_chart_container',
        library_path: env != 'development' ? '/common/charting_library/' : '/common/assets/js/vendor/charting_library/',
        timezone: 'Etc/UTC', // 图表的初始时区，底部的刻度取决于这个时区
        theme: mode,
        disabled_features: [
            'use_localstorage_for_settings',
            'header_widget', // 顶部的工具
            'edit_buttons_in_legend', // legend中的按钮
            'show_interval_dialog_on_key_press',
            'timeframes_toolbar', // 底部菜单
            'symbol_info', // 右键中的商品信息
            'symbol_search_hot_key',
            'study_dialog_search_control',
            'adaptive_logo', // 小屏幕设备上隐藏TradingViewlogo
            'legend_context_menu', // 左上方详情按钮菜单
            'display_market_status', // 市场状态，如休市
            'volume_force_overlay',
            'control_bar',
            'context_menus' // 右键或长按后出现的属性菜单
        ],
        enabled_features: [
            'hide_last_na_study_output', // 隐藏n/a
            'hide_left_toolbar_by_default', // 默认隐藏左边工具栏
            'dont_show_boolean_study_arguments',
            'move_logo_to_main_pane', // 将logo放在主数据窗格上，而不是底部窗格
            'same_data_requery',
            'side_toolbar_in_fullscreen_mode',
        ],
        charts_storage_url: '',
        charts_storage_api_version: '1.1',
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        fullscreen: false,
        autosize: true,
        studies_overrides: {
            'volume.volume.color.0': overrideConfig.volume_down,
            'volume.volume.color.1': overrideConfig.volume_up,
            'volume.volume.transparency': 100,
            'Overlay.lineStyle.color': overrideConfig.line,
            'Overlay.lineStyle.linewidth': 4
        },
        loading_screen: {
            backgroundColor: overrideConfig.bg
        },
        toolbar_bg: overrideConfig.bg,
        overrides: {
            'paneProperties.legendProperties.showLegend': true, // 显示详情
            'volumePaneSize': "medium",
            'scalesProperties.lineColor': overrideConfig.scaleLine,
            'scalesProperties.textColor': overrideConfig.scaleText,
            'scalesProperties.showRightScale': true, // 右边的价格坐标
            'scalesProperties.showSeriesLastValue': true, // 当前价格
            'paneProperties.background': overrideConfig.bg,
            'paneProperties.vertGridProperties.color': overrideConfig.grid,
            'paneProperties.vertGridProperties.style': 1,
            'paneProperties.horzGridProperties.color': overrideConfig.grid,
            'paneProperties.horzGridProperties.style': 1,
            'paneProperties.crossHairProperties.color': overrideConfig.cross,
            'paneProperties.legendProperties.showStudyArguments': true,
            'paneProperties.legendProperties.showStudyTitles': true,
            'paneProperties.legendProperties.showStudyValues': true,
            'paneProperties.legendProperties.showSeriesTitle': true,
            'paneProperties.legendProperties.showSeriesOHLC': true,
            'mainSeriesProperties.showPriceLine': false, // 当前价格线
            'mainSeriesProperties.candleStyle.upColor': overrideConfig.up,
            'mainSeriesProperties.candleStyle.downColor': overrideConfig.down,
            'mainSeriesProperties.candleStyle.drawWick': true,
            'mainSeriesProperties.candleStyle.drawBorder': true,
            'mainSeriesProperties.candleStyle.borderColor': overrideConfig.border,
            'mainSeriesProperties.candleStyle.borderUpColor': overrideConfig.up,
            'mainSeriesProperties.candleStyle.borderDownColor': overrideConfig.down,
            'mainSeriesProperties.candleStyle.wickUpColor': overrideConfig.up,
            'mainSeriesProperties.candleStyle.wickDownColor': overrideConfig.down,
            'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
            'mainSeriesProperties.hollowCandleStyle.upColor': overrideConfig.up,
            'mainSeriesProperties.hollowCandleStyle.downColor': overrideConfig.down,
            'mainSeriesProperties.hollowCandleStyle.drawWick': true,
            'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
            'mainSeriesProperties.hollowCandleStyle.borderColor': overrideConfig.border,
            'mainSeriesProperties.hollowCandleStyle.borderUpColor': overrideConfig.up,
            'mainSeriesProperties.hollowCandleStyle.borderDownColor': overrideConfig.down,
            'mainSeriesProperties.hollowCandleStyle.wickColor': overrideConfig.line,
            'mainSeriesProperties.haStyle.upColor': overrideConfig.up,
            'mainSeriesProperties.haStyle.downColor': overrideConfig.down,
            'mainSeriesProperties.haStyle.drawWick': true,
            'mainSeriesProperties.haStyle.drawBorder': true,
            'mainSeriesProperties.haStyle.borderColor': overrideConfig.border,
            'mainSeriesProperties.haStyle.borderUpColor': overrideConfig.up,
            'mainSeriesProperties.haStyle.borderDownColor': overrideConfig.down,
            'mainSeriesProperties.haStyle.wickColor': overrideConfig.border,
            'mainSeriesProperties.haStyle.barColorsOnPrevClose': false,
            'mainSeriesProperties.barStyle.upColor': overrideConfig.up,
            'mainSeriesProperties.barStyle.downColor': overrideConfig.down,
            'mainSeriesProperties.barStyle.barColorsOnPrevClose': false,
            'mainSeriesProperties.barStyle.dontDrawOpen': false,
            'mainSeriesProperties.lineStyle.color': overrideConfig.line,
            'mainSeriesProperties.lineStyle.linewidth': 3,
            'mainSeriesProperties.lineStyle.priceSource': "close",
            'mainSeriesProperties.areaStyle.color1': overrideConfig.areatop,
            'mainSeriesProperties.areaStyle.color2': overrideConfig.areadown,
            'mainSeriesProperties.areaStyle.linecolor': overrideConfig.area,
            'mainSeriesProperties.areaStyle.linewidth': 1,
            'mainSeriesProperties.areaStyle.priceSource': "close"
        }, // 可覆盖一些定制属性
        custom_css_url: env != 'development' ? `/common/charting_library/static/${overrideConfig.cssPage}` : `/common/assets/js/vendor/charting_library/static/${overrideConfig.cssPage}`, // 添加自定义css文件，路径是/charting_library/static/下
    }
}
export default {
    resolutions: [{
        name: '1min',
        value: '1',
        title: '1m',
        wsParam: '1m'
    }, {
        name: '5min',
        value: '5',
        title: '5m',
        wsParam: '5m'
    }, {
        name: '15min',
        value: '15',
        title: '15m',
        wsParam: '15m'
    }, {
        name: '1hour',
        value: '60',
        title: '1H',
        wsParam: '1h'
    }, {
        name: '4hour',
        value: '240',
        title: '4H',
        wsParam: '4h'
    }, {
        name: '6hour',
        value: '360',
        title: '6H',
        wsParam: '6h'
    }, {
        name: '12hour',
        value: '720',
        title: '12H',
        wsParam: '12h'
    }, {
        name: '1day',
        value: '1D',
        title: '1D',
        wsParam: '1d'
    }, {
        name: '1week',
        value: '1W',
        title: '1W',
        wsParam: '1w'
    }, {
        name: '1month',
        value: '1M',
        title: '1M',
        wsParam: '1M'
    }],
    widget,
    config: {
        "supports_search": true,
        "supports_group_request": false,
        "supports_marks": false,
        "supports_timescale_marks": false,
        "supports_time": true,
        "exchanges": [],
        "symbols_types": []
    },
    symbol: {
        "exchange-traded": "",
        "exchange-listed": "",
        "timezone": "Etc/UTC", // 这个商品的交易时区
        "minmov": 1,
        "minmov2": 0,
        "pointvalue": 1,
        "session": "24x7",
        "has_intraday": true,
        "has_no_volume": false,
        "type": "stock",
        "intraday_multipliers": ["1"],
        "pricescale": 100, // 价格精度  minmov/pricescale
        "volume_precision": 0,
    },
    updateFrequency: 500, // 脉冲频率
}