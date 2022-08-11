<template>
  <div> 
    <div class="mcontain">
      <div class="mbox">

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mcontain{
  width: 100%;
  height: 100vh;
  background: url(../assets/wap/news/facebook/bg.png) no-repeat;
  background-size: 100% 100%;
  .mbox{
    position: absolute;
    width: 4.2rem;
    height: 7rem;
    background: url(../assets/wap/news/facebook/fbbg.png) no-repeat center;
   background-size: 100% 100%;
   top: 16.5%;
    left: 50%;
    transform: translate(-50%);
  }

}
</style>