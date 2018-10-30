<template>
    <div id="report">
        <div class="re_d" v-if="type == 0">{{$t('message.reason')}}</div>
        <div class="re_d" v-if="type == 1">{{$t('message.groups')}}</div>
        <div class="re_padd">
            <div v-for="(item,index) in conList" :key="index" class="re_conlist" @click="sendItem(item)">
                <div class="re_item">{{item.item}}</div>
                <span><img src="../../../static/img/youjt.png" class="re_img"></span>
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
            language:"",
        }
    },
    created(){
        
        // this.token = decodeURIComponent(this.$route.query.token)
        // console.log(this.$route.query.token)
        this.language = decodeURIComponent(this.$route.query.language)
        console.log(this.language)
        // this.fromId = Base64.decode(decodeURIComponent(this.$route.query.fromId))
        // console.log(this.$route.query.fromId)
        // this.fromName = Base64.decode(decodeURIComponent(this.$route.query.fromName))
        // console.log(this.$route.query.fromName)
        // this.fromMobile = Base64.decode(decodeURIComponent(this.$route.query.fromMobile))
        // console.log(this.$route.query.fromMobile)
        // this.toId = Base64.decode(decodeURIComponent(this.$route.query.toId))
        // console.log(this.$route.query.toId)
        // this.toName = Base64.decode(decodeURIComponent(this.$route.query.toName))
        // console.log(this.$route.query.toName)
        this.type = this.$route.query.type
        // console.log(this.$route.query.type)
        if (this.language == 'zh-TW'){
            this.$i18n.locale = 'tw'
            title.set(this.$t('message.report'))
            
        }else if (this.language == 'en'){
            this.$i18n.locale = 'en'
            title.set(this.$t('message.report'))
        }else if(this.language == 'kor'){
            this.$i18n.locale = 'kor'
            title.set(this.$t('message.report'))
        }else if(this.language == 'zh-CN'){
            this.$i18n.locale = 'zh'
            title.set(this.$t('message.report'))
        }
        this.conList=[
                {item:this.$t('message.pornography')},
                {item:this.$t('message.Fraud')},
                {item:this.$t('message.advertising')},
                {item:this.$t('message.Harassment')},
                {item:this.$t('message.other')}
        ]
    },
    methods:{
        sendItem(item){
            // console.log(item)
            this.$router.push({
                path:'/reportinfo',
                query:{
                    clickItem:item.item,
                    fromId:this.$route.query.fromId,
                    fromName:this.$route.query.fromName,
                    toId:this.$route.query.toId,
                    toName:this.$route.query.toName,
                    type:this.type,
                    token:this.$route.query.token,
                    language:this.language
                }
            })
        }
    }
}
</script>

<style scoped>
#report{
    width: 100%;
    height: 100%;
    background: #fff;
}
.re_d{
    background: #f4f4f4;
    padding: 10px 0 10px 15px;
    font-size:14px;
    font-weight:400;
    color:rgba(142,142,147,1);
}
.re_padd{
    padding-top: 10px;
}
.re_conlist {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin: 0 15px 0 15px;
    border-bottom: 1px solid rgba(244,244,244,1);
}
.re_img{
    width: 6px;
    height: 10px;
}
.re_item{
    font-size: 15px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51,51,51,1);
}
</style>
