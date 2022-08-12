<template>
  <div>
    <div class="mcontain">
        <div class="videoclose">
          <i class="close" @click="$emit('closevideo')"></i>
        </div>
         <iframe
                    class="youtube-iframe-video"
                    :src="
                        'https://www.youtube-nocookie.com/embed/' +
                       youtobe +
                        '?autoplay=1&origin=http://example.com&cc_load_policy=1&rel=0'
                    "
                    width="100%"
                    height="50%"
                    frameborder="0"
                    allowfullscreen
          ></iframe>
    </div>
  </div>
</template>

<script>
export default {
// name:VideoModel,
name:'videoModel',
props:["youtobe"],
}
</script>

<style lang="less" scoped>
.mcontain{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    .videoclose{
      // width: 7rem;
      // height: 6rem;
      .close{
        position: absolute;
        top: 15%;
        left: 50%;
        width: 0.74rem;
        height: 0.72rem;
        background: url("../../assets/common/image/model/close.png");
        background-size: 100% 100%;
        cursor: pointer;
        transform: translate(-50%);
      }
    }
    .youtube-iframe-video{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4.5rem;
      height: 4.5rem;
      transform: translate(-50%,-50%);
    }
}
</style>