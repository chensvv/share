<template>
    <div id="top_up_details">
        <div class="details_money">
            <span class="out"><span v-if="item.direction == 'in'" class="fuhao">+</span><span v-if="item.direction == 'out'" class="fuhao">-</span>{{item.amount | number}}</span><span class="unit">{{item.currency.toUpperCase()}}</span>
        </div>
        <div class="details_info">
            <span class="f_left">{{$t('message.types')}}</span><span v-if="item.direction == 'in'" class="f_right">{{$t('message.recharge')}}</span><span v-if="item.direction == 'out'" class="f_right">{{$t('message.consumption')}}</span>
        </div>
        <div class="details_info">
            <span class="f_left">{{$t('message.status')}}</span>
            <span class="f_right" v-if="item.state == 'pre_submitted'">{{$t('message.pre_submitted')}}</span>
            <span class="f_right" v-if="item.state == 'valid'">{{$t('message.valid')}}</span>
            <span class="f_right" v-if="item.state == 'submitted'">{{$t('message.submitted')}}</span>
            <span class="f_right" v-if="item.state == 'reexamine'">{{$t('message.reexamine')}}</span>
            <span class="f_right" v-if="item.state == 'canceled'">{{$t('message.canceled')}}</span>
            <span class="f_right" v-if="item.state == 'pass'">{{$t('message.pass')}}</span>
            <span class="f_right" v-if="item.state == 'reject'">{{$t('message.reject')}}</span>
            <span class="f_right" v-if="item.state == 'pre_transfer'">{{$t('message.pre_transfer')}}</span>
            <span class="f_right" v-if="item.state == 'wallet_transfer'">{{$t('message.wallet_transfer')}}</span>
            <span class="f_right" v-if="item.state == 'wallet_reject'">{{$t('message.wallet_reject')}}</span>
            <span class="f_right" v-if="item.state == 'confirmed'">{{$t('message.confirmed')}}</span>
            <span class="f_right" v-if="item.state == 'confirm_error'">{{$t('message.confirm_error')}}</span>
            <span class="f_right" v-if="item.state == 'repealed'">{{$t('message.repealed')}}</span>
            <span class="f_right" v-if="item.state == 'safe'">{{$t('message.safe')}}</span>
            <span class="f_right" v-if="item.state == ''">{{$t('message.nostate')}}</span>
        </div>
        <div class="details_info">
            <span class="f_left">{{$t('message.date')}}</span><span class="f_right">{{item['created-at'] | formatDate}}</span>
        </div>
        <div class="details_info">
            <span class="f_left" v-if="isshow">TXID</span><span class="f_right">{{item['to-address']}}</span>
        </div>
    </div>
</template>

<script>
import { formatDate } from "../../filters/filter.js";
export default {
    data(){
        return{
            item:"",
            token:"",
            language:"",
            isshow:true
        }
    },
        created(){
        this.item = this.$route.query.item
        this.token = this.$route.query.token
        this.language = this.$route.query.language
        console.log(this.item)
        if(this.item['to-address'] ==''){
            this.isshow = false
        }
        if (this.language == 'zh-TW'){
            this.language = 'zh-HK'
            this.$i18n.locale = 'tw'
            document.title = this.$t('message.details')
        }else if (this.language == 'en'){
            this.language = 'en-US'
            this.$i18n.locale = 'en'
            document.title = this.$t('message.details')
        }else if(this.language == 'kor'){
            this.language = 'ko-KR'
            this.$i18n.locale = 'kor'
            document.title = this.$t('message.details')
        }else if(this.language == 'zh-CN'){
            this.$i18n.locale = 'zh'
            document.title = this.$t('message.details')
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
            return formatDate(date, 'hh:mm:ss MM/dd/yyyy')
        }
    }
}
</script>

<style>
.details_info{
    padding-top: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.fuhao{
    font-size: 30px;
}
.f_left{
    flex: 1;
    text-align: right;
    font-size: 12px;
    color: rgba(145,145,145,1);
}
.f_right{
    flex: 3;
    padding-left: .3rem;
}
.details_money{
    text-align: center;
    padding-top: 35px;
}
.out{
    font-size: 30px;
    font-weight: 600;
}
.unit{
    font-size: 16px;
}
</style>
