<template>
  <router-view />
</template>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body,
#app {
  height: 100%;
}
ol,
ul,
dl {
  list-style: none;
}
em,
i {
  font-style: normal;
}
a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  outline: none;
}

div:focus {
  outline: none;
}

ol,
ul,
dl,
div,
a,
em,
i,
p,
span {
  margin: 0;
  padding: 0;
}
p {
  margin: 0 !important;
}
</style>
