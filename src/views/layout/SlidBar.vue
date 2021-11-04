<template>
  <div class="slidBar">
    <div class="warp">
      <ul>
        <li>
          <a href=""> <em>推荐</em> </a>
        </li>
        <li>
          <a href=""> <em>推荐</em> </a>
        </li>
        <li>
          <a href=""> <em>推荐</em> </a>
        </li>
        <li>
          <a href=""> <em>推荐</em> </a>
        </li>
        <li>
          <a href=""> <em>推荐</em> </a>
        </li>
        <li>
          <a href=""> <em>推荐</em> </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.slidBar {
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .warp {
    width: 1100px;
    margin: 0 auto;
  }
  ul {
    overflow: hidden;
    margin: 0;
    li {
      float: left;
    }
    a {
      color: #fff;
      line-height: 35px;
    }
    em {
      display: inline-block;
      height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      border-radius: 20px;
      line-height: 21px;
    }
  }
}
</style>
