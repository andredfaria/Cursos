<?php

use Doctrine\DBAL\Configuration;
use Doctrine\DBAL\DriverManager;


$param = [
    'dbname' => 'teste',
    'user' => 'dev',
    'password' => 'dev',
    'host' => 'localhost',
    'driver' => 'pdo_mysql'
];
//OU
$url = [
    // 'url' => 'protocolo(Drive)://usuario:senha@host/dbname'
    'url' => 'mysql://dev:dev@localhost/teste'
];

$config = new Configuration;

$comn = DriverManager::getConnection($url, $config);