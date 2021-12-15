import AppMain from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
AppMain.install = (Vue) => {
    Vue.component(AppMain.name, AppMain)
}

export default AppMain
