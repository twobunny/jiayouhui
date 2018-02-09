    function addevent(hidden){
             $(".gou").on('click',function(){
                    location.href='../html/car.html';
                });

             if(hidden){
                    $(".tab1 h2").on('mouseover',function(){
                        $(".tab2").css({display:'block'})
                    });
                    $(".tab1 h2").on('mouseout',function(){
                        $(".tab2").css({display:'none'})
                    });
             }

            $(window).scroll(function(){
                if($(window).scrollTop()>100){
                    $(".totop").fadeIn('slow');
                }else{
                    $(".totop").fadeOut('slow');
                } 
            });

            $(".totop").on('click',function(){
                $('html').animate({
                    scrollTop:0,
                })
            })

    };

    function redcookie(){

         //获取页面cookie
            var cookies=document.cookie;
            cookies=cookies.split("; ")||cookies;
            var carlist=[];
            cookies.forEach(function(item){
                var arr=item.split("=");
                if(arr[0]==='carlist'){
                    carlist=JSON.parse(arr[1]);
                }
            })
        //类同购物车代码
            var ids=[];
            var qtys={};
            //遍历获取所有id,同时指定每个id号对应的数量
            carlist.forEach(function(item){
                ids.push(item.id);
                qtys[item.id]=item.qty;
            })
            ids=ids.join(",");

            $.ajax({
             url:"../mysql/good.php",
                data:{
                    id:ids,
                },
                success:function(data){
                    var res=JSON.parse(data);
                    //定义好合计金额等信息
                    var sumqty=0;
                    var sumprice=0;
                    res=res.map(function(item){
                        var q=qtys[item.id];
                            //计算
                            sumqty+=q*1;
                            sumprice+=q*item.price;
                        return`<li data-id='${item.id}'>
                                    <img src="${item.imgurl}"alt="" />
                                    <p class="item_name">${item.name}</p>
                                    <p>数量   <em class="item_qty">${q}</em></p>
                                </li>`   
                    }).join("");
                    //写入小型购物车
                    $("#mycar ul").html(res);
                    $(".gou .qty").html(sumqty);
                    $("#totalnum").html(sumqty);
                    $("#totalsum").html("￥"+sumprice);
                }
            })
};
