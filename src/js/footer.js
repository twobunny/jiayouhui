function likepage(){
        //设置水平换页
        //计算页码
        var like=$(".like").width();
        var likepa=$(".like").parent().width();
        var rato=like/likepa;
        var page=Math.ceil(rato);
        var nowpage=1;
        $(".like").nextAll(".prev").on('click',function(){
            if(nowpage>1){
                 var $left=$(".like").css('left').slice(0,-2)*1;
                $(".like").animate({
                    left:$left+$(this).parent().width()*1,   
                });
                nowpage--;
            }
        });
        $(".like").nextAll(".next").on('click',function(){
            if(nowpage<2){
                var $left=$(".like").css('left').slice(0,-2)*1;
                $(".like").animate({
                        left:$left-$(this).parent().width()*1,   
                });
                nowpage++;
            }
        })
}