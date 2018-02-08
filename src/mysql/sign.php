<?php
    require("connect.php");

    $userid=isset($_GET["userid"])? $_GET["userid"]:'';
    $password=isset($_GET["password"])? $_GET["password"]:"";

    //建立查询
    $sql="select * from user where userid='$userid'";

    $res=$conn->query($sql);

    if($res->num_rows>0){
        echo "exit";
    }else{
        //加密
        $password=md5($password);

        $sql="insert into user(userid,password) values('$userid','$password')";

        $res=$conn->query($sql);
        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }

    //关闭
    $conn->close();
?>