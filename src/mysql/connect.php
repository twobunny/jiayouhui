<?php
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="jiayouhui";

    //创建连接
    $conn = new mysqli($servername,$username,$password,$dbname);
    //检测连接
    if($conn-> connect_error){
        die("连接失败:" . $conn->conect_error);
    }
    //查询钱设置编码，防止输出乱码
    $conn->set_charset('utf8');
?>