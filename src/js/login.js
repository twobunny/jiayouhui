//模块配置
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    }
})
require(['jquery'],function($){
    jQuery(function($){
    $('#ct_header').load('../html/header.html',function(){$(".tab1").css({display:'none'})});
    $('#ct_footer').load('../html/footer.html',function(){$(".wouldlike").css({display:'none'})});
       
    })
})
