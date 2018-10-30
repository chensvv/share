<template>
    <div class="reportinfo">
        <div class="report_info">
            <div class="info_head">
                <span class="head_p">{{$t('message.cicture')}}</span>
                <span class="head_number">{{imgBase64.length | e}}{{$t('message.sheets')}}</span>
            </div>
            <div class="upload_box">
                 <div class="head_upload">
                     <div class="view">
                        <div class="item" v-for="(item, index) in imgBase64">
                            <span class="cancel-btn" @click="delImg(index)"></span>
                            <img :src="item">
                        </div>
                    </div>
                    <div class="addbox" v-if="isshow">
                        <input type="file" @change="getImgBase()" id="img" accept="image/*" multiple>
                        <div class="addbtn"></div>
                    </div>
                </div>
            </div>
            <div class="txt_div">
                <textarea name="" :placeholder="$t('message.content')" id="contents" class="texta" v-model="textarea.text" ref="count" ></textarea>
            </div>
            <p id="ts">{{conterNum}}/200</p>
            <button class="submit" @click="submit()">{{$t('message.submit')}}</button>
        </div>
        <load v-if="loadShow"></load>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import title from '../../utils/title.js'
let Base64 = require("js-base64").Base64;
import load from '../loading'
export default {
    components:{
        load:load
    },
    data(){
        return{
            file:[],
            textarea:{
                text:""
            },
            mainTitle:"",
            token:"",
            language:"",
            userId:"",
            userName:"",
            mobile:"",
            nationCode:"",
            conterNum: 0,
            isshow:true,
            imgBase64:[],
            loadShow:false
        }
    },
    created(){
        let _this = this
        this.token = decodeURIComponent(this.$route.query.token)
        // console.log(this.token)
        this.language = decodeURIComponent(this.$route.query.language)
        // console.log(this.language)
        this.userId = Base64.decode(decodeURIComponent(this.$route.query.userId))
        // console.log(this.userId)
        this.userName = Base64.decode(decodeURIComponent(this.$route.query.userName))
        // console.log(this.userName)
        this.mainTitle = this.$route.query.con
        console.log(this.mainTitle)
        if (this.language == 'zh-TW'){
            this.$i18n.locale = 'tw'
        }else if (this.language == 'en'){
            this.$i18n.locale = 'en'
        }else if(this.language == 'kor'){
            this.$i18n.locale = 'kor'
        }else if(this.language == 'zh-CN'){
            this.$i18n.locale = 'zh'
        }
        title.set(this.$route.query.con)
    },
    methods: {
      getImgBase(){
            var _this = this;
            var event = event || window.event;
            var file = event.target.files[0];
            this.file = file
            var reader = new FileReader(); 
            //转base64
            reader.onload = function(e) {
                _this.imgBase64.push(e.target.result);
                document.getElementById('img').value=""
            }
            reader.readAsDataURL(file);
            if(_this.imgBase64.length == '2'){
                this.isshow = false
            }
            // console.log(_this.imgBase64)
        },
        //删除图片
        delImg(index){
            // console.log(index)
            this.isshow = true
            this.imgBase64.splice(index,1);
        },
      submit(){
          this.loadShow = true
          let submitUrl = this.$util.FEEDSAVE
          let encodeTXT = encodeURIComponent(this.textarea.text)
        //   let encodeMobile = Base64.encode(this.mobile)
        //   console.log(encodeMobile)
            var param = new FormData();
            
            param.append('file',this.file);
            param.append('userId',this.userId);
            param.append('userName',this.userName);
            param.append('mainTitle',this.mainTitle);
            param.append('describe',encodeTXT);
        // console.log(param)
          this.$http.post(submitUrl,param,{
              headers:{
                  "HB-IM-TOKEN": this.token
              }
          }).then(res=>{
              this.loadShow = false
              if(res.data.success == true){
                  let instance = Toast({
                  message: this.$t('message.okfeed'),
                  iconClass: "mint-toast-icon mintui mintui-field-success",
                  className:'centerToast'
                });
                setTimeout(() => {
                  instance.close();
                  let ua = navigator.userAgent.toLowerCase();
                  //android终端
                  let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
                  //ios终端
                  let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    //ios
                    window.webkit.messageHandlers.canCelInAppliCation.postMessage(null);
                  } else if (/(Android)/i.test(navigator.userAgent)) {
                    //android
                    window.WebViewJavascriptBridge.callHandler(
                      'canCelInAppliCation',
                      '关闭页面',
                      null
                    );
                  }
                }, 2000);
              }else if (res.data.code == 'HCT99995' ){
                    this.loadShow = false
                    let instance2 = Toast({
                    message: this.$t('message.textNo'),
                        iconClass: "mint-toast-icon mintui mintui-field-error",
                        className:'centerToast'
                    });
                    setTimeout(() => {
                        instance2.close();
                    }, 2000);
              }else if(res.data.code== "HCT50010"){
                  this.loadShow = false
                    let instance2 = Toast({
                        message: this.$t('message.feedLimit'),
                        iconClass: "mint-toast-icon mintui mintui-field-error",
                        className:'centerToast'
                    });
                    setTimeout(() => {
                        instance2.close();
                    }, 2000);
              }else{
                    this.loadShow = false
                    let instance2 = Toast({
                    message: this.$t('message.ReportNo'),
                        iconClass: "mint-toast-icon mintui mintui-field-error",
                        className:'centerToast'
                    });
                    setTimeout(() => {
                        instance2.close();
                    }, 2000);
              }
              
          }).catch(err=>{
              this.loadShow = false
            let instance2 = Toast({
              message: this.$t('message.ReportNo'),
              iconClass: "mint-toast-icon mintui mintui-field-error",
              className:'centerToast'
            });
            setTimeout(() => {
              instance2.close();
            }, 2000);
          })
      },
    },
    filters:{
        e (str) { return str || '0' },
    },
    watch:{
        textarea:{
            handler:function(){
                let that = this
                let _sum = 200
                that.$refs.count.setAttribute("maxlength",_sum);
                // console.log(that.$refs.count.value)
                that.conterNum= that.$refs.count.value.length;
            },
             deep:true
        }
    }
}
</script>

