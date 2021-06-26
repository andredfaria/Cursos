<?php

use Doctrine\DBAL\Schema\Schema;

$schema = new Schema();

$articleTable = $schema->createTable('article');

$articleTable->addColumn('id', 'integer', ['unsigned' => true]);
$articleTable->addColumn('nome', 'string', ['length' => 100]);
$articleTable->addColumn('descricao', 'text');
$articleTable->setPrimaryKey(['id']);

$articleTable->addColumn('user_id', 'integer');
$articleTable->addForeignKeyConstraint('userDoctrine', ['user_id'], ['id']);

$querys = $schema->toSql(new \Doctrine\DBAL\Platforms\MySqlPlatform);

// var_dump($querys);

foreach($querys as $q){
    $comn->query($q);
}