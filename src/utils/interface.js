const INTERFACE = {
    // 'public_host': 'http://hotpay.test.hbtalk.org',
    'wish_host':'http://open.test.hbtalk.org:8086',
    // 'group_host':'https://h5.hottalk.com.cn:9800'
    'group_host':'http://h5.test.hbtalk.org',
    'feed_host':'http://hotpay.dev-6.hbtalk.org',
}

switch (window.location.herf){
    case 'dev':
        NTERFACE.public_host = "";
        break;
    case 'pro':
        NTERFACE.public_host = "";
        break;
}

const INTERCHILD = {
    // 'GETCODE': INTERFACE.public_host + '/active/getValidateCode.do',
    'GETWISH':INTERFACE.wish_host + '/open-api/appwish/save',
    'GETCLASSIFY':INTERFACE.wish_host + '/open-api/appgroup/groupTree',
    'GETIMGCODE':INTERFACE.wish_host + '/open-api/appwish/getCaptcha',
    'GETGROUP':INTERFACE.group_host + '/group/info/process.do',
    'FILESAVE':INTERFACE.feed_host + '/tblreport/save',
    'FEEDSAVE' :INTERFACE.feed_host + '/tblfeedback/save'
}
export default {
    INTERCHILD,
    INTERFACE
}