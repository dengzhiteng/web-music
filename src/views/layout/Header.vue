<template>
  <div class="header">
    <div class="warp">
      <h1 class="logo">
        <a href="">
          网易云音乐
        </a>
      </h1>
      <ul class="m-nav">
        <li class="active">
          <a href="">
            <em>发现音乐</em>
            <sub></sub>
          </a>
        </li>
        <li>
          <a href="">
            <em>我的音乐</em>
            <sub></sub>
          </a>
        </li>
        <li>
          <a href="">
            <em>朋友</em>
            <sub></sub>
          </a>
        </li>
        <li>
          <a href="">
            <em>商城</em>
            <sub></sub>
          </a>
        </li>
        <li>
          <a href="">
            <em>音乐人</em>
            <sub></sub>
          </a>
        </li>
        <li>
          <a href="">
            <em>下载客户端</em>
            <sub></sub>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 70px;
  background: #242424;
  border-bottom: 1px solid #000;
  .warp {
    width: 1100px;
    margin: 0 auto;
  }
}
.logo {
  float: left;
  a {
    display: inline-block;
    width: 176px;
    height: 69px;
    background: url("../../assets/images/topbar.png") no-repeat;
    text-indent: -999999999px;
  }
}
ul.m-nav {
  overflow: hidden;
  margin: 0;
  padding: 0;
  li {
    float: left;
    position: relative;
    text-align: center;
    a {
      padding: 0 19px;
      text-align: center;
      color: #ccc;
      font-size: 14px;
      em {
        line-height: 70px;
        height: 70px;
        display: inline-block;
      }
      sub {
        background: url("../../assets/images/topbar.png") no-repeat;
        display: none;
        width: 12px;
        height: 7px;
        overflow: hidden;
        background-position: -226px 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &.active {
      a {
        color: #fff;
        sub {
          display: block;
        }
      }
    }
  }
}
</style>
