<?php

echo '<br><br> Query parametrizada <br>';


if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = 'SELECT * FROM jogos_brasileirao where id = :meuID';
    $result = $comn->prepare($sql);
    $result->bindValue('meuID', $id);
}else{
    $sql = 'SELECT * FROM jogos_brasileirao';
    $result = $comn->prepare($sql);
}

$result->execute();

while($row = $result->fetch()){
    echo $row['Equipe_mandante'] . '<br>';
}

#OUTRA FORMA DE USAR
$user = $comn->fetchAll('select * from jogos_brasileirao limit 50');
echo '<pre>';
var_dump($user);
echo '</pre>';