<template>
    <div id="currency_list">
        <div class="search_div">
            <input type="text" :placeholder="$t('message.search')" v-model="search" class="search"/>
        </div>
        <ul v-for="(item,index) in goodsList"  :key="index">
            <li class="li" @click="sendCurrency(item)"><span><img :src="item.coinIcon" class="imgicon"></span>{{item.coinName}}</li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import title from '../../utils/title';
var timestamp = Date.parse(new Date());
export default {
    data(){
        return{
            list:[],
            search:'',
            language:"",
            proToken:"",
            imToken:"",
            errmsg:""
        }
    },
    created(){
        this.language = this.$route.query.language
        this.proToken = this.$route.query.proToken
        this.imToken = this.$route.query.imToken
        // console.log(this.imToken)
        if (this.language == 'zh-HK'){
            this.$i18n.locale = 'tw'
            title.set(this.$t('message.listTitle'))
        }else if (this.language == 'en-US'){
            this.$i18n.locale = 'en'
            title.set(this.$t('message.listTitle'))
        }else if(this.language == 'ko-KR'){
            this.$i18n.locale = 'kor'
            title.set(this.$t('message.listTitle'))
        }else if(this.language == 'zh-CN'){
            this.$i18n.locale = 'zh'
            title.set(this.$t('message.listTitle'))
        }
        let url = 'http://dawn-broker-pro.dev-5.huobiapps.com/v1/settings/currencys'
        this.$http.get(url,{
            headers:{
                "Accept-Language":this.language
            }
        }).then(res=>{

        })
        let currencyUrl = "/currency/queryUserCurrencyList"
        this.$http({
            method:'post',
            url:currencyUrl,
            data:{
                language:"zh-CN",
                transid:timestamp
            },
            headers:{
                "HB-IM-TOKEN":this.imToken
            }
        }).then(res=>{
            this.list = res.data.result
            console.log(this.list)
            this.errmsg = res.data.msg
        })
    },

    computed:{
            goodsList(){
                let search = this.search;
                let searchVal = '';
                if(search){
                    searchVal = this.list.filter((item)=>{
                        return Object.keys(item).some((key)=>{
                            return String(item.coinName).toLowerCase().indexOf(search.toLowerCase())>-1
                        })
                    })
                    return searchVal
                }else{
                    searchVal = this.list;
                    return searchVal;
                }
            }
        },
    methods:{
        sendCurrency(item) {
            this.$router.push({
                path:'/recharge',
                query:{
                    clickName:item.coinName,
                    language:this.language,
                    proToken:this.proToken,
                    imToken:this.imToken
                }
            })
        }
    }
}
</script>

<style scoped>
#currency_list{
    background: #fff;
}
.li{
    padding: 18px 0 18px 15px;
    border-top: 1px solid rgba(244,244,244,1);
    list-style: none;
    display: flex;
    align-items: center;
}
.search{
    background: rgba(242,242,242,1);
    border-radius: 5px;
    border: none;
    height: 30px;
    outline: none;
    padding-left: 10px;
    width: 100%;
}
::placeholder{
    color: #D0D0D0;
}
.search_div{
    padding: 15px 10px;
    display: flex;
}
.imgicon{
        width: 25px;
    height: 25px;
    vertical-align: middle;
    padding-right: 20px;
}
</style>
