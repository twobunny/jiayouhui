
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    }
})

require(['jquery','common'],function($){
    jQuery(function($){
    $('#ct_header').load('../html/header.html',function(){$(".tab2").css({display:'none'})});
    $('#ct_footer').load('../html/footer.html');});
    goodlist=[];
    //生成数据  id,name,price,qty,saleqty,category
    categorys=["收纳","创意家居","清洁用品"];
    for(var i=0;i<50;i++){
        var obj={};
        if(i)0000001,000050
        if(i<10){
            obj.id="00000"+i;  
        }else{
            obj.id="0000"+i;  
        }
        obj.name="美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶--"+i;
        obj.price=randomNumber(80,480);
        obj.qty=100;
        obj.saleqty=randomNumber(0,150);
        obj.category=categorys[randomNumber(0,3)];
        obj.imgurl="../images/good1.jpg";
        goodlist.push(obj);
    //     $.ajax({
    //     url:"../mysql/creat.php",
    //     data:{
    //         data:JSON.stringify(obj),
    //     },
    //     success:function(data){
    //         console.log(data);
    //     }
    // })
    }
    console.log(JSON.stringify(goodlist));
    //数据库写入数据
    
})
