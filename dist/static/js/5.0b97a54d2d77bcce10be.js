webpackJsonp([5],{D1W1:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a,i=e("Au9i"),n=e("6FWs"),l=(a=n)&&a.__esModule?a:{default:a};var o=e("xrTZ").Base64;s.default={data:function(){return{base64Email:"",base64Tel:"",onEmail:"",onCode:"",onTel:"",onName:"",onUrl:"",onChain:"",imgCode:"",codeKey:"",getmsg:"",loading:!1,emailNo:!1,emailEmpty:!1,telNo:!1,telEmpty:!1,codeEmpty:!1,options:[],selectedOptions:[],selectedOptions2:[],chainList:[{value:"自有",label:"自有"},{value:"EOS",label:"EOS"},{value:"ETH",label:"ETH"},{value:"其他",label:"其他"}],selectId:"",selectName:""}},created:function(){var t=this,s=this.$util.GETCLASSIFY;this.$http.get(s).then(function(s){t.options=s.data.data}),this.changeCode(),l.default.set("申请入驻")},methods:{handleChange:function(t){var s=t[t.length-1].toString().split("-");this.selectId=s[0],this.selectName=s[1]},chainChange:function(t){this.onChain=t.toString()},changeCode:function(){var t=this,s=this.$util.GETIMGCODE;this.$http.get(s).then(function(s){t.imgCode="data:image/png;base64,"+s.data.captchaMap.image,t.codeKey=s.data.captchaMap.key})},email:function(){""==this.onEmail?(this.emailEmpty=!0,this.emailNo=!1):""!=this.onEmail&&(this.emailEmpty=!1,/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.onEmail)?this.emailNo=!1:this.emailNo=!this.emailNo)},oEmail:function(){this.emailEmpty=!1},tel:function(){""==this.onTel?(this.telEmpty=!0,this.telNo=!1):""!=this.onTel&&(this.telEmpty=!1,/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.onTel)?this.telNo=!1:this.telNo=!this.telNo)},oTel:function(){this.telEmpty=!1},code:function(){""==this.onCode?this.codeEmpty=!0:this.codeEmpty=!1},oCode:function(){this.codeEmpty=!1},submit:function(){var t=this,s=this;if(s.base64Email=o.encodeURI(s.onEmail),s.base64Tel=o.encodeURI(s.onTel),""==s.onEmail)s.emailEmpty=!s.emailEmpty;else if(""==s.onTel)s.telEmpty=!s.telEmpty;else if(""==s.onCode)s.codeEmpty=!s.codeEmpty;else{var e=this.$util.GETWISH;this.loading=!0,this.$http.post(e,{email:s.base64Email,mobile:s.base64Tel,appName:s.onName,groupId:s.selectId,groupName:s.selectName,requestUrl:s.onUrl,backBone:s.onChain,captchaKey:s.codeKey,captcha:s.onCode}).then(function(e){if(console.log(e),t.loading=!1,s.getCode=e.data.code,s.getmsg=e.data.msg,500==s.getCode){var a=(0,i.Toast)({message:s.getmsg,iconClass:"mint-toast-icon mintui mintui-field-error",className:"centerToast"});t.changeCode(),setTimeout(function(){a.close()},2e3)}else{t.loading=!1;var n=(0,i.Toast)({message:"认证成功",iconClass:"mint-toast-icon mintui mintui-field-success",className:"centerToast"});setTimeout(function(){n.close();var t=navigator.userAgent.toLowerCase();t.indexOf("Android")>-1||t.indexOf("Adr"),t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?window.webkit.messageHandlers.canCelInAppliCation.postMessage(null):/(Android)/i.test(navigator.userAgent)&&window.WebViewJavascriptBridge.callHandler("canCelInAppliCation","关闭页面",null)},2e3)}}).catch(function(s){t.loading=!1;var e=(0,i.Toast)({message:"认证失败，请重试",iconClass:"mint-toast-icon mintui mintui-field-error",className:"centerToast"});setTimeout(function(){e.close()},2e3)})}}}}},D5y6:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("D1W1"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var l=e("FkIA");var o=function(t){e("ZM5c")},c=e("VU/8")(i.a,l.a,!1,o,"data-v-4eb91256",null);s.default=c.exports},FkIA:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"padding"},[t._m(0),t._v(" "),a("div",{staticClass:"posir"},[a("div",{staticClass:"flex-box3"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.onEmail,expression:"onEmail"}],staticClass:"flex4 f_input",attrs:{type:"email",placeholder:"请输入邮箱"},domProps:{value:t.onEmail},on:{blur:t.email,input:[function(s){s.target.composing||(t.onEmail=s.target.value)},t.oEmail]}})]),t._v(" "),t.emailNo?a("div",{staticClass:"toast"},[a("img",{staticClass:"grImg",attrs:{src:e("Ws+V")}}),t._v(" "),a("span",{staticClass:"toasttxt"},[t._v("邮箱格式有误，请重新输入")])]):t._e(),t._v(" "),t.emailEmpty?a("div",{staticClass:"toast"},[a("img",{staticClass:"grImg",attrs:{src:e("Ws+V")}}),t._v(" "),a("span",{staticClass:"toasttxt"},[t._v("请输入邮箱")])]):t._e()]),t._v(" "),a("div",{staticClass:"padding10"},[a("div",{staticClass:"posir"},[a("div",{staticClass:"flex-box3"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.onTel,expression:"onTel"}],staticClass:"flex4 f_input",attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:t.onTel},on:{blur:t.tel,input:[function(s){s.target.composing||(t.onTel=s.target.value)},t.oTel]}})]),t._v(" "),t.telNo?a("div",{staticClass:"toast"},[a("img",{staticClass:"grImg",attrs:{src:e("Ws+V")}}),t._v(" "),a("span",{staticClass:"toasttxt"},[t._v("手机号码有误，请重新输入")])]):t._e(),t._v(" "),t.telEmpty?a("div",{staticClass:"toast"},[a("img",{staticClass:"grImg",attrs:{src:e("Ws+V")}}),t._v(" "),a("span",{staticClass:"toasttxt"},[t._v("请输入手机号")])]):t._e()])]),t._v(" "),a("div",{staticClass:"padding10"},[a("div",{staticClass:"flex-box3"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.onName,expression:"onName"}],staticClass:"flex4 marginRight10 f_input",attrs:{type:"text",placeholder:"请输入名称"},domProps:{value:t.onName},on:{input:function(s){s.target.composing||(t.onName=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"padding10"},[a("div",{staticClass:"flex-box3"},[t._m(4),t._v(" "),a("el-cascader",{staticClass:"flex4",attrs:{options:t.options,"show-all-levels":!1},on:{change:t.handleChange},model:{value:t.selectedOptions,callback:function(s){t.selectedOptions=s},expression:"selectedOptions"}})],1)]),t._v(" "),a("div",{staticClass:"padding10"},[a("div",{staticClass:"flex-box3"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.onUrl,expression:"onUrl"}],staticClass:"flex4 f_input",attrs:{type:"text",placeholder:"请输入官网地址"},domProps:{value:t.onUrl},on:{input:function(s){s.target.composing||(t.onUrl=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"padding10"},[a("div",{staticClass:"flex-box3"},[t._m(6),t._v(" "),a("el-cascader",{staticClass:"flex4",attrs:{options:t.chainList},on:{change:t.chainChange},model:{value:t.selectedOptions2,callback:function(s){t.selectedOptions2=s},expression:"selectedOptions2"}})],1)]),t._v(" "),a("div",{staticClass:"padding10"},[a("div",{staticClass:"posir"},[a("div",{staticClass:"dis-flex"},[a("div",{staticClass:"flex-box3 flex2"},[t._m(7),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.onCode,expression:"onCode"}],staticClass:"f_input",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.onCode},on:{blur:t.code,input:[function(s){s.target.composing||(t.onCode=s.target.value)},t.oCode]}})]),t._v(" "),a("span",{staticClass:"flex1"},[a("img",{staticClass:"codeImg",attrs:{src:t.imgCode},on:{click:function(s){t.changeCode()}}})])]),t._v(" "),t.codeEmpty?a("div",{staticClass:"toast"},[a("img",{staticClass:"grImg",attrs:{src:e("Ws+V")}}),t._v(" "),a("span",{staticClass:"toasttxt"},[t._v("请输入验证码")])]):t._e()])]),t._v(" "),a("div",{staticClass:"padding20"},[a("button",{staticClass:"btnok",on:{click:function(s){t.submit()}}},[t._v("提交")])])]),t._v(" "),t.loading?a("div",{staticClass:"loading"},[a("div",{staticClass:"load"})]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"headerbox"},[s("div",{staticClass:"headtitle"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",{staticClass:"must"},[this._v("*")]),this._v(" "),s("span",{staticClass:"flex1 spanName"},[this._v("邮箱")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",{staticClass:"must"},[this._v("*")]),this._v(" "),s("span",{staticClass:"flex1 spanName"},[this._v("电话")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",{staticClass:"must"}),this._v(" "),s("span",{staticClass:"flex1 spanName"},[this._v("名称")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",{staticClass:"must"},[this._v("*")]),this._v(" "),s("span",{staticClass:"flex1 spanName"},[this._v("类型")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",{staticClass:"must"},[this._v("*")]),this._v(" "),s("span",{staticClass:"flex1 spanName"},[this._v("官网")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",{staticClass:"must"},[this._v("*")]),this._v(" "),s("span",{staticClass:"flex1 spanName"},[this._v("所属主链")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",{staticClass:"must"}),this._v(" "),s("span",{staticClass:"spanName"},[this._v("验证码")])])}]};s.a=a},"Ws+V":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA6RJREFUWAnNWD1MFEEUfjN3e9HIIRgpJBEjxEJFY8mfiRZU2thQaWWHGjUEtLA1UYwRopLYGDsNUWmwEU00epQGTAwFURNIMAYVBEHc293ne4M77q387OxxJ5Nc9s3Me/O+m3kz874RYFiw52K5PffjiHC9ZgBRhQCVgn48DMkTJE+QNIYJOZDaVPJEtF6ZMnFB9tGKc+3UMc/DM4DiIAImo1gJEA4IfCWluJlsv90XzWYVrWzn6UZErxMRGlZRXbFbCBgUQnZYHbcyKykuO0PY25vIfnhxnZbh7EoDmPaRw26r+lCbaGlxl7JdEhDeOFeWtbO9iEhxsvZFCDFgpawWcb5rOjz6P4AYjG3bgxShu8PKa1oXMJJKpRrCoGTQiVommpmCg2Gn9IfVKlBoBDHkAFIxU6BlCjr1ZQ4J9unX+auXjHeT53mvg53FkqWUTf7u0zPEW7tYAMJ+gr4VID708j1nILUB5IEmkPvqABKRzk2Ni30zBm5QluoE1t0xBAKQPN4GskLdIODV1oFzv8tooD8Y+iTfTXwdGFmHlMW2HRoMd8mqXQBlW0Naq1T5SiIsMjs7ezTq3bTckDgzBeh5uhuzNsD8rK5HERgDY+EYyv80nvkG7tMHgHMzgCQ7/fcA7F9RcIR1mpN0QG0Pt8ape8MZ4F9ehbAkOZ+JPQgFs6ipBVFeATg1CTj6lk7gv0tnOi5jSdLJWEmCeSnZDNaJdhCl5drWe/8OnIc9um4qMBZJCVQsPPBzDpzHd8B5/kj7lTV7AdJlum4sEBaJKD4ZG7KB6wB+HqflCm3vhBVrODZiLJKmiXLgmGVjCZ3M9doYp78ATE/quqnAWGjb45ipoa8v99eDsFJ+Fdw3L7UcT8AxiiHxLJ4xncg792hTXJgHbyi/ZIGZirTS6X7FDvTQBoKb1cq87SFNO650i24zERgD0yapeBNRFRNjX9cdylAgLm5SSfeZdfISzVrMzJcwMBZ12zNvcl087DuK+sXRYXDuXgZRTdvdXgDv4wjA969RzXP0GAM3UGAvFvtqaybvnMgfzPDLnC11oaeRzVSCxgKTOP7+jxL0rQFxTkvT1V1sQOzTz6fZtwbEFYsZJZE4lotRFGEkn0FfOYCY3jKjpMii6CxwIR+KvYYodQ4ghsBMUjHKAs4Uz8xSrFX5X24e1tVjQxDkunmOCYJimXnTuniwCgNjqsLsgNqbOR/ntJO2rkqDSV580hMwTv0D6p40fNL7DcNzcBRnm3YCAAAAAElFTkSuQmCC"},ZM5c:function(t,s){}});