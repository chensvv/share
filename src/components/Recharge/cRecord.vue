<template>
    <div id='c_record'>
        <div class="tab">
            <span>{{$t('message.number')}}</span>
            <span>{{$t('message.status')}}</span>
            <span>{{$t('message.timer')}}</span>
        </div>
        <div class="list_info">
            <div v-for="item in arrList" :key="item.id" class="list" @click="sendInfo(item)">
                <span><span v-if="item.direction == 'in'">+</span><span v-if="item.direction == 'out'">-</span>{{item.amount | number}}{{item.currency.toUpperCase()}}</span>
                <span v-if="item.state == 'pre_submitted'">{{$t('message.pre_submitted')}}</span>
                <span v-if="item.state == 'valid'">{{$t('message.valid')}}</span>
                <span v-if="item.state == 'submitted'">{{$t('message.submitted')}}</span>
                <span v-if="item.state == 'reexamine'">{{$t('message.reexamine')}}</span>
                <span v-if="item.state == 'canceled'">{{$t('message.canceled')}}</span>
                <span v-if="item.state == 'pass'">{{$t('message.pass')}}</span>
                <span v-if="item.state == 'reject'">{{$t('message.reject')}}</span>
                <span v-if="item.state == 'pre_transfer'">{{$t('message.pre_transfer')}}</span>
                <span v-if="item.state == 'wallet_transfer'">{{$t('message.wallet_transfer')}}</span>
                <span v-if="item.state == 'wallet_reject'">{{$t('message.wallet_reject')}}</span>
                <span v-if="item.state == 'confirmed'">{{$t('message.confirmed')}}</span>
                <span v-if="item.state == 'confirm_error'">{{$t('message.confirm_error')}}</span>
                <span v-if="item.state == 'repealed'">{{$t('message.repealed')}}</span>
                <span v-if="item.state == 'safe'">{{$t('message.safe')}}</span>
                <span v-if="item.state == ''">{{$t('message.nostate')}}</span>
                <span>{{item['created-at'] | formatDate}}</span>
            </div>
        </div>
        <div class="toast" v-if="isshow">
            <img src="../../../static/img/empty.png" class="empty_img">
            {{$t('message.norecord')}}
        </div>
    </div>
</template>

<script>
import { formatDate } from "../../filters/filter.js";
export default {
    data(){
        return{
            arrList:[],
            currency:"",
            token:"",
            language:"",
            isshow:false
        }
    },
    created(){
        this.language = this.$route.query.language
        console.log(this.language)
        if (this.language == 'zh-TW'){
            this.language = 'zh-HK'
            this.$i18n.locale = 'tw'
            document.title = this.$t('message.titleRecord')
        }else if (this.language == 'en'){
            this.language = 'en-US'
            this.$i18n.locale = 'en'
            document.title = this.$t('message.titleRecord')
        }else if(this.language == 'kor'){
            this.language = 'ko-KR'
            this.$i18n.locale = 'kor'
            document.title = this.$t('message.titleRecord')
        }else if(this.language == 'zh-CN'){
            this.$i18n.locale = 'zh'
            document.title = this.$t('message.titleRecord')
        }
        this.token = this.$route.query.proToken
        this.currency = this.$route.query.currencyName.toLowerCase()
        console.log(this.currency)
        // console.log(this.token +'$$$$$$'+ this.currency)
        let url = 'http://pro-web--dev-5.huobiapps.com/-/x/pro/v1/query/finances';
        this.$http.get(url,{
            params:{
                currency:this.currency
            },
            headers:{
                "HB-PRO-TOKEN":'NYX4sdeyUJmOJ9vZ-CJp2NCUw9m9Gmc_28kXbaVnN-r9tUPtM5a_I05gXRcTl6OI'
            }
        }).then(res=>{
            
            this.arrList = res.data.data
            console.log(this.arrList)
            if(this.arrList == null || this.arrList.length == 0){
                this.isshow = true
            }
        })
    },
    methods:{
        sendInfo(item){
            this.$router.push({
                path:'/topupdetails',
                query:{
                    item:item,
                    token:this.token,
                    language:this.language
                }
            })
        }
    },
    filters: {
        number(value) {
            var toFixedNum = Number(value).toFixed(6);
            var realVal = toFixedNum.substring(0, toFixedNum.toString().length - 1);
            return realVal;
        },
        formatDate(time) {
            let date = new Date(time)
            return formatDate(date, 'hh:mmm MM/dd')
        }
    }
}
</script>

<style scoped>
.tab{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    background: #fff;
    box-shadow:0px 0px 1px rgba(94,94,94,0.16);
}
.tab span{
    color:rgba(145,145,145,1);
    font-size: 13px;
    flex: 1;
    text-align: center;
}
.list{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-top: 20px;
}
.list span{
    font-size: 13px;
    flex: 1;
    text-align: center;
}
.error{
    color:rgba(197,197,197,1);
}
.list_info{
    padding-top: 48px;
}
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(145,145,145,1);
    text-align: center;
}
.empty_img{
    width: 112px;
    height: 86px;
    display: block;
    padding-bottom: 40px;
}
</style>

