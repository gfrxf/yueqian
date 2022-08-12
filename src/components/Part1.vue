<template>
  <div> 
    <div class="mcontain">
      <video class="video"
      data-autoplay
     
      loop
      muted
      webkit-playsinline="true"
      playsinline="true"
      >


    <!-- <source class="video-container"
                    src="../assets/common/phoneImage/openScreen/video.mp4"
                    type="video/mp4"> -->
                    <source class="video-container"
                    src="../assets/common/phoneImage/openScreen/video.mp4"
                    type="video/mp4"/>

      </video>
  
      
      <div class="mbox">
        <div class="top">
          <img src="../assets/common/image/openScreen/logo.webp" alt="" class="logo">
          <div class="mbtn">
            <div class="language" @click.stop="$emit('showlanguage')">
              <span>{{this.$i18n.locale}}</span>
                 <i
                  :class="
                    this.langListShow == true ? 'select' : ''
                    "
                  ></i>
                  <div class="lang-list" v-if="langListShow">
                    <span
                    v-for="(item,index) in this.langList"
                    :key="index"
                    @click.stop="$emit('changeLang',item)"
                    >
                      {{item}}
                    </span>
                  </div>
              </div>
            <a href="" class="Facebook"></a>
            <a href="" class="Discord"></a>
          </div>
        </div>
       <img class="play" src="../assets/common/phoneImage/openScreen/play.png" alt="" @click="$emit('showVideo','KYrPf1J0UPQ')">
      <div class="mbottom">
        <a href="" class="apple"></a>
        <a href="" class="google"></a>               
      </div>
        </div>
      
  </div>
  </div>
</template>

<script>
export default {
  props:["langList","langListShow"],
data(){
return{
// langListShow:false,
}
},
methods:{
  // showlanguage(){
  //   this.$nextTick(function(){
  //      this.langListShow = !(this.langListShow);
  //   })
   
  // }
},
}
</script>

<style lang="less" scoped >
.mcontain{
  width: 100%;
  height: 100vh;
  background: url("../assets/common/image/openScreen/bg.webp") no-repeat center;
  background-size: cover;
  position: relative;
   .video {
        // height: 100vh;
        width: 100% !important;
        // height: 100vh !important;
        .video-container {
            width: 100% !important;
            // height: 100vh !important;
        }
    }
  .mbox{
   position: absolute;
   top: 0;
    .top{
     display: flex;
      .logo{
       
        width: 1.18rem;
       height: 1.12rem;
        
      }
      .mbtn{
       display: flex;
        align-items: center;
        .language{
        width: 1.18rem;
        height: 0.51rem;
        display: flex;
        align-items: center;
        justify-content: center;
          
        background: url(../assets/common/phoneImage/openScreen/lang.png) no-repeat;
        background-size: 100% 100%;
        span{
          width: 0.65rem;
          height: 0.17rem;
          font-size: 0.18rem;
          font-family: Arial;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 0.17rem;
          text-align: center;
          margin-left: -0.1rem;
        }
        i {
            position: absolute;
            top: 6%;
            left: 46%;
            transform: translate(-50%, -50%);
            width: 0.23rem;
            height: 0.2rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAYAAABmvqYOAAACVklEQVQ4jY2V3WoTURCAv022TdTiH3jhCwi+im/glW/Q1/BOil5ZRAV/UPCmXhREBS8qRdRelFIaUYpQYyB/NUk3+3/kJHPayW5tHRjO7tnZb2ZnZud45sYuSrxjFLVqMXJtlFrJnY2vXq4otfvVwp5XAOdKMyCVe09WU4Tb+3nRmqxzypGnwBaYADEQyRqLE1OEVwVUB84BC7LWxYkvDowALDAEAmAEHBS+qpQWCzkLXAAuA5eA87JXE5tcwBY6BPoSmFHpSR3cU5FP4XeuLrJQuU5s6iSmRsYcufExeHgYKl5KlQTfi5n3QiLzncXmbXEaOaavqu4c1NgY73Dz4q1/dElZVgar8mVV/U6l0AFTR0/3G3yLvv4XeDfeZLm3qYp92KIOrjtgqkud10QmPhGcmIR73RWV68y1oY7cwVNpp5CfSZvV4ccT4W9Hn2lELemaWDkowTMxGEtrDXjcX6OZ9I4Ft9MBD3ofJnZT+7G8X4Lrn8K22B+gS2paPOy/wRzm8SiUJ/vviEwT6Ih9oOA5hYLmAg+lf7tAi/XgCxvjrRn4dtjg/Wh98nxqN5TIE1XQUrfk4t1F3wZ+sdx7SWiCiVVsIu73ngN78lxHnevBVWFWXFFDyaON6jd7yTZrBy8mlp+CV/yItyb7R1GHanAdil+AG5WeQP3WIXe7z7hWu8JS55E4HkoxXTpynRIrxXnupKom4xkZXu4PzNTQClUbZkVIMXJd3MnwUTA3Fd0zqzbiUjpOg7u+d6uFuEPD7enDYrZVT4G76F0N9JHnnJeOtRkB/gJtfCfafoQjkgAAAABJRU5ErkJggg==) no-repeat;
             background-size: 100% 100%;
                    }

         .select {
                        //   background: url('~@/assets/home/1/select.png') no-repeat;
                        background-size: 100% 100%;
                    }
         .lang-list{
         position: absolute;
         left: 27%;
         top: 8.5%;
         background-color: rgba(0, 0, 0, 0.5);
         width: 1.1rem;
         text-align: center;
          span {
            display: block;
            margin: 0.1rem;
          }
         }
        
        }
        .Facebook{
           width: 1.18rem;
          height: 0.51rem;
         
          // background: rgba(0,0,0,0.6500);
          // border-radius: 0.1rem;
          // line-height: 0.41rem;
        background: url(../assets/common/phoneImage/openScreen/facebook.png) no-repeat;
        background-size: 100% 100%;

        }
        .Discord{
          
           width: 1.18rem;
          height: 0.51rem;
          // color: #fff;
          // background: rgba(0,0,0,0.6500);
          // border-radius: 0.1rem;
        background: url(../assets/common/phoneImage/openScreen/facebook.png) no-repeat;
        background-size: 100% 100%;
        }
      }
    }
  .play{
        width: 2.91rem;
        height: 2.91rem;
        margin-top: 4.22rem;
  }
  .mbottom{
    display: flex;
    align-items: center;
    justify-content: center;
    .apple{
        width: 2rem;
        height: 0.61rem;
        background: url(../assets/common/phoneImage/openScreen/apple.webp) no-repeat;
        background-size: 100% 100%;
    }
    .google{    
      width: 2rem;
      height: 0.61rem;
      background: url(../assets/common/phoneImage/openScreen/google.png) no-repeat;
        background-size: 100% 100%;
    }
  }
  }
  
}
</style>