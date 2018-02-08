
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    }
})

require(['jquery'],function($){
    jQuery(function($){
        $('#ct_header').load('../html/header.html',function(){$(".tab2").css({display:'none'})});
        $('#ct_footer').load('../html/footer.html',function(){$(".wouldlike").css({display:"none"})});

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

        //空购物车状态
        if(carlist.length===0){
            $('.car').css({'text-align':'center'}).children().css({display:'none'});
            $("<img/>").attr({src:"../images/gwc_kong.png",height:500,width:500}).appendTo($('.car'));
        }else{
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
                    console.log(res);
                    //定义好合计金额等信息
                    var sumqty=0;
                    var sumprice=0;

                    res=res.map(function(item){
                        var q=qtys[item.id];
                        //计算
                        sumqty+=q*1;
                        sumprice+=q*item.sale;

                        return`<tr>
                                <td><input type="checkbox"></td>
                                <td>
                                    <img src='${item.imgurl}'/>
                                </td>
                                <td>
                                    <p>${item.name}</p>
                                </td>

                                <td><b class="sale">${item.price}</b></td>
                                <td class="num">
                                    <span class="clearfix">
                                        <a href="" class="subtract"> - </a>
                                        <input type="text" value='${q}' id="qty"/>
                                        <a href="" class="add"> + </a>
                                    </span><br />
                                    <i>限购52件</i>
                                </td>
                                <td><b class="sum">${q*item.price}</b></td>
                                <td><a href=""class="delete">删除</a></td>
                            </tr>`;
                    }).join("");
                    $('.goods tbody').html(res);

                    $num=$(".num input");
                    $num.on('change',function(){
                        if(!/^[\d]$/.test($num.val())){
                            $num.val(1);
                        }
                    })
                    

                }
            })
        }



    })
})
