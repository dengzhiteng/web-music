<template>
  <div class="slidBar">
    <div class="warp">
      <ul>
        <li>
          <router-link to="/home/discover"
            ><em class="active">推荐</em></router-link
          >
        </li>
        <li>
          <router-link to="/home/toplist"><em>排行榜</em> </router-link>
        </li>
        <li>
          <router-link to="/home/playlist"><em>歌单</em></router-link>
        </li>

        <li>
          <router-link to="/home/djradio"> <em>主播电台</em></router-link>
        </li>
        <li>
          <router-link to="/home/singer"> <em>歌手</em> </router-link>
        </li>
        <li>
          <router-link to="/home/album"> <em>新碟上架</em> </router-link>
        </li>
      </ul>
      <h2>User {{ $route.params }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
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
      a {
        color: #fff;
        line-height: 35px;
        em {
          display: inline-block;
          height: 20px;
          padding: 0 13px;
          margin: 7px 17px 0;
          border-radius: 20px;
          line-height: 21px;
        }
      }
      a:hover em {
        background: #9b0909;
      }
      em.active {
        background: #9b0909;
      }
    }
  }
}
</style>
