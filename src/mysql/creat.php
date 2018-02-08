<?php
    require("connect.php");
     //获取前端数据
    $data=isset($_GET["data"]) ?  $_GET["data"]:'';
    // print_r($data);
    // var_dump $data;


    $data=json_decode($data);

    var_dump($data);

    $id=$data->id;
    $name=$data->name;
    $price=$data->price;
    $qty=$data->qty;
    $saleqty=$data->saleqty;
    $category=$data->category;
    $imgurl=$data->imgurl;
    $sql="insert from goods(name,price,qty,saleqty,category,imgurl) values('$name','$price','$qty','$saleqty','$category','$imgurl')";

    echo $sql;
    // 获取查询结果
    $result=$conn->query($sql);

    if($result){
        echo 'success';
    }else{
        echo $sql;
        echo 'fail';
    }
    // 关闭连接
    $conn->close();
?>