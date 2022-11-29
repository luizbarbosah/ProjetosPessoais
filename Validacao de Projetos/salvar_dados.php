<?php

$conexao = MySQLi ("mysql:host="localhost";dbname="capacitacao";user="usuario";password=");

$municipio = isset($_POST['municipio']) ? $_POST ['municipio'] : "";
$periodo_inicio = isset($_POST['periodo_inicio']) ? $_POST ['periodo_inicio'] : "";
$periodo_fim = isset($_POST['periodo_fim']) ? $_POST ['periodo_fim'] : "";
$nome_coord = isset($_POST['nome_coord']) ? $_POST ['nome_coord'] : "";
$tel_coord = isset($_POST['tel_coord']) ? $_POST ['tel_coord'] : "";
$email_coord = isset($_POST['email_coord']) ? $_POST ['email_coord'] : "";
$habilit_coord = isset($_POST['habilit_coord']) ? $_POST ['habilit_coord'] : "";


$sql = "insert into capacitaca (municipio, periodo_inicio, periodo_fim, nome_coord, tel_coord, email_coord, habilit_coord) values ('$municipio', '$periodo_inicio', '$periodo_fim', '$nome_coord', '$tel_coord', '$email_coord', '$habilit_coord')";
$resultado = $conexao->query($sql) or trigger_error($conexao->error);

if ($resultado == 'true'){
    echo "Dados inseridos com sucesso";

}else{
    echo"false";
}

$conexao->close();

?>