<template>
    <div>
         <NavPage :navItem="navItem" @changeNavItem="changeNavItem"></NavPage>
        <full-page ref="fullpage" :options="options">
           <div class="section">
               <Part1
               :langList="langList"
               @changeLang="changeLang"
               @showlanguage = "showlanguage"
               :langListShow = "langListShow"
               @showVideo = "showVideo"
               >
               </Part1>        
           </div>            
           <div class="section">   
                   <Part2
                    :newsList1="newsList1"
                    :newsList2="newsList2"
                    :newsList3="newsList3"
                    :newsList4="newsList4"
                   ></Part2>  
           </div>          
           <div class="section">      
                <Part3></Part3>
            </div>       
           <div class="section">      
                <Part4></Part4>
            </div>       
           <div class="section">      
                <Part5></Part5>
            </div>       
           <div class="section" >      
                <Part6 :mapItem="mapItem"
                @changeMapItem="changeMapItem"
                ></Part6>
            </div>       
           <div class="section">      
                <Part7 :mimgsUrl1="mimgsUrl1" :misMedia="misMedia" :mimgsUrl2="mimgsUrl2" @changeNum="changeNum" @showVideo="showVideo"></Part7>
            </div>
           
          
     </full-page>
  <videomodel v-if="showvideo" :youtobe = "youtobe" @closevideo="closevideo" ></videomodel>
 
    </div>
</template>
 
<script>    

// import { video } from "@/components/model";
import videomodel from "../components/model/videoModel.vue"
import Part1 from "../components/Part1.vue";
import Part2 from "../components/Part2.vue";
import Part3 from "../components/Part3.vue";
import Part4 from "../components/Part4.vue";
import Part5 from "../components/Part5.vue";
import Part6 from "../components/Part6.vue";
import Part7 from "../components/Part7.vue";
import NavPage from "../components/NavPage.vue"
import { newsDetail } from "@/api";


