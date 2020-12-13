//样式相关配置表
export default {
    themeList: [
        'defaultDark',
        'defaultLight',
        'mode1Dark',
        'mode1Light',
        'mode2Dark',
        'mode2Light'
    ],
    name: 'pl',
    defaultTheme: { mode: 'dark', theme: 'default' },
    themeColors: {
        default: {
            green: '#5eb44d',
            red: '#e05a66',
            greenShadow: 'rgba(94, 180, 77, 0.2)',
            redShadow: 'rgba(224, 90, 102, 0.2)'
        },
        mode1: {
            green: '#53a566',
            red: '#b63b5f',
            greenShadow: 'rgba(83, 165, 102, 0.2)',
            redShadow: 'rgba(182, 59, 95, 0.2)'
        },
        mode2: {
            green: '#99c355',
            red: '#e48e40',
            greenShadow: 'rgba(153, 195, 85, 0.2)',
            redShadow: 'rgba(228, 142, 64, 0.2)'
        }
    }
}