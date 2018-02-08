
require.config({
    paths:{
        'jquery':"../lib/jquery-3.2.1",
    }
})

require(['jquery','common'],function($){
    jQuery(function($){
        $('#ct_header').load('../html/header.html',function(){$(".tab1").css({display:'none'})});
        $('#ct_footer').load('../html/footer.html',function(){$(".wouldlike").css({display:'none'})});
        $('input[type=text]').nextAll('span').css({visibility:'hidden'});
        $('input[type=password]').nextAll('span').css({visibility:'hidden'});
        var countreg=0;
        //验证手机号
        $('#phone').on('blur',function(){
            if(!/^[\d]{11}$/.test($(this).val())){
                $(this).nextAll('span').css({visibility:'visible'});
                countreg--;
            }else{
                countreg++;
                $(this).nextAll('span').css({visibility:'hidden'});
            }});
        //验证图片验证码
        $('#imgcode').on('blur',function(){
            if(!/^1234$/.test($(this).val())){
                $(this).nextAll('span').css({visibility:'visible'});
                countreg--;
            }else{
                countreg++;
                $(this).nextAll('span').css({visibility:'hidden'});
            }});
        //验证密码
        $('#psw').on('blur',function(){
            if(!/^[\S]{6,16}$/.test($(this).val())){
                $(this).nextAll('span').css({visibility:'visible'});
                countreg--;
            }else{
                countreg++;
                $(this).nextAll('span').css({visibility:'hidden'});
            }});
        //验证错误密码
         $('#repsw').on('blur',function(){
            if($(this).val()===$('#psw')){

                $(this).nextAll('span').css({visibility:'visible'});
                countreg--;

            }else{
                countreg++;

                $(this).nextAll('span').css({visibility:'hidden'});
            }});
         //随机验证码
         $('#code').next().on('click',function(){
            $('#code').val(randomNumber(1000,9999));
         });
         //同一个事件源触发两次事件
         $('#red').on('mouseup',function(e){
            console.log(e.target)
            if($(this).prop("checked")===true){
                $("#btn_sign").prop({"disabled":false});
            }else{
                $("#btn_sign").prop({"disabled":false});
            }
         });

         $("#btn_sign").on('mouseup',function(){
            if(countreg===4){
                $.ajax({
                    url:'../mysql/sign.php',
                    data:{
                        userid:$('#phone').val(),
                        password:$('#psw').val(),
                    },
                    success:function(data){
                        if(data==='exit'){
                            alert("该用户名已经存在")

                        }else if(data==='success'){
                            //清空数据
                            $('input[type=text]').val('');
                            $('input[type=password]').val('');
                            location.href='../index.html';

                        }else{
                            console.log('数据库连接失败')
                        }
                    }
                })
            }else{
                alert("所输入信息不正确，请核对")
            }
         });
        
    })
})
