<template>
<div class="pcdiv" id="pcdiv">
  <div class="group">
        <div class="g-t">
            <div class="t-box">
              <div class="headBox">
                <span class="headBox-title">
                  <img :src="list.logo | groupImg" class="headImg">
                  <span class="title-box">
                    <span class="title-name"><span class="group_name">{{list.groupname}}</span><span class="num">({{list.membercount}}人)</span> </span>
                    <span class="zhuqun">主群：{{list.parantname | e}}</span>
                  </span>
                </span>
                <span>
                  <p class="jianjie">{{list.info}}</p>
                </span>
              </div>
            </div>
        </div>
         <div class="title_n" v-if="delShow">
            <div class="p-b">
              <div class="bg_bor">
                <span class="Gname">创始人：{{list.ownername}}</span>
                <span class="numb">火信号：{{list.ownerid | filterFun}}</span>
              </div>
                <img :src="list.ownerlogo | userImg" class="titleImg">
                
            </div>
        </div>
        <div class="pb" v-if="delShow">
            <p class="p1"></p>
            <span class="title">
                热烈讨论中
            </span>
            <p class="p2"></p>
        </div>
        <div class="info-box" >
          <div v-if="emptyShow">
            <img src="../../static/img/empty.png" class="empty_img" alt="">
            <p class="empty_txt">暂无会话</p>
          </div>
          <div v-if="delImgShow">
            <img src="../../static/img/jiesan_img.png" class="empty_img" alt="">
            <p class="empty_txt">该群已解散</p>
          </div>
          <img src="../../static/img/mohu.jpg" v-if="type != 0" class="type_img">
            <div class="i-l" v-for="item in conlist" :key="item.id" v-if="type == 0">
                <span>
                    <img :src="item.logo" class="iImg">
                </span>
                <span class="info">
                    <p class="t-t">
                        <span class="t-n">{{item.from}}</span>
                        <span class="timer">{{item.time}}</span>
                    </p>
                    <p class="con">{{decodeURIComponent(item.content)}}</p>
                </span>
            </div>
        </div>
        <div class="footer">
            <img src="../../static/img/hh.jpg" class="footimg">
            <button class="footerTxtClick" @click="openAPP()">立即打开</button>
        </div>
        <div class="mask" v-if="isshow" @click="hide">
          <img src="../../static/img/jiantou.png" class="jiantou">
        </div>
    </div>
</div>
    
</template>

<script>
import title from "../utils/title.js";
let Base64 = require('js-base64').Base64;
export default {
  data() {
    return {
      gid:"",
      key:"",
      type:"",
      name:"",
      list: [],
      conlist:[],
      g:"",
      isshow:false,
      emptyShow:false,
      delShow:true,
      delImgShow:false,
      deleted:"",
      code:""
    };
  },
  created() {
    let _this = this
    _this.g = _this.$route.query.g
    _this.gid = _this.$route.query.gid
    _this.key = _this.$route.query.key
    let GROUPURL = _this.$util.GETGROUP
    this.$http.post(GROUPURL,{
      cmd:"inviteinfo",
      gid:_this.gid,
      key:_this.key,
      surl:_this.g
    }).then(res=>{
      _this.list = res.data.result
      _this.code = res.data.code
      _this.type = res.data.result.type
      _this.deleted = res.data.result.deleted
      _this.name = res.data.result.groupname
      _this.conlist = res.data.result.message
      console.log(_this.conlist)
      if(_this.conlist == undefined && _this.type == 0){
        this.emptyShow = true
        document.getElementById('pcdiv').style.height='100%'
      }
      if(_this.deleted == 1){
        this.delShow = false
        this.delImgShow = true,
        this.emptyShow = false
      }
      if(_this.code == -10 || _this.code == -18){
        alert('参数错误');
        this.openAPP()
      }else if(_this.code != 1){
        alert('系统错误')
        this.openAPP()
      }
      title.set("快来加入我的群："+ _this.name);
    })
    
    
  },
  filters:{
        e (str) { return str || '此群没有主群' },
        groupImg(e){
          return e || 'https://static.hottalk.com.cn/png/groupImg.png'
        },
        userImg(e){
          return e || 'https://static.hottalk.com.cn/png/user.png'
        },
        filterFun: function (value) {
          if(value&& value.length > 8) {
              value= value.substring(0,8);
          }
          return value;
        }
    },
  methods: {
    hide(){
      this.isshow = !this.isshow
    },
    openAPP(e) {
      var ua = window.navigator.userAgent.toLowerCase();
      console.log(ua)
      //微信

if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
    //移动端
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        // window.location.href = "downLoadForPhone";
        this.isshow = !this.isshow
      } else {
        //非微信浏览器
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            window.location.href = "huobichat://?" + "surl=" + this.g;
            
          var loadDateTime = new Date();
          window.setTimeout(function() {
            var timeOutDateTime = new Date();
            if (timeOutDateTime - loadDateTime < 5000) {
              window.location.href = "http://h5.test.hbtalk.org/dl/"; //ios下载地址
            } else {
              window.close();
            }
          }, 3000);
          
        } else if (navigator.userAgent.match(/android/i)) {
          window.location.href = "huobichat://hx:80/splash?" + "surl=" + this.g;
            window.setTimeout(function() {
            
              window.location.href = "http://h5.test.hbtalk.org/dl/"

            }, 2000)
            return
        }
      }

}else{
  //pc端
  console.log('111')
  window.open('https://huobi.im','_blank')
}
    

      
    }
  }
};
</script>

