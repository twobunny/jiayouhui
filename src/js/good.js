
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
        'zoom':"../lib/jquery.gdsZoom/jquery.gdsZoom",
    },
    shim:{
        'zoom':['jquery'],
    }
})

require(['jquery','zoom'],function($){
    jQuery(function($){
    $('#ct_header').load('../html/header.html',function(){$(".tab2").css({display:'none'})});
    $('#ct_footer').load('../html/footer.html',function(){$(".wouldlike").css({display:"none"})});


    //初始页面隐藏
    $(".guige").css({display:'none'});

    //放大镜
    $(".big").gdsZoom();

    //切换详情介绍页
    $(".des").on("click",'li',function(){
        $(".des .active").removeClass("active");
        $(this).addClass("active");
        $(".des").next().children().css({display:'none'}).eq($(this).index()).css({display:'block'});
    })

    //数量变化
    var $qty=$(".buy input");
    $qty.on('change',function(){
        if(!/^[\d]+$/.test($qty.val())|| $qty.val()*1<0){
            alert("购买数量输入格式不合法");
            return;
        }
    }).next().on('click',function(){
        $qty.val($qty.val()*1+1);
    });
    $qty.prev().on('click',function(){
        if($qty.val()*1!='1'){
            $qty.val($qty.val()*1-1);
        }
    })



    //获取地址栏参数
    var mes=location.search.substr(1);
    var arr=mes.split("=");

    //请求id对应的所有数据
    $.ajax({
        url:"../mysql/good.php",
        data:{
            id:arr[1],
        },
        success:function(data){
            var arr=JSON.parse(data);
            var obj=arr[0];
            //显示数据
            $(".idimg").attr({src:obj.imgurl});
            $(".name").html(obj.name);
            $(".price b").html("￥"+obj.price);
            $(".num span").html(obj.id);
            $(".chu span").html(obj.saleqty+"件");


           //写入cookie，加入购物车
            $("#addcar").on("mouseup",function(e){
                var cookies=document.cookie;
                cookies=cookies.split("; ")||cookies;
                var carlist=[];
                cookies.forEach(function(item){
                    var arr=item.split("=");
                    if(arr[0]==='carlist'){
                        carlist=JSON.parse(arr[1]);
                    }
                })
                
                var exit=false;
                //遍历购物车cookie
                carlist.forEach(function(item){
                    if(item.id===obj.id){
                        item.qty=item.qty*1+$(".buy input").val()*1;
                        exit=true;
                    }
                })
                //遍历完成后判断是否存在
                if(exit===false){
                    var cargood={
                        "id":obj.id,
                        "qty":1,
                    }
                    carlist.push(cargood);
                }
                document.cookie="carlist="+JSON.stringify(carlist);
            })    
        }
    });

    

    })
})
