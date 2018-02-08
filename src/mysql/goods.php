<?php
    require("connect.php");
     //获取前端数据
    $category=isset($_GET["category"]) ?  $_GET["category"]:'';
    $page=isset($_GET["page"]) ?  $_GET["page"]:1;
    $qty=20;
    $sql="select * from goods";
    if($category!=''){
        $sql.=" where category='$category'";
    }
    //获取查询结果
    $result=$conn->query($sql);

    $row=$result->fetch_all(MYSQLI_ASSOC);


    if(count($row)>0){
       //根据分页获取数据
       $res=array(
            'data'=>array_slice($row,($page-1)*$qty,$qty),
            'total'=>count($row),
            'qty'=>$qty,
            'page'=>$page*1,
        );
       echo json_encode($res,JSON_UNESCAPED_UNICODE);
        // print_r json_encode($res,JSON_UNESCAPED_UNICODE);
    }else{
        echo 'fail';
    }

    //释放查询内存（销毁）
    $result->free();

    //关闭连接
    $conn->close();
?>