<style scoped>

.group {
    width: 100%;
    height: 100%;
  }
  .g-t {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    height: 1.7rem;
    position: relative;
    margin-bottom: .8rem;
    background: url(../../static/img/head.png) no-repeat;
    background-size: 100% 100%;
    padding: 40px 15px 0 15px;
  }
  .t-box {
    width: 100%;
    background: #fff;
    border-radius: 0.07rem;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  }
  .head {
    display: inline-block;
  }
  .group_name{
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .headBox {
    padding: 20px;
  }
  .headBox-title {
    padding-bottom: 15px;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    height: 60px;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
  }
  .title-box {
    padding-left: 15px;
  }
  .title-name {
    display: flex;
    font-size: 20px;
    font-weight: 600;
    align-items: center;
  }
  .num {
    font-size: 12px;
    padding-left: 15px;
    font-weight: normal;
  }
  .headImg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .zhuqun {
    font-size: 12px;
    color: #333;
  }
  .jianjie {
    color: #9b9b9b;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .titleImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    right: 5px;
  }
  .p-name {
    padding-left: 0.3rem;
  }
    .pb {
    display: flex;
    align-items: center;
    margin: 23px 15px;
  }
  .p1, .p2{
    border-bottom: 1px solid #D8D8D8;
    flex: 1;
  }
  .p-b {
    display: inline-block;
    text-align: center;
    background: url(../../static/img/rec.png) no-repeat;
    background-size: 196px 48px;
    align-items: center;
    width: 196px;
    height: 48px;
    position: relative;
  
  }
 .bg_bor{
    padding-left: 15px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .numb{
        display: inherit;
  }
  .Gname {
    display: block;
    color: #333;
    font-size: 14px;
    width: 115px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  .type_img{
    width: 100%;
  }
  .i-l {
    padding: 0.3rem 0.3rem 0 0.3rem;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
  }
  .info-box {
    padding-bottom: 1.5rem;
    width: 100%;
  }
  .info {
    display: inline-block;
    width: 100%;
    padding-left: 0.2rem;
  }
  .iImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .timer {
    font-size: 10px;
    color: #8e8e93;
  }
  .t-n {
    color: #575757;
  }
  .t-t {
    color: #a3a3a3;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    justify-content: space-between;
    padding-bottom: 5px;
  }
  .con {
    background: rgba(238, 238, 238, 1);
    border-radius: 0px 15px 15px 15px;
    padding: 10px;
    display: inline-block;
    max-width: 80%;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -5px 5px -5px rgba(94,94,94,0.16);
    height: 60px;
    align-items: center;
    padding: 10px 10px;
}
  .footimg {
    height: 50px;
}
  .footerTxtClick {
    font-size: 16px;
    background: #ffe103;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    outline: none;
}
  .title {
    font-size: 12px;
    color: #8E8E93;
    flex: 1;
    text-align: center;
    letter-spacing: 0.48px;
  }
  .mask{
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0,0,0,0.7);
  }
  .jiantou{
      width: 250px;
      height: 100px;
      position: absolute;
      right: .2rem;
      top: .15rem;
  }
  .empty_img{
    width: 105px;
    margin: 0 auto;
    display: block;
    padding-top: 40px;
  }
  .empty_txt{
    text-align: center;
    padding-top: 20px;
    color: rgba(145,145,145,1);
  }
  @media only screen and (device-width: 375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) {
    .footer {
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 96px;
        align-items: flex-start;
    }
    .footimg{
      bottom: 34px;
    }
    .info-box{
      padding-bottom: 2.5rem;
    }
  }
@media (min-width:601px) {
  .pcdiv{
    background: #ececec;
  }
  .group{
    width: 557px;
    margin-left: auto;
    margin-right: auto;
    background: #fff
}
.g-t{
    height: auto;
    margin-bottom: 20px;
}
.pb {
    padding: 20px 0 20px 0;
}
.info-box {
    padding-bottom: 130px;
    width: 100%;
}
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -5px 5px -5px rgba(94,94,94,0.16);
    height: 80px;
    align-items: center;
    padding: 10px 20px;
    max-width: 517px;
    margin-left: auto;
    margin-right: auto;
}
.footimg {
    height: 60px;
}
.footerTxtClick {
    font-size: 16px;
    background: #ffe103;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    outline: none;
}
.i-l{
  padding: 20px 20px 0;
}
.info{
  padding-left: 10px;
}
.t-t{
  padding-bottom: 10px;
}
}
</style>
