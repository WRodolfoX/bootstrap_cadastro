<?php

    include_once('./conexao.php');

    $email = $_POST['emailPessoa'];
    $senha = $_POST['senhaPessoa'];

    $sql_login = mysqli_query($conexao, "SELECT * FROM tb_pessoas WHERE emailPessoa='$email' AND senhaPessoa='$senha'" );
    if(mysqli_num_rows($sql_login)!=0) {
        header('location:principal.php');
    } else {
        echo "<script>
        alert('Cadastro não encontrado');
        window.location.href='./index.php';
        </script>";
    }
?>