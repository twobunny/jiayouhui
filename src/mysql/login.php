<?php
    require("connect.php");

    //获取前端数据
    $userid=isset($_GET["userid"]) ?  $_GET["userid"]:'';
    $password=isset($_GET["password"]) ? $_GET["password"]:'';
    
    //密码加密
    $password= md5($password);

    $sql="select * from user where userid='$userid' and password='$password' ";

    //获取查询结果
    $result=$conn->query($sql);

    if($result->num_rows>0){
        echo 'success';
    }else{
        echo 'fail';
    }

    //释放查询内存（销毁）
    $result->free();

    //关闭连接
    $conn->close();

?>