<template>
  <div class="footer">
    <div class="warp">
      <div class="copyRight">
        <p>
          粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备
          33010902002564号
        </p>
        <p>
          粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备
          33010902002564号
        </p>
        <p>
          粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备
          33010902002564号
        </p>
        <p>
          粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备
          33010902002564号
        </p>
      </div>
      <ul class="logo">
        <li>
          <a href="" class="logonew logo-amped"> </a>
        </li>
        <li>
          <a href="" class="logonew logo-auth"> </a>
        </li>
        <li>
          <a href="" class="logonew logo-musician"> </a>
        </li>
        <li>
          <a href="" class="logonew logo-reward"> </a>
        </li>
        <li>
          <a href="" class="logonew logo-cash"> </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgb(211, 211, 211);
  background: rgb(242, 242, 242);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  .warp {
    width: 1100px;
    height: 172px;
    margin: 0 auto;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    .copyRight {
      text-align: left;
      p {
        width: 100%;
        display: block;
        text-align: left !important;
        color: #666;
        line-height: 2;
        a {
          color: #999;
        }
      }
    }
    ul.logo {
      display: flex;
      flex: 1;
      margin-left: 50px;
      padding-top: 18px;
      li {
        width: 20%;
        .logonew {
          background: url("../../assets/images/foot_enter_new.png") no-repeat;
          background-size: 110px 552px;
          display: block;
          float: none;
          width: 50px;
          height: 45px;
          margin: 0 auto;
        }
        .logo-amped {
          background-position: -63px -456.5px;
        }
        .logo-auth {
          background-position: -63px -101px;
        }
        .logo-musician {
          background-position: 0 0;
        }
        .logo-reward {
          background-position: -60px -50px;
        }
        .logo-cash {
          background-position: 0 -101px;
        }
      }
    }
  }
}
</style>
