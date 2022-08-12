<template>
  <div>
    <div class="mapPage">
        <video
         class="video"
        data-autoplay
        loop
        muted
        webkit-playsinline="true"
        playsinline="true"
        >
         <source
                    class="video-container"
                    src="../assets/common/phoneImage/mapPage/mapvideo.mp4"
                    type="video/mp4"
                />
        </video>
        <div class="mmcontainer">
        <div class="mmapqiu">

        </div>
        <div class="mmapqiu2">

        </div>
        <div class="map-pic">
          
                    <img
                        src="../assets/common/phoneImage/mapPage/0.png"
                        alt=""
                        class="map0"
                    />
                    <img
                        src="../assets/common/phoneImage/mapPage/1.png"
                        alt=""
                        class="map1"
                        @click="$emit('changeMapItem', 1)"
                    />
                    <img
                        src="../assets/common/phoneImage/mapPage/2.png"
                        alt=""
                        class="map2"
                        @click="$emit('changeMapItem', 2)"
                    />
                    <img
                        src="../assets/common/phoneImage/mapPage/3.png"
                        alt=""
                        class="map3"
                        @click="$emit('changeMapItem', 3)"
                    />
                    <img
                        src="../assets/common/phoneImage/mapPage/4.png"
                        alt=""
                        class="map4"
                        @click="$emit('changeMapItem', 4)"
                    />
                    <img
                        src="../assets/common/phoneImage/mapPage/5.png"
                        alt=""
                        class="map5"
                        @click="$emit('changeMapItem', 5)"
                    />
                    <img
                        src="../assets/common/phoneImage/mapPage/6.png"
                        alt=""
                        class="map6"
                        @click="$emit('changeMapItem', 6)"
                    />
                </div>
          <div class="mbottom"
      
          v-for="(item,index) in mimgUrl"
          :key="index"
           v-show="index == mapItem -1"
          >
           <img :src="item" alt="" class="intro">
           <div class="word">
            <p class="name">
              {{$t(`map.Module_5_name${index + 1}`)}}
            </p>
            <p class="txt">
                            {{ $t(`map.Module_5_map${index + 1}`) }}
                        </p>
           </div>
          </div>
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
props:["mapItem"],
data(){
  return{
     mimgUrl: [
                require("../assets/common/phoneImage/mapPage/intro1.png"),
                require("../assets/common/phoneImage/mapPage/intro2.png"),
                require("../assets/common/phoneImage/mapPage/intro3.png"),
                require("../assets/common/phoneImage/mapPage/intro4.png"),
                require("../assets/common/phoneImage/mapPage/intro5.png"),
                require("../assets/common/phoneImage/mapPage/intro6.png")
            ]
  }
},
mounted(){
  console.log(this.mapItem);
}
}
</script>

<style lang="less" scoped>
.mapPage{
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(../assets/common/phoneImage/mapPage/bg1.png);
  background-size: 100% 100%;
 .video{
  width: 100%;
  // height: 100%;
 }
 .mmcontainer{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;


    .mmapqiu{
        background: url("../assets/common/phoneImage/mapPage/ball.png");
        background-size: 100% 100%;
        width: 1rem;
        height: 1.5rem;
        position: absolute;
        top: 46%;
    }
     .mmapqiu2{
      background: url("../assets/common/phoneImage/mapPage/map.png");
            background-size: 100% 100%;
            width: 3.5rem;
            height: 4rem;
            position: absolute;
            top: 1%;
            left: 28%;
     }
     .map-pic{
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
    margin: 2.4rem auto;
    .map0{
      position: absolute;
      top: 20%;
      left: 35%;
      transform: translate(-50% -50%);
      width: 1.4rem;
      height: 1.4rem;
    }
     .map1{
      position: absolute;
      top: 48%;
      left:20%;
      transform: translate(-50% -50%);
      width: 1.4rem;
      height: 1.4rem;
    }
     .map2{
      position: absolute;
      top: 44%;
      left: 58%;
      transform: translate(-50% -50%);
      width: 1.4rem;
      height: 1.4rem;
    }
     .map3{
      position: absolute;
      top: 15%;
      left: 70%;
      transform: translate(-50% -50%);
      width: 1.4rem;
      height: 1.4rem;
    }
     .map4{
      position: absolute;
      top: 24%;
      left: -1%;
      transform: translate(-50% -50%);
      width: 1.4rem;
      height: 1.4rem;
    }
     .map5{
      position: absolute;
      top: -15%;
      left: 50%;
      transform: translate(-50% -50%);
      width: 1.4rem;
      height: 1.4rem;
    }
     .map6{
      position: absolute;
      top: -7%;
      left: 12%;
      transform: translate(-50% -50%);
      width: 1.4rem;
      height: 1.4rem;
    }
     }
     .mbottom{
      // width: 6.4rem;
      // height: 2.04rem;
      // background: ;
      position: absolute;
      top:58%;
      left: 50%;
    transform: translate(-50%);
      .intro{
      width: 4.8rem;
    height: 2.45rem;
      }
      .word{
        position: absolute;
        top: 10%;
        left: 10%;
        top: 14%;
        left: 30%;
       width: 4rem;
       text-align: left;
       margin-top: 0.2rem;
       height: 1.5rem;
       overflow-y: scroll;
        .name{
          font-size: 0.18rem;
          margin: 0;
          color: #5CFFB9;
        }
        .txt{
    font-size: 0.16rem;
    color: #5CFFB9;
    width: 3.1rem;
    margin-top: 0rem;
        }
      }
     }

 }
 
}
</style>