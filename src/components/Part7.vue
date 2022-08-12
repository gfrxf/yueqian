<template>
  <div>
    <div class="mvideoPage"
      v-if="misMedia == true"
    :style="
    'background:url('+ require(`@/assets/${$i18n.locale}/phoneImage/videoPage/bg.jpg`)+')0 0/100% 100%;width:100%;height:100vh'
    "
    >
     <div class="mvideo_container"
   
     >
      <div class="page">
        <img  :src="require(`@/assets/${$i18n.locale}/image/videoPage/1.png`)" alt="" class="medir"  @click="changeNum(1)">
        <img  :src="require(`@/assets/${$i18n.locale}/image/videoPage/2.png`)" alt="" class="store"  @click="changeNum(2)">
      </div>
      <swiper ref="muSwiper" :options="swiperOptionSwp3">
        <swiper-slide
        v-for="(item,index) in mimgsUrl1 "
        :key="index"
        >
        <div class="swiperimg"
         @click="$emit('showVideo', item.video)"
         :style="{
            'background-image': 'url('+item.url+')','background-size': '100% 100%'
          }"
        >
         
        </div>
        </swiper-slide>
      </swiper>
     </div>
    </div>

    <div class="mshop"
    v-show="misMedia == false"
    :style="
    'background:url(' +
    require(`@/assets/${$i18n.locale}/phoneImage/shop/bg.png`) +
    ')0 0/100% 100%;width:100%;height:100vh'"
    >
     <div class="mshop_container"> 
      <div class="page">
        <img  :src="require(`@/assets/${$i18n.locale}/image/videoPage/1.png`)" alt="" class="medir" @click="changeNum(1)">
        <img  :src="require(`@/assets/${$i18n.locale}/image/videoPage/2.png`)" alt="" class="store" @click="changeNum(2)">
      </div>
    <swiper :options="swiperOptionSwp2">
     <swiper-slide
      v-for="(item, index) in mimgsUrl2"
      :key="index"
       >
       <div
        class="swiperimg"
        :style="{
         'background-image': 'url(' + item + ')',
         'background-size': '100% 100%'
          }">
         </div>
          </swiper-slide>
      </swiper>
     </div>

    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    components: {
        swiper,
        swiperSlide
    },
  props:["mimgsUrl1" ,"misMedia","mimgsUrl2"],
data(){
  return{
     swiperOptionSwp3: {
                prevButton: ".swiper-button-prev",
                nextButton: ".swiper-button-next",
                observer: true,
                observeParents: true,
                loop: false
            },
             swiperOptionSwp2: {
                prevButton: ".swiper-button-prev",
                nextButton: ".swiper-button-next",
                observer: true,
                observeParents: true,
                loop: false
            },
  }
},
methods:{
  changeNum(value){
    this.$emit("changeNum",value)
  }
},
}
</script>

<style lang="less" scoped>
.mvideoPage{
    width: 100%;
    height: 100vh;
    background-size: 100% 100%;

    .mvideo_container{
      position: absolute;
      left: 50%;
      transform: translate(-50%);
       .page{
        display: flex;
        margin-top: 1.5rem;
        margin-left: 1.2rem;
        .medir{
          width: 1rem;
          height: 0.29rem;
          margin-left: 0.5rem;
        }
        .store{
           width: 1rem;
          height: 0.29rem;
          margin-left: 0.2rem;
        }

 }
  .swiper-container {
            width: 4rem;
            height: 6rem;
            margin-left: 1rem;
    margin-top: 0.5rem;
        }
        .swiperimg {
            display: block;
            background-size: 100% 100%;
            width: 3rem;
            height: 4rem;
        }
    }
   
}
.mshop{
  width: 100%;
    height: 100vh;
    background-size: 100% 100%;
    .mshop_container{
      position: absolute;
      left: 50%;
      transform: translate(-50%);
     .page{
        display: flex;
        margin-top: 1.5rem;
        margin-left: 2rem;
        .medir{
          width: 1rem;
          height: 0.29rem;
          margin-left: 0.5rem;
        }
        .store{
           width: 1rem;
          height: 0.29rem;
          margin-left: 0.2rem;
        }
 }
    .swiper-container{
           width: 5.95rem;
            height: 8.96rem;
            .swiper-wrapper {
                width: 5rem;
                height: 8rem;
                .swiper-slide {
                    width: 5rem;
                    height: 8rem;
                    // background: url("../assets/common/phoneImage/shop/bg.png");
                    // background-size: 100% 100%;
                    .swiperimg {
                        display: block;
                        background-size: 100% 100%;
                        width: 3.5rem;
                        height: 5.5rem;
                         cursor: pointer;
   
                        margin: 0.5rem auto;
                    }
                }
            }
        }


    }
}
</style>