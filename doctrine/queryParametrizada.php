<?php

echo '<br><br> Query parametrizada <br>';

$id = $_GET['id'];

if(isset($_GET['id'])){
    $sql = 'SELECT * FROM userDoctrine where id = :meuID';
    $result = $comn->prepare($sql);
    $result->bindValue('meuID', $id);
}else{
    $sql = 'SELECT * FROM userDoctrine';
    $result = $comn->prepare($sql);
}

$result->execute();

while($row = $result->fetch()){
    echo $row['nome'] . '<br>';
}

#OUTRA FORMA DE USAR
$user = $comn->fetchAll('select * from jogos_brasileirao limit 50');
echo '<pre>';
var_dump($user);
echo '</pre>';