
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    }
})

require(['jquery'],function($){
    jQuery(function($){
        $('#ct_header').load('../html/header.html',function(){$(".tab1").css({display:'none'})});
        $('#ct_footer').load('../html/footer.html',function(){$(".wouldlike").css({display:'none'})});
        $('input[type=text]').nextAll('span').css({visibility:'hidden'});

        //验证手机号
        $('#phone').on('blur',function(){
            if(!/^[\d]{11}$/.test($(this).val())){
                $(this).nextAll('span').css({visibility:'visible'});
            }else{
                $(this).nextAll('span').css({visibility:'hidden'});
            }});
        //验证图片验证码
        $('#imgcode').on('blur',function(){
            if(!/^1234$/.test($(this).val())){
                $(this).nextAll('span').css({visibility:'visible'});
            }else{
                $(this).nextAll('span').css({visibility:'hidden'});
            }});
        //验证密码
        $('#psw').on('blur',function(){
            if(!/^[\S]{6,16}$/.test($(this).val())){
                $(this).nextAll('span').css({visibility:'visible'});
            }else{
                $(this).nextAll('span').css({visibility:'hidden'});
            }});
        //验证错误密码
         $('#repsw').on('blur',function(){
            if($(this).val()===$('#psw')){
                $(this).nextAll('span').css({visibility:'visible'});
            }else{
                $(this).nextAll('span').css({visibility:'hidden'});
            }});

         $('#red').on('click',function(){
            if($(this).prop("checked")===true){
                $("#btn_sign").prop({"disabled":false});
            }else{
                $("#btn_sign").prop({"disabled":false});
            }
         })

         $("#btn_sign").prop({"disabled":true}).on('click',function(){
            alert("注册成功")
         })
        
    })
})
