<template>
  <div>
     <div class="mcontain">

      <div class="mheroIntro">
         <div class="mbigpic">
         
            <img :src="require(`../assets/English/phoneImage/heroIntro/pic/big${num}.png`)" alt="" class="big">
            <div class="introduce">你好呀</div>
            <img
                        src="../assets/common/image/heroIntro/audio.png"
                        alt=""
                        class="audio"
                        @click="getMusic"
                    />
              <audio
                        :src="require(`../assets/English/image/heroIntro/pic/${num}.mp3`)">
              </audio>
         </div>
         <div class="herosmall">
          <div id="topNav" class="swiper-container">
            <div class="swiper-wrapper">
               <div class="swiper-slide">
                      <span class="pictur offpic0"></span>
               </div>
                <div class="swiper-slide">
                       <span class="pictur offpic1"></span>
               </div>
                <div class="swiper-slide">
                     <span class="pictur offpic2"></span>
                </div>
                <div class="swiper-slide active">
                                <span class="pictur onpic3"></span>
                            </div>
                <div class="swiper-slide">
                    <span class="pictur offpic4"></span>
                </div>
                <div class="swiper-slide">
                    <span class="pictur offpic5"></span>
                </div>
                <div class="swiper-slide">
                  <span class="pictur offpic6"></span>
                </div>
                <div class="swiper-slide">
                    <span class="pictur offpic7"></span>
                </div>
                <div class="swiper-slide">
                  <span class="pictur offpic8"></span>
                </div>
                 <div class="swiper-slide">
                   <span class="pictur offpic9"></span>
                 </div> 
               
            </div>
           
          </div>
         </div>
           <img
                    :src="
                        haveLike0
                            ? require(`../assets/common/phoneImage/heroIntro/likeon0.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like0.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(num)"
                    v-show="num == 0"
                />
                <img
                    :src="
                        haveLike1
                            ? require(`../assets/common/phoneImage/heroIntro/likeon1.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like1.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(num)"
                    v-show="num == 1"
                />
                <img
                    :src="
                        haveLike2
                            ? require(`../assets/common/phoneImage/heroIntro/likeon2.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like2.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(2)"
                    v-show="num == 2"
                />
                <img
                    :src="
                        haveLike3
                            ? require(`../assets/common/phoneImage/heroIntro/likeon3.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like3.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(3)"
                    v-show="num == 3"
                />
                <img
                    :src="
                        haveLike4
                            ? require(`../assets/common/phoneImage/heroIntro/likeon4.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like4.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(4)"
                    v-show="num == 4"
                />
                <img
                    :src="
                        haveLike5
                            ? require(`../assets/common/phoneImage/heroIntro/likeon5.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like5.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(5)"
                    v-show="num == 5"
                />
                <img
                    :src="
                        haveLike6
                            ? require(`../assets/common/phoneImage/heroIntro/likeon6.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like6.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(6)"
                    v-show="num == 6"
                />
                <img
                    :src="
                        haveLike7
                            ? require(`../assets/common/phoneImage/heroIntro/likeon7.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like7.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(7)"
                    v-show="num == 7"
                />
                <img
                    :src="
                        haveLike8
                            ? require(`../assets/common/phoneImage/heroIntro/likeon8.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like8.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(8)"
                    v-show="num == 8"
                />
                <img
                    :src="
                        haveLike9
                            ? require(`../assets/common/phoneImage/heroIntro/likeon9.png`)
                            : require(`../assets/common/phoneImage/heroIntro/like9.png`)
                    "
                    alt=""
                    class="like"
                    @click="likeIcon(9)"
                    v-show="num == 9"
                />


      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../assets/utils/swiper/swiper.min.js"
import "../assets/utils/swiper/swiper.min.css"
// import { init } from "events"
import $ from 'jquery'
import { onMounted } from "vue";
let vm = null;
export default {
  data(){
    return{
     mySwiper: null,
            num: 3,
            haveLike0: false,
            haveLike1: false,
            haveLike2: false,
            haveLike3: false,
            haveLike4: false,
            haveLike5: false,
            haveLike6: false,
            haveLike7: false,
            haveLike8: false,
            haveLike9: false,
            activeIndex: 0,
            swiperInstance: null,
            num1: 3
    }
  },
   watch: {
        num1: function () {
            // let aa = document.querySelector('.m-people')
            // console.log(aa.style);
            // console.log(this.num1);
            // $(".m-people").on("touchstart", function (e) {
            //     console.log(e);
            // });
            console.log(1111);
            console.log(this.$refs.container.scrollTop);
            this.$refs.container.scrollTop = 0;
        }
    },
  methods:{
    likeIcon(num) {
            // window.ga(
            //     "send",
            //     "event",
            //     "likeHero" + this.num,
            //     "click",
            //     this.$store.state.ismobile ? "wap" : "PC"
            // );
            switch (num) {
                case 0:
                    if (this.haveLike0) {
                        this.haveLike0 = false;
                        localStorage.removeItem("likePic0");
                    } else {
                        this.haveLike0 = true;
                        localStorage.setItem("likePic0", num);
                    }
                    break;
                case 1:
                    if (this.haveLike1) {
                        this.haveLike1 = false;
                        localStorage.removeItem("likePic1");
                    } else {
                        this.haveLike1 = true;
                        localStorage.setItem("likePic1", num);
                    }
                    break;
                case 2:
                    if (this.haveLike2) {
                        this.haveLike2 = false;
                        localStorage.removeItem("likePic2");
                    } else {
                        this.haveLike2 = true;

                        localStorage.setItem("likePic2", num);
                    }
                    break;
                case 3:
                    if (this.haveLike3) {
                        this.haveLike3 = false;
                        localStorage.removeItem("likePic3");
                    } else {
                        this.haveLike3 = true;

                        localStorage.setItem("likePic3", num);
                    }
                    break;
                case 4:
                    if (this.haveLike4) {
                        this.haveLike4 = false;
                        localStorage.removeItem("likePic4");
                    } else {
                        this.haveLike4 = true;

                        localStorage.setItem("likePic4", num);
                    }
                    break;
                case 5:
                    if (this.haveLike5) {
                        this.haveLike5 = false;
                        localStorage.removeItem("likePic5");
                    } else {
                        this.haveLike5 = true;

                        localStorage.setItem("likePic5", num);
                    }
                    break;
                case 6:
                    if (this.haveLike6) {
                        this.haveLike6 = false;
                        localStorage.removeItem("likePic6");
                    } else {
                        this.haveLike6 = true;

                        localStorage.setItem("likePic6", num);
                    }
                    break;
                case 7:
                    if (this.haveLike7) {
                        this.haveLike7 = false;
                        localStorage.removeItem("likePic7");
                    } else {
                        this.haveLike7 = true;

                        localStorage.setItem("likePic7", num);
                    }
                    break;
                case 8:
                    if (this.haveLike8) {
                        this.haveLike8 = false;
                        localStorage.removeItem("likePic8");
                    } else {
                        this.haveLike8 = true;

                        localStorage.setItem("likePic8", num);
                    }
                    break;
                case 9:
                    if (this.haveLike9) {
                        this.haveLike9 = false;
                        localStorage.removeItem("likePic9");
                    } else {
                        this.haveLike9 = true;

                        localStorage.setItem("likePic9", num);
                    }
                    break;
            }
        },
         smallPic(val) {
            this.num = val;
            // console.log(this.num);
            // console.log(val);
        },
        msmallPic(val) {
            console.log(val);
        },
    init(){
       // 实力化swiper插件
            let mySwiper = new Swiper("#topNav", {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: "auto"
            });
            let swiperWidth = mySwiper.container[0].clientWidth;
            let maxTranslate = mySwiper.maxTranslate();
            let maxWidth = -maxTranslate + swiperWidth / 2;
            // $(".swiper-container").on("touchstart", function (e) {
            //     e.preventDefault();
            // });
            mySwiper.on("click", function (swiper, e) {
                // vm.num = swiper.clickedIndex
                vm.num1 = swiper.clickedIndex;
                let slide = swiper.slides[swiper.clickedIndex];
                let slideLeft = slide.offsetLeft;
                let slideWidth = slide.clientWidth;
                let slideCenter = slideLeft + slideWidth / 2;
                console.log(slideLeft);
                console.log(slideWidth);
                console.log(slideCenter);
                mySwiper.setWrapperTransition(300);

                if (slideCenter < swiperWidth / 2) {
                    mySwiper.setWrapperTranslate(0);
                } else if (slideCenter > maxWidth) {
                    mySwiper.setWrapperTranslate(maxTranslate);
                } else {
                    let nowTlanslate = slideCenter - swiperWidth / 2;
                    mySwiper.setWrapperTranslate(-nowTlanslate);
                }

                let activeNum = swiper.clickedIndex;
                let pic = document.getElementsByClassName("pictur");

                $("#topNav  .active").removeClass("active");
                $("#topNav .swiper-slide").eq(activeNum).addClass("active");
                switch (activeNum) {
                    case 0:
                        vm.num = 0;
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 1:
                        vm.num = 1;
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 2:
                        vm.num = 2;
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 3:
                        vm.num = 3;
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");

                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 4:
                        vm.num = 4;
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 5:
                        vm.num = 5;
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 6:
                        vm.num = 6;
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 7:
                        vm.num = 7;
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 8:
                        vm.num = 8;
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        $("#topNav .swiper-slide span")
                            .eq(9)
                            .addClass("offpic9");
                        break;
                    case 9:
                        vm.num = 9;
                        $("#topNav .swiper-slide span")
                            .eq(1)
                            .addClass("offpic1");
                        $("#topNav .swiper-slide span")
                            .eq(2)
                            .addClass("offpic2");
                        $("#topNav .swiper-slide span")
                            .eq(3)
                            .addClass("offpic3");
                        $("#topNav .swiper-slide span")
                            .eq(4)
                            .addClass("offpic4");
                        $("#topNav .swiper-slide span")
                            .eq(5)
                            .addClass("offpic5");
                        $("#topNav .swiper-slide span")
                            .eq(6)
                            .addClass("offpic6");
                        $("#topNav .swiper-slide span")
                            .eq(7)
                            .addClass("offpic7");
                        $("#topNav .swiper-slide span")
                            .eq(8)
                            .addClass("offpic8");
                        $("#topNav .swiper-slide span")
                            .eq(0)
                            .addClass("offpic0");
                        break;
                }
                $("#topNav .swiper-slide span")
                    .eq(activeNum)
                    .removeClass("offpic" + activeNum);
                $("#topNav .swiper-slide span")
                    .eq(activeNum)
                    .addClass("onpic" + activeNum);
            });
    },
      end(val) {
            this.num = val;
        },
        getMusic() {
            //获取音频标签
            let audio = document.querySelector("audio");
            // audio.play()
            //判断音频状态
            if (audio.paused) {
                //暂停时，播放
                audio.play();
                // this.audioImg = 1;
            } else {
                //播放时，暂停
                audio.pause();
                // this.audioImg = 0;
            }
            console.log(audio);
        }
  },
  created(){
    
    vm = this;
    console.log(vm);
  },
  mounted(){
    console.log(11);
     this.init();
  }
  

}
</script>

<style lang="less" scoped>
.mcontain{
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(../assets/common/phoneImage/heroIntro/bg.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
   white-space: pre-line;
  .mheroIntro{
   width: 7.5rem;
   height: 13.34rem;
    .mbigpic{
  width: 7.5rem;
   height: 13.34rem;
      margin-top: -0.4rem;
     
  .big{
    width: 5rem;
    // height: 9rem;
   
    object-fit: cover;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  .introduce{
    width: 3.19rem;
    height: 1rem;
    position: absolute;
    font-size: 0.18rem;
    left: 31%;
    top: 5%;
    transform: translate(-50% );
    color: green;
  }
  .audio{
    width: 0.68rem;
    height: 0.68rem;
    position: absolute;
    top: 3%;
    left: 80%;
  }
    
  }
  .herosmall{
    position: absolute;
    top: 60%;
    // left: %;
    width: 6rem;

    #topNav{
      width: 100%;
      overflow: hidden;
    }

    #topNav .swiper-slide{
       letter-spacing: 2px;
       width: 0.75rem;
      text-align: center;
    }
    #topNav .swiper-slide span {
                color: orange;
                transition: all 0.3s ease;
                display: block;
            }
             #topNav .active {
                width: 1.6rem !important;
            }
            .onpic0 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on0.png");
                background-size: 100% 100%;
            }
            .onpic1 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on1.png");
                background-size: 100% 100%;
            }
            .onpic2 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on2.png");
                background-size: 100% 100%;
            }
            .onpic3 {
                width:1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on3.png");
                background-size: 100% 100%;
            }
            .onpic4 {
                width: 1.8rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on4.png");
                background-size: 100% 100%;
            }
            .onpic5 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on5.png");
                background-size: 100% 100%;
            }
            .onpic6 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on6.png");
                background-size: 100% 100%;
            }
            .onpic7 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on7.png");
                background-size: 100% 100%;
            }
            .onpic8 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on8.png");
                background-size: 100% 100%;
            }
            .onpic9 {
                width: 1.6rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/on9.png");
                background-size: 100% 100%;
            }
             .offpic0 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off0.png");
                background-size: 100% 100%;
            }
            .offpic1 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off1.png");
                background-size: 100% 100%;
            }
            .offpic2 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off2.png");
                background-size: 100% 100%;
            }
            .offpic3 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off3.png");
                background-size: 100% 100%;
            }
            .offpic4 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off4.png");
                background-size: 100% 100%;
            }
            .offpic5 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off5.png");
                background-size: 100% 100%;
            }
            .offpic6 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off6.png");
                background-size: 100% 100%;
            }
            .offpic7 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off7.png");
                background-size: 100% 100%;
            }
            .offpic8 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off8.png");
                background-size: 100% 100%;
            }
            .offpic9 {
                width: 0.74rem;
                height: 1.43rem;
                background-image: url("../assets/common/image/heroIntro/pic/off9.png");
                background-size: 100% 100%;
            }
            
  }
   .like {
           position: absolute;
    top: 73.3%;
    left: 1%;
    width: 4.9rem;
    height: 0.53rem;
        }
         .audio {
            position: absolute;
            top: 2%;
            right: 2%;
            width: 1rem;
            height: 1rem;
        }

  }

  
  

}
</style>