<style>
@import '../../../static/css/report_info.css';
.reportinfo{
    width: 100%;
    height: 100%;
    background: #fff;
}
.report_info{
    padding: 0 15px;
}
.info_head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0 10px;
}
.head_p{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(78,78,78,1);
}
.head_number{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(213,213,213,1);
}
.submit{
    width: 100%;
    height: 50px;
    background:rgba(250,225,0,1);
    border-radius:3px;
    border: none;
    outline: none;
}
.upload_box{
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(244,244,244,1);
}
.head_upload{
   height: 85px;
   padding-top: 10px;
}
.txt_div{
    padding-top: 15px;
}
.texta{
    width: 100%;
    height: 130px;
    outline: none;
    resize:none;
    border: none;
    -webkit-appearance: none;
    background: #f4f4f4;
    padding: 8px;
    border-radius: 3px;
    box-sizing: border-box;
}
.texta::-webkit-input-placeholder{
            color:rgba(213,213,213,1);
        }
.texta::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:rgba(213,213,213,1);
}
.texta:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:rgba(213,213,213,1);
}
.texta:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:rgba(213,213,213,1);
}
#ts{
    text-align: right;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(142,142,147,1);
    padding-top: 10px;
    padding-bottom: 40px;
}
.clearboth::after{
        content:"";
        display:block;
        clear:both;
    }
.addbox{
        float:left;
        position:relative;
        height:72px;
        width:72px;
        margin-bottom:20px;
        text-align:center;
        margin-left: 15px;
        border:1px solid rgba(213,213,213,1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
.addbox input{
        position:absolute;
        left:0;
        height:72px;
        width:72px;
        opacity:0;
    }
.addbtn{
        float:left;
        height:34px;
        width:34px;
        /* line-height:72px;
        color:#fff;
        font-size:40px;
        background:#ccc;
        border-radius:10px; */
        background: url(../../../static/img/jia.jpg) no-repeat;
        background-size: 34px 34px;
    }
.item {
        position:relative;
        float:left;
        height:72px;
        width:72px;
        padding-left: 15px;
    }
.item:first-child{
    padding-left: 0;
}
.item .cancel-btn{
        position:absolute;
        right:-8px;
        top:-8px;
        display:block;
        width:20px;
        height:20px;
        background: url(../../../static/img/de.png) no-repeat;
        background-size: 20px 20px;
    }
.item img{
        width:100%;
        height:100%;
    }
.view{
        clear:both;
    }
</style>
