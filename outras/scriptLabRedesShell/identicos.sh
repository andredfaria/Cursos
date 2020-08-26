#!/bin/bash

# Usage: ./identicos.sh pdf

NOME="André de Faria Carvalho"
DISCIPLINA="Lab. de S.O./Redes"
HOME="/home/ricardo/Desktop"
arquivo="a.txt"
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

for i  in  $(ls ~); do
    # echo $i
    if cmp $i $arquivo
    then
    echo -e "OS ARQUIVOS" $i "e" $arquivo "SÃO IGUAIS\\n"
    else
    echo -e "OS ARQUIVOS" $i "e" $arquivo "SÃO DIFERENTES\\n"
fi
done
