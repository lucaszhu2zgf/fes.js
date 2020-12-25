// fes.config.js 只负责管理 cli 相关的配置
import pxtoviewport from 'postcss-px-to-viewport';


export default {
    html: {
        options: {
            title: '海贼王'
        }
    },
    imageMinimizer: {
        disable: false
    },
    extraPostCSSPlugins: [
        pxtoviewport({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: 'vw'
        })
    ],
    devServer: {
        port: 8080
    }
};
