#!/bin/bash

# Usage: ./identicos.sh pdf

NOME="André de Faria Carvalho"
DISCIPLINA="Lab. de S.O./Redes"
HOME="/home"
file1="echo"
file2="echo"
exten=".txt"

echo "Nome: ${NOME}"
echo "Nome: ${DISCIPLINA}"
echo "Area de trabalho: ${HOME}"

echo '
$0 Identifica o comando emitido\
$@ O conjunto dos argumentos\
$* Relacao dos argumentos informados\
$# Numero de argumentos informados\
$? Codigo de retorno do ultimo comando executado\
$$ Numero (pid) de identificacao do processo\
$! Identificacao (pid) do ultimo processo executado em background'

a=ls
for i in $a ; do
  echo "counter: $i"
done

for i  in  $(ls ~); do 
    if cmp $i $file2 >/dev/null   # testa o status do comando cmp
    then
    echo "os arquivos são iguais"
    else
    echo "os arquivos são distintos"
fi
done

