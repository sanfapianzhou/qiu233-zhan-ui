import AppMain from './appMain'
import EchartsItem from './echarts'
const components = [
    AppMain, EchartsItem
]

const install = function (Vue) {
    if (install.installed) return;

    components.forEach(component => {
        Vue.component(component.name, component)
    })

    if (typeof window != 'undefined' && window.Vue) {
        install(window.Vue)
    }
}

//单组件导出
export {
    AppMain, EchartsItem
}
//全部导出
export default {
    install,
    ...components

}