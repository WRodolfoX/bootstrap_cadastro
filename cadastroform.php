<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">

    <title>nomeEmpresa</title>

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


    <!-- Custom styles for this template -->
    <link href="./css/padrao.css" rel="stylesheet">
    <link href="./css/login.css" rel="stylesheet">

</head>

<body class="text-center">

    <main class="form-signin">

        <form method="post" action="cadastro.php">
            <img class="mb-4" src="./assets/brand/bootstrap-logo-white.svg" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Cadastro do sistema</h1>

            <div class="form-floating">
                <input type="text" class="form-control" name="nomePessoa" id="nomePessoa" placeholder="Fulano" required>
                <label for="nomePessoa">Nome</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" name="emailPessoa" id="emailPessoa" placeholder="nome@email.com" required>
                <label for="emailPessoa">E-mail</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" name="senhaPessoa" id="senhaPessoa" placeholder="Senha" required>
                <label for="senhaPessoa">Senha</label>
            </div>
            <input type="hidden" name="nivelPessoa" value="1">
            <input type="hidden" name="dataCadastro" value="<?php echo date('d/m/Y');?>">
            <input type="hidden" name="horaCadastro" value="<?php echo date('H:i:s');?>">

            <button class="w-100 btn btn-lg btn-primary" type="submit">Cadastrar</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2020-<?php echo date("Y");?></p>
        </form>

    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>

</html>