
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    },
    shim:{
        'header':['jquery'],
    }
})

require(['jquery','common','header'],function($){
    jQuery(function($){
    $('#ct_header').load('../html/header.html',function(){
        addevent(true);
        redcookie();

        $(".tab2").css({display:'none'});
    });
    $('#ct_footer').load('../html/footer.html');});
    
    //默认加载
    $.ajax({
        url:'../mysql/goods.php',
        success:function(data){
            var goods=JSON.parse(data);

            //生成商品列表
            var goodslist=jiexi(goods.data);
            $(".goods").html(goodslist);

            //当前分页
            var nowpage=goods.page;

            //生成页码
            var maxpage=Math.ceil(goods.total/goods.qty);
            for(var i=0;i<maxpage;i++){
                var $li=$('<li/>');
                $li.html(i+1);
                $(".page").append($li);
            }
            //第一页高亮
            $(".page li").first().addClass("active");

            //点击对应页码加载
            $(".page").on("mouseup",'li',function(e){
                $.ajax({
                    url:"../mysql/goods.php",
                    data:{
                        page:$(this).html(),
                    },
                    success:function(data){
                        var newgoods=JSON.parse(data);
                        $(".goods").html(jiexi(newgoods.data));
                        $(".page .active").removeClass("active");
                        $(e.target).addClass("active");                        
                    }
                })
            })

        }
    });
    
    //点击商品进入详情页
    $(".goods").on('mouseup','li',function(){
        location.href="../html/good.html?id="+$(this).attr("data-id");
    })
    
    function jiexi(data){
        return data.map(function(item){
                return`<li data-id='${item.id}'>
                                <img src='${item.imgurl}'/>
                                <p>${item.name}</p>
                                <p><span class="sale">￥${item.price}</span><del class="price">￥${item.price}</del></p>
                                <p>月销<span class="yue">${item.saleqty}</span>件</p>
                        </li>`;
            }).join('');
    }
    
})
