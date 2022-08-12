<template>
  <div>
     <div class="mnewPage" >
            <div class="title">
                <div class="btn">
                    <a href="" class="instagram"></a>
                     <a href="" class="discord"></a>
                     <a href="" class="back" @click="$router.push({path:'/'})"></a>
                </div>
            </div>
            <div class="container">
                <div class="bgtop"></div>
                <div class="bg">

                    <div class="news-detail">
                        <span class="titleword">{{ title }}</span>
                      
                        <div class="content" v-html="cont"></div>
                    </div>

                </div>
                <div class="bgbottom"></div>
               
            </div>

        </div>
  </div>
</template>

<script>
import { newsDetail } from "../api/index";
export default {
 data() {
        return {
            title: "",
            time: "",
            cont: ""
        };
    },
 methods: {
        getDate(value) {
            let date = new Date(value * 1000);
            return (
                date.getFullYear() +
                "-" +
                parseInt(date.getMonth() + 1) +
                "-" +
                date.getDate()
            );
        }
    },
    created(){
        console.log(this.$route.query.id);
        newsDetail({id:this.$route.query.id}).then(res=>{
            console.log(res.data.result);
            this.title = res.data.result.title;
            this.time = this.getDate(res.data.result.releaseTime)
            this.cont = res.data.result.content[0]
        })
        window.scroll(0,0)

    }
}
</script>

<style lang="less" >
.mnewPage {
    .container {
        p {
            font-size: 19px;
            background: none !important;
            // color: #000 !important;
            color: #f3a1f8 !important;

            span {
                font-size: 0.3rem;
                background: none !important;
                // color: #000 !important;
                overflow-wrap: break-word;
                white-space: normal !important;
                color: #f3a1f8 !important;
            }
        }

        img {
            max-width: 80%;
            margin-top: 6px;
        }
    }
}
</style>
<style lang="less" scoped>
.html{
    padding: 0;
    margin: 0;
}
.mnewPage {
    width: 100%;
    .title {
        width: 100%;
        height: 3.87rem;
        // opacity: 0.5;
        background: url("../assets/common/info/pic.png") no-repeat center;
        background-size: 100% 100%;
        position: relative;
        .btn{
            align-items: center;
            display: flex;
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%);
            .instagram{
                width: 1.48rem;
                height: 0.51rem;
                background: url("../assets/common/image/new/instagram.png") no-repeat center;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .discord{
                width: 1.48rem;
                height: 0.51rem;
                background: url("../assets/common/image/new/discord.png") no-repeat center;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .back{
                 width: 0.72rem;
                height: 0.72rem;
                background: url("../assets/common/image/new/back.png") no-repeat center;
                background-size: 100% 100%;
                cursor: pointer;
            }
        }

        // .btn {
        //     position: absolute;
        //     bottom: 5%;
        //     right: 20%;
        //     display: flex;
        //     align-items: center;

        //     .facebookbtn {
        //         width: 1.58rem;
        //         height: 0.61rem;
        //         background: url("../assets/common/image/new/instagram.png") no-repeat center;
        //         background-size: 100% 100%;
        //         cursor: pointer;
        //     }

        //     .discord {
        //         width: 1.58rem;
        //         height: 0.61rem;
        //         background: url("../assets/common/image/new/discord.png") no-repeat center;
        //         background-size: 100% 100%;
        //         cursor: pointer;
        //     }

        //     .back {
        //         width: 0.72rem;
        //         height: 0.72rem;
        //         background: url("../assets/common/image/new/back.png") no-repeat center;
        //         background-size: 100% 100%;
        //         cursor: pointer;
        //     }
        // }
    }

    .container {
        width: 100%;
        min-height: 8rem;
        background: url("../assets/common/image/new/bg.png") repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        padding-bottom: 2.3rem;
        box-sizing: border-box;


        .bgtop {
            width: 6.13rem;
            height: 0.26rem;
            background: url("../assets/common/image/new/top.png") no-repeat;
            background-size: 100% 100%;
            margin-top: .8rem;
            box-sizing: border-box;
        }

        .bg {
            width: 6.13rem;
            min-height: 5rem;
            background: url("../assets/common/image/new/containerbg.png") no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-direction: column;
            align-items: center;



            .news-detail {
                display: flex;
                flex-direction: column;

                .titleword {
                    font-size: 0.3rem;
                    color: #f3a1f8;
                    padding: 0 rem;
                    text-align: center;
                }

                // .content {
                //     color: #f3a1f8;
                //     // padding: 0 0.6rem;
                //     margin-top: 5.6rem;
                //     font-size: 0.2rem;
                // }
            }


        }

        .bgbottom {
            width: 6.13rem;
            height: 0.26rem;
            background: url("../assets/common/image/new/bottom.png") no-repeat;
            background-size: 100% 100%;
            padding-bottom: -0.3rem;
        }


    }
}
</style>