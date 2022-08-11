<template>
  <div> 
    <div class="mcontain">
      <div class="mbox">
       
      </div>
       
    <img src="../assets/common/phoneImage/worldview/intro.png" alt="" class="ibottom">
    
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
  background: url(../assets/English/phoneImage/worldview/bg.png) no-repeat;
  background-size: 100% 100%;
  .mbox{
    position: absolute;
    width: 4.2rem;
    height: 7rem;
    background: url(../assets/common/phoneImage/worldview/pic.png) no-repeat center;
   background-size: 100% 100%;
   top: 16.5%;
    left: 50%;
    transform: translate(-50%);
  }
  .ibottom{
        position: absolute;
    width: 4.2rem;
    height: 2.64rem;
    right: 0;
    bottom: 8%;
  }

}
</style>