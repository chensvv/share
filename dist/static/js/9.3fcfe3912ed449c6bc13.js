webpackJsonp([9],{"4afB":function(e,t){},PGq3:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("bjBG"),i=s.n(a);for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);var o=s("RWOG");var r=function(e){s("4afB")},l=s("VU/8")(i.a,o.a,!1,r,null,null);t.default=l.exports},RWOG:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reportinfo"},[s("div",{staticClass:"report_info"},[s("div",{staticClass:"info_head"},[s("span",{staticClass:"head_p"},[e._v(e._s(e.$t("message.cicture")))]),e._v(" "),s("span",{staticClass:"head_number"},[e._v(e._s(e._f("e")(e.imgBase64.length))+e._s(e.$t("message.sheets")))])]),e._v(" "),s("div",{staticClass:"upload_box"},[s("div",{staticClass:"head_upload"},[s("div",{staticClass:"view"},e._l(e.imgBase64,function(t,a){return s("div",{staticClass:"item"},[s("span",{staticClass:"cancel-btn",on:{click:function(t){e.delImg(a)}}}),e._v(" "),s("img",{attrs:{src:t}})])})),e._v(" "),e.isshow?s("div",{staticClass:"addbox"},[s("input",{attrs:{type:"file",id:"img",accept:"image/*",multiple:""},on:{change:function(t){e.getImgBase()}}}),e._v(" "),s("div",{staticClass:"addbtn"})]):e._e()])]),e._v(" "),s("div",{staticClass:"txt_div"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textarea.text,expression:"textarea.text"}],ref:"count",staticClass:"texta",attrs:{name:"",placeholder:e.$t("message.content"),id:"contents"},domProps:{value:e.textarea.text},on:{input:function(t){t.target.composing||e.$set(e.textarea,"text",t.target.value)}}})]),e._v(" "),s("p",{attrs:{id:"ts"}},[e._v(e._s(e.conterNum)+"/200")]),e._v(" "),s("button",{staticClass:"submit",on:{click:function(t){e.submit()}}},[e._v(e._s(e.$t("message.submit")))])]),e._v(" "),e.loadShow?s("load"):e._e()],1)},staticRenderFns:[]};t.a=a},bjBG:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Au9i"),i=o(s("6FWs")),n=o(s("KgXo"));function o(e){return e&&e.__esModule?e:{default:e}}var r=s("xrTZ").Base64;t.default={components:{load:n.default},data:function(){return{file:[],textarea:{text:""},mainTitle:"",token:"",language:"",userId:"",userName:"",mobile:"",nationCode:"",conterNum:0,isshow:!0,imgBase64:[],loadShow:!1}},created:function(){this.token=decodeURIComponent(this.$route.query.token),this.language=decodeURIComponent(this.$route.query.language),this.userId=r.decode(decodeURIComponent(this.$route.query.userId)),this.userName=r.decode(decodeURIComponent(this.$route.query.userName)),this.mainTitle=this.$route.query.con,console.log(this.mainTitle),"zh-TW"==this.language?this.$i18n.locale="tw":"en"==this.language?this.$i18n.locale="en":"kor"==this.language?this.$i18n.locale="kor":"zh-CN"==this.language&&(this.$i18n.locale="zh"),i.default.set(this.$route.query.con)},methods:{getImgBase:function(){var e=this,t=t||window.event,s=t.target.files[0];this.file=s;var a=new FileReader;a.onload=function(t){e.imgBase64.push(t.target.result),document.getElementById("img").value=""},a.readAsDataURL(s),"2"==e.imgBase64.length&&(this.isshow=!1)},delImg:function(e){this.isshow=!0,this.imgBase64.splice(e,1)},submit:function(){var e=this;this.loadShow=!0;var t=this.$util.FEEDSAVE,s=encodeURIComponent(this.textarea.text),i=new FormData;i.append("file",this.file),i.append("userId",this.userId),i.append("userName",this.userName),i.append("mainTitle",this.mainTitle),i.append("describe",s),this.$http.post(t,i,{headers:{"HB-IM-TOKEN":this.token}}).then(function(t){if(e.loadShow=!1,1==t.data.success){var s=(0,a.Toast)({message:e.$t("message.okfeed"),iconClass:"mint-toast-icon mintui mintui-field-success",className:"centerToast"});setTimeout(function(){s.close();var e=navigator.userAgent.toLowerCase();e.indexOf("Android")>-1||e.indexOf("Adr"),e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?window.webkit.messageHandlers.canCelInAppliCation.postMessage(null):/(Android)/i.test(navigator.userAgent)&&window.WebViewJavascriptBridge.callHandler("canCelInAppliCation","关闭页面",null)},2e3)}else if("HCT99995"==t.data.code){e.loadShow=!1;var i=(0,a.Toast)({message:e.$t("message.textNo"),iconClass:"mint-toast-icon mintui mintui-field-error",className:"centerToast"});setTimeout(function(){i.close()},2e3)}else if("HCT50010"==t.data.code){e.loadShow=!1;var n=(0,a.Toast)({message:e.$t("message.feedLimit"),iconClass:"mint-toast-icon mintui mintui-field-error",className:"centerToast"});setTimeout(function(){n.close()},2e3)}else{e.loadShow=!1;var o=(0,a.Toast)({message:e.$t("message.ReportNo"),iconClass:"mint-toast-icon mintui mintui-field-error",className:"centerToast"});setTimeout(function(){o.close()},2e3)}}).catch(function(t){e.loadShow=!1;var s=(0,a.Toast)({message:e.$t("message.ReportNo"),iconClass:"mint-toast-icon mintui mintui-field-error",className:"centerToast"});setTimeout(function(){s.close()},2e3)})}},filters:{e:function(e){return e||"0"}},watch:{textarea:{handler:function(){this.$refs.count.setAttribute("maxlength",200),this.conterNum=this.$refs.count.value.length},deep:!0}}}}});