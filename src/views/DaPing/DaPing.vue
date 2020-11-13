<template>
  <div class="daping_container">
    <div class="daping_header">
      <h1>就业行业数据分析</h1>
      <div class="showTime">当前时间：2020年3月17-0时54分14秒</div>
    </div>
    <div class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">

      </div>
      <div class="column">
        <div class="panel bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaPing",
  data() {
    return {};
  }
};
</script>

<style lang="less" >
.daping_container {
  font-family: Arial, Helvetica, sans-serif;
  /*  背景图定位 / 背景图尺寸  cover 完全铺满容器  contain 完整显示在容器内 */
  background: url(../../assets/images/bg.jpg) no-repeat #000;
  background-size: cover;
  /* 行高是字体1.15倍 */
  line-height: 1.15;
  .daping_header {
    position: relative;
    height: 1.25rem;
    background: url(../../assets/images/head_bg.png) no-repeat top center;
    background-size: 100% 100%;
    h1 {
      font-size: 0.475rem;
      color: #fff;
      text-align: center;
      line-height: 1rem;
    }
    .showTime {
      position: absolute;
      top: 0;
      right: 0.375rem;
      line-height: 0.9375rem;
      font-size: 0.25rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .mainbox {
    min-width: 1024px;
    max-width: 1920px;
    height: 1000px;
    padding: 0.125rem 0.125rem 0;
    display: flex;
    .column {
      flex: 3;
      &:nth-child(2) {
        flex: 5;
        margin: 0 0.125rem 0.1875rem;
        overflow: hidden;
      }
    }
  }
  .panel {
    position: relative;
    height:3.875rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    background: rgba(255, 255, 255, 0.04) url(../../assets/images/line\(1\).png);
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.1875rem;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }
      .panel-footer{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        &::before {
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #02a6b5;
          border-left: 2px solid #02a6b5;
        }
        &::after {
          position: absolute;
          bottom: 0;
          right: 0;
          content: "";
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #02a6b5;
          border-right: 2px solid #02a6b5;
        }
      }
    h2{
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
      font-size: 0.25rem;
      font-weight: 400px;
    }
    .chart{
      height: 3rem;
      background-color: rgba(0,0,0,0.2);
    }
  }
}
</style>