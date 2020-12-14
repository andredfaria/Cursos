<?php

use Doctrine\DBAL\Configuration;
use Doctrine\DBAL\DriverManager;


$param = [
    'dbname' => 'marvel',
    'user' => 'root',
    'password' => '',
    'host' => 'localhost',
    'driver' => 'pdo_mysql'
];
//OU
$url = [
    // 'url' => 'protocolo(Drive)://usuario:senha@host/dbname'
    'url' => 'mysql://root:@localhost/marvel'
];

// $config = new Configuration;

// $comn = DriverManager::getConnection($url, $config);