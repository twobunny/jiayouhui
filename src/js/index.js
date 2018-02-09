
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
        'carousel':'jquery.Carousel'

    },
    shim:{
        'carousel':["jquery"],//设置依赖
        'header':["jquery"],
        'footer':["jquery"]
    }
})

require(['jquery','carousel','header','footer'],function($){
    jQuery(function($){
        $('#ct_header').load('../html/header.html',function(){
            addevent(false);
            // redcookie();
        });
        $('#ct_footer').load('../html/footer.html',function(){
            likepage();
        });

        // 设置轮播图，淡入淡出
        $('#cont1').carousel({
            img:["../images/banner1.jpg","../images/banner2.jpg"],
            height:382,
            width:714,
            type:'fade',
        });
        $('.cont3').carousel({
            img:["../images/one_f_c11.jpg","../images/one_f_c12.jpg","../images/one_f_c13.jpg"],
            height:270,
            width:580,
            type:'fade',
        });

        //设置水平换页
        //计算页码
        var cont2w=$("#cont2").width();
        var cont2p=$("#cont2").parent().width();
        var rato=cont2w/cont2p;
        var page=Math.ceil(rato);
        var dang=1;
        $("#cont2").nextAll(".prev").on('click',function(){
            if(dang>1){
                 var $left=$("#cont2").css('left').slice(0,-2)*1;
                $("#cont2").animate({
                    left:$left+$(this).parent().width()*1,   
                });
                dang--;
            }
        });
        $("#cont2").nextAll(".next").on('click',function(){
            if(dang<2){
                var $left=$("#cont2").css('left').slice(0,-2)*1;
                $("#cont2").animate({
                        left:$left-$(this).parent().width()*1,   
                });
                dang++;
            }
        })
            
            
    })
})
