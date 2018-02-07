
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    }
})

require(['jquery'],function($){
    jQuery(function($){
    $('#ct_header').load('../html/header.html',function(){
        $(".tab2").css({display:'none'})
    });
    $('#ct_footer').load('../html/footer.html');
})
})
