
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
        'carousel':'jquery.Carousel'
    },
    shim:{
        'carousel':["jquery"],//设置依赖
    }
})

require(['jquery','carousel'],function($){
    jQuery(function($){
        $('#ct_header').load('../html/header.html',function(){});
        $('#ct_footer').load('../html/footer.html');
        // $('#cont1').carousel({
        //             carousel : "#cont1 .c1",//轮播图容器
        //             indexContainer : "#cont1 .img-index",//下标容器
        //             prev : "#cont1 .carousel-prev",//左按钮
        //             next : "#cont1 .carousel-next",//右按钮
        //             auto : true,//是否自动播放
        //             settime:"timer2",

        //         });
        // $('.hd').carousel({
        //         carousel : ".hd .carousel",//轮播图容器
        //         indexContainer : ".hd .img-index",//下标容器
        //         prev : ".hd .carousel-prev",//左按钮
        //         next : ".hd .carousel-next",//右按钮
        //         auto : true,//是否自动播放
        //         settime:"timer1",
        // });
        

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
        
    })
})
