<?php
	require("connect.php");

    $id=isset($_GET["id"])? $_GET["id"]:'';

    $sql;

    if($id!=''){

        //如果传入的数据是多条,字符串
        if(strpos($id,',')!=false){
            $one=explode(",",$id);
            $sql="select * from goods where id='".implode("' OR id='",array_merge($one))."'";
        }
        else{

            $sql="select * from goods where id ='$id' ";

        }
        
        // echo $sql;

        $result=$conn->query($sql);

        $row=$result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);

    }else{
        echo "fail";
    }
?>