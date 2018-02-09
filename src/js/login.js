//模块配置
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    },
    shim:{
        'header':['jquery'],
    }
})
require(['jquery','header'],function($){
    jQuery(function($){
        $('#ct_header').load('../html/header.html',function(){addevent(true);$(".tab1").css({display:'none'})});
        $('#ct_footer').load('../html/footer.html',function(){$(".wouldlike").css({display:'none'})});
        
        //初始提示框隐藏
        $('.tishi').css({visibility:'hidden'});
        $('p input+i').css({visibility:'hidden'});

        //验证手机输入
        $("#phone").on('blur',function(){
            if(!/^[\d]{11}$/.test($("#phone").val())){
                $('.tishi').css({visibility:'visible'}).html("用户名格式错误");
                $(this).next().css({visibility:'hidden'});
            }else{
                $('.tishi').css({visibility:'hidden'});
                $(this).next().css({visibility:'visible'});
            }
        });
        
        //登录
        $("#login").on("mouseup",function(){
            // e.preventDefault();
            //发送请求
            $.ajax({
                url:"../mysql/login.php",
                data:{
                    userid:$("#phone").val(),
                    password:$("#password").val(),
                },
                //成功后执行
                success:function(data){
                    if(data==='success'){
                        location.href="../index.html";
                    }else{
                        $(".tishi").html("用户名或密码错误").css({visibility:'visible'});
                        $("input+i").css({visibility:'hidden'});
                    }
                }
            })
        })
    })
})
