<template>
    <div>
      <div class="padding">
        <div class="headerbox"><div class="headtitle"></div></div>
        <div class="posir">
          <div class="flex-box3">
            <div>
              <span class="must">*</span>
              <span class="flex1 spanName">邮箱</span>
            </div>
            <input type="email" class="flex4 f_input" placeholder="请输入邮箱" v-model="onEmail" @blur="email" @input="oEmail" >
          </div>
          <div class="toast" v-if="emailNo">
            <img src="../../../static/img/group.png" class="grImg">
            <span class="toasttxt">邮箱格式有误，请重新输入</span>
          </div>
          <div class="toast" v-if="emailEmpty">
            <img src="../../../static/img/group.png" class="grImg">
            <span class="toasttxt">请输入邮箱</span>
          </div>
        </div>
        <div class="padding10">
          <div class="posir">
            <div class="flex-box3">
              <div>
                <span class="must">*</span>
                <span class="flex1 spanName">电话</span>
              </div>
              <input type="tel" class="flex4 f_input" placeholder="请输入手机号" v-model="onTel" @blur="tel" @input="oTel">
            </div>
            <div class="toast" v-if="telNo">
              <img src="../../../static/img/group.png" class="grImg">
              <span class="toasttxt">手机号码有误，请重新输入</span>
            </div>
            <div class="toast" v-if="telEmpty">
              <img src="../../../static/img/group.png" class="grImg">
              <span class="toasttxt">请输入手机号</span>
            </div>
          </div>
          
        </div>
        <div class="padding10">
          <div class="flex-box3">
            <div>
              <span class="must"></span>
              <span class="flex1 spanName">名称</span>
            </div>
            <input type="text" class="flex4 marginRight10 f_input" placeholder="请输入名称" v-model="onName">
          </div>
        </div>
        <div class="padding10">
          <div class="flex-box3">
            <div>
              <span class="must">*</span>
              <span class="flex1 spanName">类型</span>
            </div>
            <el-cascader
              class="flex4"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
              :show-all-levels="false">
            </el-cascader>
          </div>
        </div>
        <div class="padding10">
          <div class="flex-box3">
            <div>
              <span class="must">*</span>
              <span class="flex1 spanName">官网</span>
            </div>
            <input type="text" class="flex4 f_input" placeholder="请输入官网地址" v-model="onUrl">
          </div>
        </div>
        <div class="padding10">
          <div class="flex-box3">
            <div>
              <span class="must">*</span>
              <span class="flex1 spanName">所属主链</span>
            </div>
            <el-cascader
              class="flex4"
              :options="chainList"
              v-model="selectedOptions2"
              @change="chainChange">
            </el-cascader>
          </div>
        </div>
        <div class="padding10">
          <div class="posir">
            <div class="dis-flex">
              <div class="flex-box3 flex2">
                <div>
                  <span class="must"></span>
                  <span class="spanName">验证码</span>
                </div>
                <input type="text" placeholder="请输入验证码" class="f_input" style="width:100px;" v-model="onCode" @blur="code" @input="oCode">
              </div>
              <span class="flex1"><img :src="imgCode" class="codeImg" @click="changeCode()"></span>
            </div>
              <div class="toast" v-if="codeEmpty">
                <img src="../../../static/img/group.png" class="grImg">
                <span class="toasttxt">请输入验证码</span>
              </div>
          </div>
        </div>
        <div class="padding20">
            <button class="btnok" @click="submit()">提交</button>
        </div>
      </div>
      <div class="loading" v-if="loading">
        <div class="load">

        </div>
      </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import title from "../../utils/title.js";
let Base64 = require("js-base64").Base64;