export default {
    name: 'HomePage',
     components: {
    Part1,
    Part2,
    Part3,
    Part4,
    Part5,
    Part6,
    Part7,
    videomodel,
    NavPage
    
  
}, 
    data() { 
           return { 
            navItem:1,
            misMedia:true,
            mapItem:1,
            showvideo : false,
            
                  options: {  
                
                  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE", 
                //   afterLoad: this.afterLoad,// 当前页面回调  
                  scrollOverflow: true,                  
                  scrollBar: false,                 
                  menu: "#menu",                  
                // navigation: true,                
                anchors: [ 'Part1', 'Part2','Part3','Part4','Part5','Part6','Part7'], //定义锚链接
                     //设置背景颜色      
                 sectionsColor: [   
                     "#fff",    
                    "#fff",      
                    "#e4e4e4",    
                    "#fff",             
       ]             
   },
    langList: [
                "English",
                "Français",
                "Deutsch",
                "Português",
                "Pусский"
            ], 
    langFlag: "",
    loginRegConfig: {
                lang: "en",
                appId: "831464610652030",
                client: "mtlen",
                isDebug: false,
                googleClientId: "test"
            },   
            langListShow:false,
            youtobe:'',
            newslist:[],  
            newsList1: null,
            newsList2: null,
            newsList3: null,
            newsList4: null,
             mimgsUrl1: [
                {
                    url: require("../assets/common/phoneImage/videoPage/video1.png"),
                    video: "KYrPf1J0UPQ"
                },
                {
                    url: require("../assets/common/phoneImage/videoPage/video4.png"),
                    video: "-JqnApYdVP8"
                }
            ],
            mimgsUrl2: [
                require(`../assets/${this.$i18n.locale}/phoneImage/shop/pic1.jpg`),
                require(`../assets/${this.$i18n.locale}/phoneImage/shop/pic2.jpg`),
                require(`../assets/${this.$i18n.locale}/phoneImage/shop/pic3.jpg`),
                require(`../assets/${this.$i18n.locale}/phoneImage/shop/pic4.jpg`),
                require(`../assets/${this.$i18n.locale}/phoneImage/shop/pic5.jpg`),
                require(`../assets/${this.$i18n.locale}/phoneImage/shop/pic6.jpg`)
            ],
               
  }      
  },       
         
methods: {  
    // 底部导航条
    changeNavItem(val){
        this.navItem = val;
        switch (val){
            case 1:
                this.$refs.fullpage.api.moveTo(1);
                break;
              case 2:
                    this.$refs.fullpage.api.moveTo(2);
                    break;
                case 3:
                    this.$refs.fullpage.api.moveTo(4);
                    break;
                case 4:
                    this.$refs.fullpage.api.moveTo(5);
                    break;
                case 5:
                    this.$refs.fullpage.api.moveTo(6);
                    break;
                case 6:
                    this.$refs.fullpage.api.moveTo(7);
                    break;
        }

    },
    // part7改变轮播图展示
    changeNum(val){
        switch(val){
            case 1: this.misMedia = true;
            break;
            case 2: this.misMedia = false;
            break;
        }
    },
    // 移动端改变图片
    changeMapItem(val){
        this.mapItem = val;
    },
    closevideo(){
        // this.$nextTick(function(){
        //      this.showvideo = false;
        // }) 
        this.showvideo = false;
        
        
    },
    showVideo(val){
    this.showvideo = true;
    this.youtobe = val;
    console.log(this.youtobe);
    }, 
    showlanguage(){
    this.langListShow = !(this.langListShow);
    },    
   changeLang(lang){
    localStorage.setItem("locale",lang);
    this.$i18n.locale = lang;
    this.langFlag = lang;
    switch(lang){
        case "English":
            this.loginRegConfig.lang = "en";
            break;
        case "Français":
            this.loginRegConfig.lang = "fr";
            break;
        case "Deutsch":
            this.loginRegConfig.lang = "de";
            break;
        case "Português":
            this.loginRegConfig.lang = "pt";
            break;
        case "Pусский":
            this.loginRegConfig.lang = "ru";
            break;

    }
    this.langListShow = false;
   },
// 获取新闻列表
   getNewsList(langID){
    let params = {
        id:langID,
        type:1,
        limit:100
    };
    newsDetail(params).then(res => {
        // 
        // let newsList = res;
        console.log(res);
       let newsList = res.data.result.children.map(item => {
                    return {
                        key: item.abstract,
                        intro: item.children
                    };
                });
            // console.log(newsList);
            newsList.map(item => {
                    console.log(item);
                    switch (item.key) {
                        case "ads":
                            this.newsList1 = item.intro;
                            break;
                        case "rules":
                            this.newsList2 = item.intro;
                            break;
                        case "events":
                            this.newsList3 = item.intro;
                            break;
                        case "news":
                            this.newsList4 = item.intro;
                            break;
                    }
                });
                // this.newsList.sort((a, b) => b.top - a.top);
                // console.log(this.newsList);
    })
   },
    },
    mounted(){
        switch(this.langFlag){
            case "English":
             this.getNewsList(process.env.VUE_APP_NEWS_EN);
             break;
            case "Français":
             this.getNewsList(process.env.VUE_APP_NEWS_FR);
             break;
            case "Deutsch":
             this.getNewsList(process.env.VUE_APP_NEWS_DE);
             break;
            case "Português":
             this.getNewsList(process.env.VUE_APP_NEWS_PT);
             break;
            case "Pусский":
             this.getNewsList(process.env.VUE_APP_NEWS_RU);
             break;
        }
       
    },
    watch:{
        langFlag:function(){
            switch(this.langFlag){
              case "English":
             this.getNewsList(process.env.VUE_APP_NEWS_EN);
             break;
            case "Français":
             this.getNewsList(process.env.VUE_APP_NEWS_FR);
             break;
            case "Deutsch":
             this.getNewsList(process.env.VUE_APP_NEWS_DE);
             break;
            case "Português":
             this.getNewsList(process.env.VUE_APP_NEWS_PT);
             break;
            case "Pусский":
             this.getNewsList(process.env.VUE_APP_NEWS_RU);
             break;
            }
        }
    },
    created(){
        if(localStorage.getItem("locale")){
            this.langFlag = localStorage.getItem("locale")
        }
        else {
            this.langFlag = "English";
        }
    }
    }
</script>
 
<style>
 
</style>