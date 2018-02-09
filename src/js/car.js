
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    },
    shim:{
        'header':['jquery']
    }
})

require(['jquery',"header"],function($){
    jQuery(function($){
        $('#ct_header').load('../html/header.html',function(){
            addevent(true);
            redcookie();

            $(".tab2").css({display:'none'})});
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
                    //定义好合计金额等信息
                    var sumqty=0;
                    var sumprice=0;

                    res=res.map(function(item){
                        var q=qtys[item.id];
                        //计算
                        sumqty+=q*1;
                        sumprice+=q*item.price;

                        return`<tr data-id='${item.id}' class="active">
                                <td><input type="checkbox" checked=true></td>
                                <td>
                                    <img src='${item.imgurl}'/>
                                </td>
                                <td>
                                    <p>${item.name}</p>
                                </td>

                                <td><b class="sale">${item.price}</b></td>
                                <td class="num">
                                    <span class="clearfix">
                                        <em class="subtract"> - </em>
                                        <input type="text" value='${q}' id="qty"/>
                                        <em class="add"> + </em>
                                    </span><br />
                                    <i>限购52件</i>
                                </td>
                                <td><b class="sum">${q*item.price}</b></td>
                                <td><a class="delete">删除</a></td>
                            </tr>`;
                    }).join("");
                    $('.goods tbody').html(res);
                    $('#sumqty').html(sumqty);
                    $('#money').html('￥'+sumprice);

                    //全选
                    $(".all").on('click',function(){
                        console.log($(this).prop('checked'))
                        if($(this).prop('checked')===true){
                            $("tbody tr").addClass('active').find("input:checkbox").prop('checked',true);
                            $(".all").prop('checked',true);
                        }else{
                            $("tbody tr").removeClass('active').find("input:checkbox").prop('checked',false);
                            $(".all").prop('checked',false);
                        }
                        heji();

                    });

                    //单条记录的删除记录
                    $(".delete").on('click',function(){
                        var $tr=$(this).parents("tr");
                        updatecookie($tr.attr('data-id'));
                        $tr.remove();
                        heji();
                        isAll();
                    })

                    //删除选中记录
                    $("#del").on('click',function(){
                        var $trs=$("tbody tr[class=active]");
                        $trs.each(function(){
                            updatecookie($(this).attr('data-id'));
                        })
                        $("tbody tr[class=active]").remove();
                        heji();
                        isAll();
                    })

                    //选择记录
                    $("tbody input[type=checkbox]").on('click',function(){
                        $(this).parents("tr").toggleClass('active');
                        heji();
                        isAll();
                        updatecookie();
                    })

                    //加减按钮
                    $(".subtract").on('mouseup',function(){
                        var val=$(this).next().val()*1-1;
                        if(val>=1){
                            $(this).next().val(val);
                            $(".num input").trigger('change');
                        }

                    });
                    $(".add").on('mouseup',function(){
                        var val=$(this).prev().val()*1+1;
                        $(this).prev().val(val);
                        $(".num input").trigger('change');

                    });

                    //表单信息改变事件
                    $num=$(".num input");

                    $num.on('change',function(){

                        $this=$(this);

                        //确认输入框内只能输入数量
                        if(!/^[\d]$/.test($num.val())){
                            $num.val(1);
                        }

                        var dataid=$this.parents("tr").attr('data-id');
                        //信息改变同时改变cookie
                        carlist.forEach(function(item){
                            if(dataid==item.id){
                                item.qty=$this.val();
                                console.log(carlist)
                            }
                        });
                        document.cookie="carlist="+JSON.stringify(carlist);

                        //修改表格内的合计信息
                        var sum=$this.val()*$this.parents("tr").find(".sale").html();
                        $this.parents("tr").find('.sum').html(sum);
                        heji();          
                    })  
                }
            })
        }
        //修改结算内的合计信息
        function heji(){
                    var $n=$("tbody tr[class=active]").find(".num input");
                    var sm=0;var sq=0;
                    for(var i=0;i<$n.length;i++){
                        var $nu=$n.eq(i);
                        sq+=$nu.val()*1;
                        sm+=$nu.val()*($nu.parents('tr').find('.sale').html());
                    }
                    $('#sumqty').html(sq);
                    $('#money').html('￥'+sm);
        }
        //判断是否全选
        function isAll(){
            if($("tbody tr[class=active]").length===$("tbody tr").length){
                $(".all").prop('checked',true);
            }else{
                $(".all").prop('checked',false);
            }
        }

        //删除cookie
        function updatecookie(id){
            carlist.forEach(function(item,idx){
                if(item.id===id){
                    carlist.splice(idx,1);
                    document.cookie="carlist="+JSON.stringify(carlist);
                }
            })
        }

    })
})
