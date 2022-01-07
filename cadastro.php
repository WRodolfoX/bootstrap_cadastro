<?php

    require_once('./conexao.php');

    $nomePessoa = $_POST['nomePessoa'];
    $emailPessoa = $_POST['emailPessoa'];
    $senhaPessoa = $_POST['senhaPessoa'];
    $nivelPessoa = $_POST['nivelPessoa'];
    $dataCadastro = $_POST['dataCadastro'];
    $horaCadastro = $_POST['horaCadastro'];


    $sql_cadastro = mysqli_query($conexao, "INSERT INTO tb_pessoas (nomePessoa, emailPessoa, senhaPessoa, nivelPessoa, dataCadastro, horaCadastro) 
    VALUES ('$nomePessoa', '$emailPessoa','$senhaPessoa','$nivelPessoa','$dataCadastro', '$horaCadastro') ");

    if ($sql_cadastro === TRUE) {
        echo "<script>
        alert('Cadastrado como sucesso');
        windows.location.href='./';
        </script>";
    } else {
        echo "<script>
        alert('Erro no cadastrado');
        windows.location.href='cadastroform.php';
        </script>";
    }

?>