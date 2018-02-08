<?php
    require("connect.php");
     //获取前端数据
    $catagory=isset($_GET["catagory"]) ?  $_GET["catagory"]:'';
    $page=isset($_GET["page"]) ?  $_GET["page"]:1;
    $qty=50;

    $sql="select * from goods where catagory='$catagory'";

    //获取查询结果
    $result=$conn->query($sql);

    if($result->num_rows>0){

       $result=json_decode($result);
       //根据分页获取数据
       $res=array(
            'data'=>array.slice($result,($page-1)*$qty,$qty),
            'total'=>count($result),
            'qty'=>$qty,
            'page'=>$page*1,
        )
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }else{
        echo 'fail';
    }

    //释放查询内存（销毁）
    $result->free();

    //关闭连接
    $conn->close();
?>