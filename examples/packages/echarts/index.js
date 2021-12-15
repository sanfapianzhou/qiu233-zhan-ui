import EchartsItem from './index.vue'

// 为组件提供 install 安装方法，供按需引入
EchartsItem.install = (Vue) => {
    Vue.component(EchartsItem.name, EchartsItem)
}

export default EchartsItem
