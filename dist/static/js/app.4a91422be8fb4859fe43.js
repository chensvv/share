webpackJsonp([13],{"1CjF":function(e,t){},"1XQJ":function(e,t,o){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};t.a=r},KExE:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={wish_host:"http://open.test.hbtalk.org:8086",group_host:"http://h5.test.hbtalk.org",feed_host:"http://hotpay.dev-6.hbtalk.org"};switch(window.location.herf){case"dev":case"pro":NTERFACE.public_host=""}var n={GETWISH:r.wish_host+"/open-api/appwish/save",GETCLASSIFY:r.wish_host+"/open-api/appgroup/groupTree",GETIMGCODE:r.wish_host+"/open-api/appwish/getCaptcha",GETGROUP:r.group_host+"/group/info/process.do",FILESAVE:r.feed_host+"/tblreport/save",FEEDSAVE:r.feed_host+"/tblfeedback/save"};t.default={INTERCHILD:n,INTERFACE:r}},M93x:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("xJD8"),n=o.n(r);for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);var i=o("1XQJ");var s=function(e){o("1CjF")},u=o("VU/8")(n.a,i.a,!1,s,null,null);t.default=u.exports},NHnr:function(e,t,o){"use strict";var r=p(o("7+uW")),n=p(o("M93x")),a=p(o("YaEn")),i=p(o("mtWM")),s=p(o("UoMW")),u=p(o("KExE")),c=p(o("sTku")),l=p(o("zL8q"));o("tvR6");var d=p(o("ivlf"));function p(e){return e&&e.__esModule?e:{default:e}}r.default.use(l.default),s.default.set(),c.default.alert(),r.default.config.productionTip=!1,r.default.prototype.$http=i.default,r.default.prototype.$util=u.default.INTERCHILD,new r.default({el:"#app",router:a.default,components:{App:n.default},template:"<App/>",i18n:d.default})},UoMW:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={set:function(){var e=window.screen.availWidth;e>1280&&(e=1280),document.documentElement.style.fontSize=e/6.4+"px"}}},YaEn:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(o("7+uW")),n=a(o("/ocq"));function a(e){return e&&e.__esModule?e:{default:e}}r.default.use(n.default),t.default=new n.default({routes:[{path:"/",redirect:"/appcenter"},{path:"/group",component:function(e){return Promise.all([o.e(0),o.e(2)]).then(function(){var t=[o("tpXK")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/appcenter",component:function(e){return Promise.all([o.e(0),o.e(5)]).then(function(){var t=[o("D5y6")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/recharge",component:function(e){return Promise.all([o.e(1),o.e(0)]).then(function(){var t=[o("Nfi5")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/currencylist",component:function(e){return Promise.all([o.e(0),o.e(3)]).then(function(){var t=[o("tPfA")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/crecord",component:function(e){return o.e(4).then(function(){var t=[o("Ue4M")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/topupdetails",component:function(e){return o.e(7).then(function(){var t=[o("Nizd")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/report",component:function(e){return Promise.all([o.e(0),o.e(6)]).then(function(){var t=[o("L//B")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/reportinfo",component:function(e){return Promise.all([o.e(0),o.e(8)]).then(function(){var t=[o("cI+C")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/feedback",component:function(e){return Promise.all([o.e(0),o.e(10)]).then(function(){var t=[o("+otA")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/feedbackinfo",component:function(e){return Promise.all([o.e(0),o.e(9)]).then(function(){var t=[o("PGq3")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/load",component:function(e){return o.e(0).then(function(){var t=[o("KgXo")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/personal",component:function(e){return o.e(11).then(function(){var t=[o("aBgh")];e.apply(null,t)}.bind(this)).catch(o.oe)}}],scrollBehavior:function(e,t,o){return{x:0,y:0}}})},ivlf:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n,a,i,s=l(o("bOdI")),u=l(o("7+uW")),c=l(o("TXmL"));function l(e){return e&&e.__esModule?e:{default:e}}u.default.use(c.default);var d={zh:{message:(r={title:"充值",titleRecord:"充值记录",listTitle:"选择币种",text:"当前币种",qrCode:"保存二维码",copyAddress:"复制地址",search:"请输入币种名称",toast:"Huobi Chat：已复制",error:"该币种暂不支持充值请选择其他币种",number:"数量",status:"状态",timer:"时间",pre_submitted:"待提交",valid:"无效",submitted:"已提交",reexamine:"客服审核",canceled:"取消",pass:"通过",reject:"审核拒绝",pre_transfer:"等待钱包处理",wallet_transfer:"钱包处理中",wallet_reject:"钱包拒绝",confirmed:"已完成",confirm_error:"保留状态，目前未使用",repealed:"撤销，给客户退款",nostate:"暂无状态",safe:"安全",types:"类型",recharge:"充值",consumption:"消费",date:"日期",details:"充值详情",norecord:"暂无充值记录",shuom:"Huobi Chat账户与Huobi Global账户共用一个充值地址，充值到账后会在Huobi Global账户中显示，通过划转功能转至Huobi Chat账户后即可使用该币种",reason:"请选择举报该账号的原因：",groups:"请选择举报该群的原因：",pornography:"发布色情信息",Fraud:"欺诈骗钱",advertising:"发布广告等",Harassment:"骚扰信息",other:"其他违规行为",report:"举报",Photo:"图片证据（选填）",sheets:"张",content:"投诉内容（必填）",submit:"提交",Reports:"举报成功",ReportNo:"系统错误，请重试",textNo:"描述不能为空",reportLimit:"单日举报次数限制50次",fankui:"用户反馈",select:"选择问题发生的场景：",registers:"注册",login:"登录",cover:"会话",group:"群组",assets:"资产",contacts:"联系人",cicture:"反馈图片（选填）"},(0,s.default)(r,"content","反馈内容（必填）"),(0,s.default)(r,"okfeed","反馈成功"),(0,s.default)(r,"others","其他"),(0,s.default)(r,"feedLimit","单日反馈次数限制50次"),r)},en:{message:(n={title:"Deposit",titleRecord:"Deposit History",listTitle:"Choose coin",text:"Current coin",qrCode:"Save QR Code",copyAddress:"Copy Address",search:"Enter a coin name",toast:"Huobi Chat: copied",error:"Deposit is not available for this coin currently. Please choose another coin.",number:"Amount",status:"Status",timer:"Date",pre_submitted:"To be submitted",valid:"Invalid",submitted:"Submitted",reexamine:"Customer service review",canceled:"Cancel",pass:"Pass",reject:"Review rejected",pre_transfer:"Pending wallet processing",wallet_transfer:"In wallet processing",wallet_reject:"Wallet rejected",confirmed:"Completed",confirm_error:"Status reserved. Currently unused.",repealed:"Cancel and refund to the client.",nostate:"No status",safe:"Safety",types:"Type",recharge:"Deposit",consumption:"Consumption",date:"Date",details:"Deposit details",norecord:"No records",shuom:"Huobi ChatAccount andHuobi GlobalAccount share the same deposit address. After your deposit is successfully credited, it will be shown inHuobi GlobalAccount. You can transfer it toHuobi ChatAccount and use the coins.",reason:"Please choose a reason for reporting this account:",groups:"Please choose a reason for reporting this group",pornography:"Posting pornographic information",Fraud:"Swindle and fraud",advertising:"Posting adervertisement, etc",Harassment:"Harassing messages",other:"Other violations\t",report:"Report",Photo:"Photo evidence (optional)",sheets:"photos",content:"Complaint details (Required)",submit:"Confirm",Reports:"Report success",ReportNo:"System error, please try again",textNo:"Description can not be empty.",reportLimit:"Report limit is 50",fankui:"User feedback",select:"Select",registers:"Register",login:"Login",cover:"Chats",group:"Groups",contacts:"Contacts",assets:"Asset",cicture:"Picture（optional）"},(0,s.default)(n,"content","Content（Required）"),(0,s.default)(n,"okfeed","Feedback success"),(0,s.default)(n,"others","Other"),(0,s.default)(n,"feedLimit","Feedback limit is 50"),n)},tw:{message:(a={title:"充值",titleRecord:"充值記錄",listTitle:"選擇幣種",text:"當前幣種",qrCode:"保存二維碼",copyAddress:"複製地址",search:"請輸入幣種名稱",toast:"Huobi Chat：已復制",error:"該幣種暫不支持充值請選擇其他幣種",number:"數量",status:"狀態",timer:"時間",pre_submitted:"待提交",valid:"無效",submitted:"已提交",reexamine:"客服審核",canceled:"取消",pass:"通過",reject:"審核拒絕",pre_transfer:"等待錢包處理",wallet_transfer:"錢包處理中",wallet_reject:"錢包拒絕",confirmed:"已完成",confirm_error:"保留狀態，目前未使用",repealed:"撤銷，給客戶退款",nostate:"暫無狀態",safe:"安全",types:"類型",recharge:"充值",consumption:"消費",date:"日期",details:"充值詳情",norecord:"暫無充值記錄",shuom:"Huobi Chat賬戶與Huobi Global賬戶共用一個充值地址，充值到賬後會在Huobi Global賬戶中顯示，通過劃轉功能轉至Huobi Chat賬戶後即可使用該幣種",reason:"請選擇舉報該賬號的原因：",groups:"請選擇舉報該群的原因",pornography:"發布色情信息",Fraud:"欺詐騙錢",advertising:"發布廣告等",Harassment:"騷擾信息",other:"其他違規行為",report:"舉報",Photo:"圖片證據（選填）",sheets:"張",content:"投訴內容（必填）",submit:"提交",Reports:"舉報成功",ReportNo:"系統錯誤，請重試",textNo:"描述不能為空",reportLimit:"單日舉報次數限制50次",fankui:"用戶回饋",select:"選擇問題發生的場景：",registers:"注册",login:"登入",cover:"會話",group:"群組",contacts:"連絡人",assets:"資產",cicture:"迴響圖片（選填）"},(0,s.default)(a,"content","迴響內容（必填）"),(0,s.default)(a,"okfeed","迴響成功"),(0,s.default)(a,"others","其他"),(0,s.default)(a,"feedLimit","單日反饋次數限制50次"),a)},kor:{message:(i={title:"입금",titleRecord:"입금 기록",listTitle:"코인 선택",text:"현재 코인",qrCode:"QR 코드 저장",copyAddress:"주소 복사",search:"코인 명칭을 입력 하십시오",toast:"Huobi Chat: 복사됨",error:"이 코인은 잠시로 입금이 지원되지 않습니다. 다른 코인을 선택하십시오",number:"수량",status:"유형",timer:"시간",pre_submitted:"제출 대기중",valid:"무효",submitted:"제출됐음",reexamine:"고객 서비스 심사",canceled:"취소",pass:"통과",reject:"심사 거부",pre_transfer:"지갑 처리 대기중",wallet_transfer:"지갑 처리중",wallet_reject:"지갑 거부",confirmed:"완료",confirm_error:"보존 상태, 현재 사용되지 않음",repealed:"취소됨, 고객에게 환불",nostate:"상태 없음",safe:"보안",types:"유형",recharge:"입금",consumption:"소비",date:"시간",details:"입금 내역",norecord:"입금 기록 없음",shuom:"Huobi Chat계정은 Huobi Global계정과 같은 입금 주소를 사용하며, 입금된 후 Huobi Global계정에서 표시되고，이체 기능을 통해 Huobi Chat계정으로 이전하면 해당 코인을 사용할 수 있습니다.",reason:"이 계정을 신고하는 이유를 선택하십시오:",groups:"이 군 제보 의 원인 을 선택해 주십시오:",pornography:"음란 메시지를 올리기",Fraud:"사기",advertising:"광고 게시",Harassment:"성희롱 메시지",other:"다른 규칙 위반 행위\t",report:"신고하기",Photo:"사진 증거(선택 사항)",sheets:"장",content:"신고 내용 (필립)",submit:"제출",Reports:"성공을보고하십시오",ReportNo:"시스템 오류입니다. 다시 시도하십시오.",textNo:"묘사가 비어 있을 수 없습니다.",reportLimit:"일일 최대 신고 50건",fankui:"사용자 피드백",select:"문제 선택:",registers:"회원가입",login:"로그인",cover:"대화",group:"그룹",contacts:"연락처",assets:"자산",cicture:"피드백 사진 (선택 사항)"},(0,s.default)(i,"content","피드백 내용 (필립)"),(0,s.default)(i,"okfeed","피드백 성공"),(0,s.default)(i,"others","기타"),(0,s.default)(i,"feedLimit","일일 피드백의 상한 50건"),i)}};t.default=new c.default({locale:"zh",messages:d})},sTku:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={alert:function(){window.alert=function(e){var t=document.createElement("IFRAME");t.style.display="none",t.setAttribute("src","data:text/plain,"),document.documentElement.appendChild(t),window.frames[0].window.alert(e),t.parentNode.removeChild(t)};var e=window.confirm;window.confirm=function(t){try{var o=document.createElement("IFRAME");o.style.display="none",o.setAttribute("src","data:text/plain,"),document.documentElement.appendChild(o);var r=window.frames[0],n=r.window;void 0==n&&(n=r.contentWindow);var a=n.confirm(t);return o.parentNode.removeChild(o),a}catch(o){return e(t)}}}}},tvR6:function(e,t){},xJD8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"App",data:function(){return{}}}}},["NHnr"]);