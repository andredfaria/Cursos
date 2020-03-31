<?php 

/* 
* http://localhost:3333/?id=0
* Da pra usar sql inject
* http://localhost:3333/?id=1%20or%20true=true
* http://localhost:3333/?id=1 or 1=1 
*/

$filter = '';

if(isset($_GET['id'])){
    $filter = ' where id =' . $_GET['id'];
}

$sql = 'SELECT * FROM userDoctrine' . $filter;
$result = $comn->query($sql);


$result->execute();

while($row = $result->fetch()){
    echo $row['nome'] . '<br>';
}
