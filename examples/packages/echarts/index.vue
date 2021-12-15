<template>
  <div ref="eachars" :style="eacharStyle" />
</template>

<script lang="ts">
import * as echarts from "echarts";
const unwarp = (obj) => obj && (obj.__v_raw || obj.valueOf() || obj);
export default {
  props: {
    value: {
      type: Object,
      require: true,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  name: "EchartsItem",
  computed: {
    eacharStyle() {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.changeDate();
      },
    },
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.eachars);
    unwarp(this.myChart).setOption(this.value);
    // this.myChart.setOption(this.value);
  },
  methods: {
    changeDate() {
      // this.myChart.clear()
      unwarp(this.myChart).setOption(this.value);
    },
  },
};
</script>

<style  scoped>
.visual_chart > div {
  height: 100%;
  width: 100%;
}
</style>
