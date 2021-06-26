<?php

echo '<br><br> Query Build <br>';


$queryBuilder = $comn->createQueryBuilder();

$result = $queryBuilder->select('nome')
                       ->from('userDoctrine');

if(isset($_GET['id'])){
    $queryBuilder->where('id = :id')
                 ->setParameter(':id', $_GET['id']);
}

$result = $queryBuilder->execute();


while($row = $result->fetch()){
    echo $row['nome'] . '<br>';
}