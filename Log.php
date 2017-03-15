<?php 
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_POST['username'];
$password = $_POST['password'];

echo "账号: {$username}, 密码: {$password}";