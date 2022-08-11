<template>
    <div>
        
        <full-page ref="fullpage" :options="options">
           <div class="section">
               <Part1
               :langList="langList"
               @changeLang="changeLang"
               @showlanguage = "showlanguage"
               :langListShow = "langListShow"
               >
               </Part1>        
           </div>            
           <div class="section">   
                   <Part2></Part2>  
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
           <div class="section">      
                <Part6></Part6>
            </div>       
           <div class="section">      
                <Part7></Part7>
            </div>       
          
     </full-page>
     <!-- <Part1></Part1>
     <Part2></Part2>
     <Part3></Part3> -->
    </div>
</template>
 
<script>    
import Part1 from "../components/Part1.vue";
import Part2 from "../components/Part2.vue";
import Part3 from "../components/Part3.vue";
import Part4 from "../components/Part4.vue";
import Part5 from "../components/Part5.vue";
import Part6 from "../components/Part6.vue";
import Part7 from "../components/Part7.vue";
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
  
}, 
    data() { 
           return { 
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
  }      
  },       
         
methods: {   
    showlanguage(){
    this.langListShow = true;
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