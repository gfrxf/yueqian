<template>
  <div>

    <div class="mnavPage">
      
     <div class="navImg">
     <img 
       v-for="item in 6"
       :key="item"
      :src="
       item == navItem
       ? require(`../assets/${$i18n.locale}/phoneImage/navPage/on${item}.png`)
       : require(`../assets/${$i18n.locale}/phoneImage/navPage/off${item}.png`)
       " 
      alt="" class="navPic"
        @click="$emit('changeNavItem', item)"
      >
   
     </div>
    </div>
  </div>
</template>

<script>
export default {
props:["navItem"],
}
</script>

<style lang="less" scoped>
.mnavPage{
    position: fixed;
    width: 100%;
    height: 1.52rem;
    z-index: 999;
    bottom: 0;
    .navImg{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    }
    .navPic{
   width: 0.8rem;
    height: 0.8rem;
    }
}

</style>