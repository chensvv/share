<template>
    <div class="recharge">
        <div>
            <div class="head" @click="sendInfo()">
               <span class="head_current">{{$t("message.text")}}</span>
                <div class="current_right">
                    <img v-if="imgshow" :src="icon" class="icon">
                    <span class="head_currency">{{currenryName}}</span>
                </div> 
            </div>
        </div>
        <div class="line"></div>
        <div class="main flex1" v-if="isshow">
            <div class="re_main">
                <div class="main_er" v-if="imgshow">
                    <canvas id="canvas"></canvas>
                    <div class="img_div"><img src="" id="save_img" class="er"/></div>
                    <button class="click_er" @click="downImg()" id="save_href">{{$t("message.qrCode")}}</button>
                    <p class="er_link" id="copyObj">{{urlAddress}}</p>
                    <button class="er_btn" @click="copyUrl()" id="btn">{{$t('message.copyAddress')}}</button>
                </div>
                
            </div>
            
            <div class="shuom">
                {{$t('message.shuom')}}
            </div>
            <div class="main_ul" v-if="noshow">
                <div class="li">{{currenryInfo['deposit-desc']}}</div>
                <div class="li">{{currenryInfo['withdraw-desc']}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import QRCode from 'qrcode'
import Clipboard from 'clipboard'
import { Toast } from 'mint-ui'
import title from '../../utils/title'
var timestamp = Date.parse(new Date());
export default {
    data(){
        return{
            currenryName:"",
            urlAddress:"",
            codes:'',
            name:"",
            icon:"",
            iconList:[],
            currenryInfo:[],
            base64Img:"",
            isshow:true,
            noshow:true,
            imgUrl:"",
            proToken:"",
            imToken:"",
            name:"",
            language:"",
            imgshow:true,
            toast:this.$t('message.toast'),
            errorToast:this.$t('message.error')
        }
    },
    components: {
      QRCode: QRCode
    },
    mounted(){
        this.proToken = this.$route.query.proToken
        this.imToken = decodeURIComponent(this.$route.query.imToken)
        this.language = this.$route.query.language
        this.currenryName = this.$route.query.clickName
        
        if (this.language == 'zh-TW' || this.language == 'zh-HK'){
            this.language = 'zh-HK'
            this.$i18n.locale = 'tw'
            title.set(this.$t('message.title'))
        }else if (this.language == 'en' || this.language == 'en-US'){
            this.language = 'en-US'
            this.$i18n.locale = 'en'
            title.set(this.$t('message.title'))
        }else if(this.language == 'kor' || this.language == 'ko-KR'){
            this.language = 'ko-KR'
            this.$i18n.locale = 'kor'
            title.set(this.$t('message.title'))
        }else if(this.language == 'zh-CN'){
            this.language = 'zh-CN'
            this.$i18n.locale = 'zh'
            title.set(this.$t('message.title'))
        }
        
        let url2 = "/currency/queryAllCurrency"
        if(this.$route.query.clickName == undefined){
            this.$http({
                method:'post',
                url:url2,
                data:{
                    language:this.language,
                    transid:timestamp
                },
                headers:{
                    "HB-IM-TOKEN":this.imToken
                }
            }).then(res=>{
                this.currenryName = res.data.result[0].coinName
                this.icon = res.data.result[0].coinIcon
                this.getLinkUrl();
                this.getInfo();
                // console.log(this.currenryName)
            }).catch(err=>{
                this.imgshow = false
            })
        }else{
            this.getIcon()
            this.getLinkUrl();
            this.getInfo();
        }
    },
    methods:{
        sendInfo(){
            this.$router.push({
                path:'/currencylist',
                query:{
                    language:this.language,
                    imToken:this.imToken,
                    proToken:this.proToken
                }
            })
        },
        getIcon(){
            let iconUrl = "/currency/queryAllCurrency"
            let upperName = this.currenryName.toUpperCase()
            console.log(upperName)
             this.$http({
                method:'post',
                url:iconUrl,
                data:{
                    language:this.language,
                    transid:timestamp
                },
                headers:{
                    "HB-IM-TOKEN":this.imToken
                }
            }).then(res=>{
                console.log(res)
                let iconList = res.data.result
                let iconKey;
                for(iconKey in iconList){
                    let iconName = iconList[iconKey].coinName
                    if(upperName == iconName){
                        this.icon = iconList[iconKey].coinIcon
                    }
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        getInfo(){
            let url = 'http://dawn-broker-pro.dev-5.huobiapps.com/v1/settings/currencys'
            this.$http.get(url,{
                headers:{
                    "Accept-Language":this.language
                }
            }).then(res=>{
                let biName = res.data.data
                let key;
                let tolowcurrency = this.currenryName.toLowerCase();
                for(key in biName){
                    let toLoewrName = biName[key]['display-name'].toLowerCase()
                    if(tolowcurrency == toLoewrName){
                        this.currenryInfo = biName[key]
                        this.currenryName = this.currenryName.toUpperCase()
                    }
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        getLinkUrl(){
            let _this = this
            var name = _this.currenryName.toLowerCase();
            console.log(name)
            var linkUrl = 'http://pro-web--dev-5.huobiapps.com/-/x/pro/v1/dw/deposit-virtual/addresses'
            _this.$http.get(linkUrl, {
                params: {
                    currency:name,
                },
                headers:{
                    "HB-PRO-TOKEN":'NYX4sdeyUJmOJ9vZ-CJp2NCUw9m9Gmc_28kXbaVnN-r9tUPtM5a_I05gXRcTl6OI'
                    }
                }).then(res=>{
                    _this.urlAddress = res.data.data
                    console.log(_this.urlAddress)
                    let canvas = document.getElementById('canvas')
                    let addressUrl = _this.urlAddress
                    QRCode.toCanvas(canvas, addressUrl, function (error) {
                        if (error){
                            _this.isshow = false
                            Toast({
                                message: _this.errorToast,
                                position: 'bottom',
                                duration: 2000,
                                className:'error_toast'
                            });
                        }else{

                        }
                    })
                    var imgSrc = document.getElementById('canvas').toDataURL('image/png');
                    var saveImg = document.getElementById('save_img').src = imgSrc
                    this.base64Img = saveImg
                    this.imgUrl = this.base64Img.slice(22);
                    // 向app端传当前币种名称
                    let ua = navigator.userAgent.toLowerCase();
                    //android终端
                    let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
                    //ios终端
                    let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                        //ios
                        window.webkit.messageHandlers.selectedCurrenryName.postMessage(name);
                    } else if (/(Android)/i.test(navigator.userAgent)) {
                        //android
                        window.WebViewJavascriptBridge.callHandler(
                            'selectedCurrenryName',
                            name,
                            null
                    );
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        downImg(){
            let base64Img={
                base64Img:this.imgUrl
            }
            let ua = navigator.userAgent.toLowerCase();
                  //android终端
                  let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
                  //ios终端
                  let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    //ios
                    window.webkit.messageHandlers.downImg.postMessage(base64Img);
                    
                  } else if (/(Android)/i.test(navigator.userAgent)) {
                    //android
                    window.WebViewJavascriptBridge.callHandler(
                      'downImg',
                      base64Img,
                      null
                    );
                  }
        },   
        copyUrl(){
            let clipboard = new Clipboard('#btn',{
                target: ()=>document.querySelector('#copyObj'),
                text: ()=> this.urlAddress
            });
            Toast({
                message: this.toast,
                position: 'bottom',
                duration: 2000
            });
        }
    }
}
</script>

<style scoped>
.recharge{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.flex1{
    flex:1;
}
.error_toast{
    padding: 10px 40px;
}
.head{
    align-items: center;
    display: flex;
    padding: 12px 15px;
    justify-content: space-between;
}
.line{
    padding: 10px 0;
    background: #f2f2f2;
}
.head_current{
    font-size: 16px;
    color: #333333;
}
.current_right{
    display: flex;
}
.head_currency{
    font-size: 18px;
    color: #333;
    background: url(../../../static/img/youjt.png) no-repeat right center;
    background-size: 6px 10px;
    padding-right: 10px;
    min-height: 20px;
}
.current_pic{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    padding-right: 10px;
}
.main{
    text-align: center;
    padding: 15px 22px 0 22px;
}
.img_div{
    width: 130px;
    height: 130px;
}
.er{
    width: 130px;
    height: 130px;
}
.click_er{
    color: #F5A623;
    padding-top: 15px;
    display: block;
    text-decoration: none;
    background: transparent;
    margin-left: auto;
    margin-right: auto;
    border: none;
    outline: none;
    text-decoration: underline;
    font-size: 14px;
}
.re_main{
    background: url(../../../static/img/main_bg.png) no-repeat;
    background-size: 100%;
    height: 7.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main_er{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.er_link{
    padding: 25px 0;
    word-wrap: break-word;
    font-size: 12px;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.er_btn{
    padding: 5px 10px;
    background: none;
    border-radius: 3px;
    border: 1px solid rgba(255,255,255,1);
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
}
/* .main_ul{
    padding: 10px 0 0 14px;
    
} */
.main .li{
    text-align: left;
    list-style: none;
    margin-top: 15px;
    background: url(../../../static/img/lid.png) no-repeat left center;
    background-size: 5px 5px;
    background-position-y: 17px;
    padding: 10px 0 0 14px;
}
.main_ul div:first-child{
    padding-top: 0px;
    background-position-y: 7px;
}
  #canvas{
      display: none;
  }
  .shuom{
    text-align: left;
    padding: 10px 0 0 14px;
    background: url(../../../static/img/lid.png) no-repeat left center;
    background-size: 5px 5px;
    background-position-y: 17px;
  }
  .icon{
      width: 25px;
      padding-right: 15px;
      height: 25px;
  }
</style>
