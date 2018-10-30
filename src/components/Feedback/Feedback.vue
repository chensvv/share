<template>
<div class="feedback">
    <div class="head">{{$t('message.select')}}</div>
    <div>
        <div  class="feed_con" v-for="(item,index) in conList" :key="index" @click="send(item)">
            {{item.con}}
        </div>
    </div>  
</div>
    
</template>

<script>
import title from '../../utils/title.js'
let Base64 = require("js-base64").Base64;
export default {
    data(){
        return{
            conList:[],
            language:""
        }
    },
    created(){
        // this.token = decodeURIComponent(this.$route.query.token)
        // console.log(this.$route.query.token)
        this.language = decodeURIComponent(this.$route.query.language)
        console.log(this.language)
        // this.userId = Base64.decode(decodeURIComponent(this.$route.query.userId))
        // console.log(this.userId)
        // this.userName = Base64.decode(decodeURIComponent(this.$route.query.userName))
        // console.log(this.userName)
        // this.mobile = Base64.decode(decodeURIComponent(this.$route.query.mobile))
        // console.log(this.mobile)
        // this.nationCode = Base64.decode(decodeURIComponent(this.$route.query.nationCode))
        // console.log(this.nationCode)
        if (this.language == 'zh-TW'){
            this.$i18n.locale = 'tw'
            title.set(this.$t('message.fankui'))
            
        }else if (this.language == 'en'){
            this.$i18n.locale = 'en'
            title.set(this.$t('message.fankui'))
        }else if(this.language == 'kor'){
            this.$i18n.locale = 'kor'
            title.set(this.$t('message.fankui'))
        }else if(this.language == 'zh-CN'){
            this.$i18n.locale = 'zh'
            title.set(this.$t('message.fankui'))
        }
        this.conList = [
            {'con':this.$t('message.registers')},
            {'con':this.$t('message.login')},
            {'con':this.$t('message.cover')},
            {'con':this.$t('message.group')},
            {'con':this.$t('message.assets')},
            {'con':this.$t('message.contacts')},
            {'con':this.$t('message.others')}
        ]
    },
    methods:{
        send(item){
            this.$router.push({
                path:'/feedbackinfo',
                query:{
                    con:item.con,
                    token:this.$route.query.token,
                    language:this.$route.query.language,
                    userId:this.$route.query.userId,
                    userName:this.$route.query.userName,
                }
            })
        },
    }
}
</script>

<style scoped>

.head{
    padding: 10px 0 10px 15px;
    background: rgba(244,244,244,1);
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(142,142,147,1);
}
.feed_title{
    display: block;
    padding: 7px 0 7px 15px;
    background: rgba(235,235,235,1);
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51,51,51,1);
}
.feed_con{
    margin: 0 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: .8px solid rgba(244,244,244,1);
    background: url(../../../static/img/youjt.png) center right no-repeat;
    background-size: 6px 10px ;
}
.feed_con:last-child{
    border-bottom: none;
}
</style>
