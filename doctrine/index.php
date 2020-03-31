<?php

require_once('vendor/autoload.php');

#CONEXAO COM O BANCO
require('conexao.php');

#FORMAS DE FAZER CONSULTA
#-Query paradrão
// require('queryPadrao.php');

#-Query parametrizada
// require('queryParametrizada.php');


#-Query Bulider
// require('queryBuilder.php');

$queryBuilder = $comn->createQueryBuilder();
$result = $queryBuilder->select('nome')
                       ->from('userDoctrine')
                       ->execute();


while($row = $result->fetch()){
    echo $row['nome'] . '<br>';
}