export default {
  data() {
    return {
      base64Email: "",
      base64Tel: "",
      onEmail: "",
      onCode: "",
      onTel: "",
      onName: "",
      onUrl: "",
      onChain: "",
      imgCode: "",
      codeKey: "",
      getmsg:"",
      loading:false,
      emailNo: false,
      emailEmpty: false,
      telNo: false,
      telEmpty: false,
      codeEmpty: false,
      options: [],
      selectedOptions: [],
      selectedOptions2: [],
      chainList: [
        {
          value: "自有",
          label: "自有"
        },
        {
          value: "EOS",
          label: "EOS"
        },
        {
          value: "ETH",
          label: "ETH"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      selectId: "",
      selectName: ""
    };
  },
  created() {
    let CLASSIFYURL = this.$util.GETCLASSIFY;
    this.$http.get(CLASSIFYURL).then(res => {
      this.options = res.data.data;
    });
    this.changeCode();
    title.set("申请入驻");
  },
  methods: {
    handleChange(value) {
      let a = value[value.length - 1].toString().split("-");
      this.selectId = a[0];
      this.selectName = a[1];
    },
    chainChange(val) {
      this.onChain = val.toString();
    },
    changeCode() {
      let IMGCODE = this.$util.GETIMGCODE;
      this.$http.get(IMGCODE).then(res => {
        this.imgCode = "data:image/png;base64," + res.data.captchaMap.image;
        this.codeKey = res.data.captchaMap.key;
      });
    },
    email() {
      let emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.onEmail == "") {
        this.emailEmpty = true;
        this.emailNo = false;
      } else if (this.onEmail != "") {
        this.emailEmpty = false;
        if (!emailReg.test(this.onEmail)) {
          this.emailNo = !this.emailNo;
        } else {
          this.emailNo = false;
        }
      }
    },
    oEmail(){
      this.emailEmpty = false;
    },
    tel() {
      let telReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if (this.onTel == "") {
        this.telEmpty = true;
        this.telNo = false;
      } else if (this.onTel != "") {
        this.telEmpty = false;
        if (!telReg.test(this.onTel)) {
          this.telNo = !this.telNo;
        } else {
          this.telNo = false;
        }
      }
    },
    oTel(){
      this.telEmpty = false;
    },
    code() {
      if (this.onCode == "") {
        this.codeEmpty = true;
      }else{
        this.codeEmpty = false
      }
    },
    oCode(){
      this.codeEmpty = false
    },
    submit() {
      let that = this;
      that.base64Email = Base64.encodeURI(that.onEmail);
      that.base64Tel = Base64.encodeURI(that.onTel);
      if (that.onEmail == "") {
        that.emailEmpty = !that.emailEmpty;
      } else if (that.onTel == "") {
        that.telEmpty = !that.telEmpty;
      } else if (that.onCode == "") {
        that.codeEmpty = !that.codeEmpty;
      } else {
        let WISHURL = this.$util.GETWISH;
        this.loading = true
        this.$http.post(WISHURL, {
            email: that.base64Email,
            mobile: that.base64Tel,
            appName: that.onName,
            groupId: that.selectId,
            groupName: that.selectName,
            requestUrl: that.onUrl,
            backBone: that.onChain,
            captchaKey: that.codeKey,
            captcha: that.onCode
          }).then(res => {
            console.log(res);
            this.loading = false
            that.getCode = res.data.code;
            that.getmsg = res.data.msg
            if (that.getCode == 500) {
              let instance1 = Toast({
              message: that.getmsg,
                iconClass: "mint-toast-icon mintui mintui-field-error",
                className:'centerToast'
              });
              this.changeCode();
              setTimeout(() => {
                instance1.close();
              }, 2000);

            }else{
              this.loading = false
                let instance = Toast({
                  message: "认证成功",
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
              }
          }).catch(error => {
            // console.log(error);
            this.loading = false
            let instance2 = Toast({
              message: "认证失败，请重试",
              iconClass: "mint-toast-icon mintui mintui-field-error",
              className:'centerToast'
            });
            setTimeout(() => {
              instance2.close();
            }, 2000);
          });
      }
    }
  }
};
</script>

<style scoped>
@import '../../../static/css/appcenter.css';
.loading{
    background: rgb(0,0,0,0.5);
    position: fixed;
    top: 43%;
    left: 43%;
    border-radius: 5px;
}
.load{
    background-image: url(../../../static/img/loaing.gif);
    background-repeat: no-repeat;
    background-size: 70px 70px;
    width: 70px;
    height: 70px;
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #c0c4cc;
}
.headerbox{
      padding: 10px 40px 30px 40px;
}
.headtitle{
  background: url(../../../static/img/headtitle.png) no-repeat;
  background-size: 100%;
  height: 60px;
}
span {
  display: inline-block;
}
.padding {
  padding: 20px 35px;
}
.dis-flex{
  display: flex;
  flex-direction: row;
}
.flex-box3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(209, 209, 209, 1);
}
.flex1 {
  flex: 1;
}
.flex2 {
  flex: 2;
}
.flex4{
  flex: 4;
}
.padding10{
  padding-top: 10px;
}
.padding20{
  padding-top: 20px;
}
.center {
  align-items: center;
  padding-bottom: 20px;
}
.f_input {
  border-radius: 2px;
  border: none;
  padding-left: 0.1rem;
  outline: none;
  height: 40px;
  -webkit-appearance: none;
}
.spanName {
  color: #333333;
  border-right: 1px solid #D8D8D8;
  height: 15px;
  padding-right: 10px;
  display: initial;
}
.posir{
  position: relative;
}
.toast {
  color: #f9886a;
  background: url(../../../static/img/shape.png) no-repeat;
  background-size: 185px 33px;
  position: absolute;
  width: 185px;
  height: 33px;
  line-height: 35px;
  padding-left: 10px;
  top: 0.5rem;
  left: 0.8rem;
  z-index: 1;
}
.toasttxt{
  font-size: 12px;
}
.grImg {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
.must {
  width: 20px;
  vertical-align: middle;
  color: #f7334b;
  text-align: right;
}
.btnok {
  width: 100%;
  height:45px;
  background:rgba(250,225,0,1);
  border-radius:3px;
  border: none;
}
button {
  outline: none;
}
.codeImg {
  width: 85%;
  height: 40px;
  vertical-align: middle;
  float: right;
}
</style>
