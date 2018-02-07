;(function($){
    $.fn.carousel = function(param){
        var carousel = param.carousel;              //轮播图容器
        var list = $(carousel).children("li");
        var indexContainer = param.indexContainer;  //下标容器
        var prev = param.prev;                      //左按钮
        var next = param.next;                      //右按钮
        var auto = param.auto;  //是否自动播放
        var timing = param.timing|| 3000;           //自动播放间隔
        var animateTime = param.animateTime || 800;    //动画时间
        var pertimer=param.settime;                    //指定定时器

        console.log(pertimer)


        $(carousel).addClass('carousel');

        //添加页码
        for(var i = 1;i <= list.length;i++){
            $(indexContainer).append("<li>"+i+"</li>")
        }
        var indexList = $(indexContainer).children("li");
        $(list[0]).addClass('on').fadeIn(animateTime);
        $(indexList[0]).addClass('on')
        if(auto){
            pertimer =setInterval("$.switchImg();",timing);

            $(carousel+","+prev+","+next+","+indexContainer).hover(function(){
                clearInterval(pertimer);
            },function(){
                pertimer =setInterval("$.switchImg();",timing);
               
            });
        }

        $(prev).off("click").on("click",function(){
            var on = $(carousel).children(".on");
            on.stop(true,true).fadeOut(animateTime).removeClass('on');
            if(on.prev().is("li")){
                $.switchIndex($(carousel).children("li").index(on.prev()));
                on.prev().stop(true,true).addClass('on').delay(animateTime/2).fadeIn(animateTime);
            }else{
                $.switchIndex($(carousel).children("li").index(list[list.length-1]));
                $(list[list.length-1]).stop(true,true).addClass('on').delay(animateTime/2).fadeIn(animateTime);
            }

        });
        $(next).off("click").on("click",function(){
            var on = $(carousel).children(".on");
            on.stop(true,true).fadeOut(animateTime).removeClass('on');
            if(on.next().is("li")){
                $.switchIndex($(carousel).children("li").index(on.next()));
                on.next().stop(true,true).addClass('on').delay(animateTime/2).fadeIn(animateTime);
            }else{
                $.switchIndex($(carousel).children("li").index(list[0]));
                $(list[0]).stop(true,true).addClass('on').delay(animateTime/2).fadeIn(animateTime);
            }
        });

        $(indexList).off("click").on("click",function(){
            if ($(this).attr("class") != 'on') {
                var on = $(carousel).children(".on");
                var index = $(this).index();
                console.log(index);
                $(indexList).removeClass('on');
                $(indexList[index]).addClass('on');
                on.stop(true,true).fadeOut(animateTime).removeClass('on');
                $(list[index]).stop(true,true).addClass('on').delay(animateTime/2).fadeIn(animateTime);
            }
        });

        $.extend({switchIndex:function(index){
            $(indexList).removeClass('on');
            $(indexList[index]).addClass('on');
        }});

        $.extend({switchImg:function(){
            console.log(pertimer)
            var on = $(carousel).children(".on");
            on.stop(true,true).fadeOut(animateTime).removeClass('on');
            if(on.next().is("li")){
                $.switchIndex($(carousel).children("li").index(on.next()));
                on.next().stop(true,true).addClass('on').delay(animateTime/2).fadeIn(animateTime);
            }else{
                $.switchIndex($(carousel).children("li").index(list[0]));
                $(list[0]).stop(true,true).addClass('on').delay(animateTime/2).fadeIn(animateTime);
            }
        }});
    }
})(jQuery);