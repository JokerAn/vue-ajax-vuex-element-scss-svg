<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
  padding:0;
}
li,ul,ol{
  list-style: none;
  margin: 0;
  padding: 0;
}
hr{
  border: 0;
}
body,input,li,span,p{
  outline: none;
}
em,i{
  font-style: normal;
}
p,hr,h1, h3, h2, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
p,div{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
input[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {
  -webkit-appearance: none;
}
.fl{
  float: left;
}
.fr{
  float: right;
  }
.ellipsis{
  display:inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text_center{text-align: center}
.anclear:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.goodposition{
  position: absolute;top:50%;left:50%;
  -webkit-transform:translate(-50%,-50%) ;
  -moz-transform: translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%) ;
  -o-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
html body .pop-success-btn-left {
  // 给elementUi弹出框取消按钮加class=' xxx pop-success-btn-left'让他去最右边
  float: right;
  margin-left: 15px;
}


// 覆盖elementui的样式开始
body{
  ::v-deep .el-table th>.cell{
    color:#555;
  }
}
// 覆盖elementui的样式结束

</style>
