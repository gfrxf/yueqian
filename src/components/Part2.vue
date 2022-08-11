<template>
  <div> 
    <div class="mcontain">
      <div class="mbox">
       <div class="header">
          <img src="../assets/wap/news/pic1.png" alt="" class="pic">
         
       </div>
        <div class="middle">
            <div class="mtitle">
              <span @click="changeisshow('newsList1')">
                {{$t("news.Title_1")}}
              </span>
              <span @click="changeisshow('newsList2')">
                {{$t("news.Title_2")}}
              </span>
              <span @click="changeisshow('newsList3')">
                {{$t("news.Title_3")}}
              </span>
              <span @click="changeisshow('newsList4')">
                {{$t("news.Title_4")}}
              </span>
            </div>
            <div class="mnews">
                <HdScroll>
                  
                </HdScroll>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hdscroll from "./model/hdScroll.vue"
import HdScroll from "./model/hdScroll.vue"
export default {
    data() {
        return {
            isShow: false
        };
    },
    comments: {
        Hdscroll,
    },
    methods: {
        changeisshow() {
            this.isShow = true;
        }
    },
    components: { HdScroll }
}
</script>

<style lang="less" scoped>
.mcontain{
  width: 100%;
  height: 100vh;
  background: url(../assets/wap/news/bg.png) no-repeat;
  background-size: 100% 100%;
  .mbox{
    position: absolute;
    width: 4.2rem;
    height: 7rem;
    background: url(../assets/wap/news/newsbg.png) no-repeat center;
   background-size: 100% 100%;
   top: 16.5%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    .header{
      width: 4.0rem;
      height: 2.5rem;
      // border-radius: 00.1rem;
      // background: url(../assets/wap/news/newsbg.png) no-repeat center;
      //  background-size: 100% 100%;
      .pic{
      width: 4.0rem;
    height: 2.5rem;
    margin: 0.3rem 0.2rem 0 0.1rem;
      }

    }
    .middle{
      .mtitle{
         width: 4.0rem;
         height: 0.64rem;
         background: url(../assets/wap/news/titlebg.png) no-repeat center;
         background-size: 100% 100%;
         margin: 0.26rem 0.1rem 0;
         display: flex;
         font-size: 0.18rem;
         color: #fff;
         padding: 0;
         justify-content: center;
          align-items: center;
          span{
            font-size: 0.16rem;
            color: #fff;
            margin: 0 0.2rem;
          }
      }
      
    }
  }
}
</style>