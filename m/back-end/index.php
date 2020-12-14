<?php

require_once "vendor/autoload.php";

$app = new \slim\App();

$app->get('/', function ($req, $res, $args) {
    return $res->getBody()->write('teste');
});

$app->run();
