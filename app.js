const sitename = "Cadastro";
const urlsite = "xxx.com.br";

///////////////

class cadastro {
	constructor(nome, sobrenome, dataNascimento, pessoaFuncao) {
		this.nome = nome
		this.sobrenome = sobrenome
		this.dataNascimento = dataNascimento
		this.pessoaFuncao = pessoaFuncao

	}

	validarDados() {
		for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
		return true
	}
}

class bd {

	constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

	recuperarTodosRegistros() {

		//array de dados
		let dados = []

		let id = localStorage.getItem('id')

		//recuperar todas as dados cadastradas em localStorage
		for(let i = 1; i <= id; i++) {

			//recuperar a dado
			let dado = JSON.parse(localStorage.getItem(i))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if(dado === null) {
				continue
			}
			dado.id = i
			dados.push(dado)
		}

		return dado
	}

	pesquisar(dado){

		let dadosFiltradas = []
		dadosFiltradas = this.recuperarTodosRegistros()
		console.log(dadosFiltradas);
		console.log(dado) 

		//Nome
		if(dado.nome != ''){
			//console.log("filtro por nome");
			dadosFiltradas = dadosFiltradas.filter(d => d.nome == dado.nome)
		}

		
		return dadosFiltradas

	}

	remover(id){
		localStorage.removeItem(id)
	}
}

let bd = new Bd()

function cadastrarDado() {

	let nome = document.getElementById('nome')
	let sobrenome = document.getElementById('sobrenome')
	let dataNascimento = document.getElementById('dataNascimento')
	let pessoaFuncao = document.getElementById('pessoaFuncao')

	let dado = new Dado(
		nome.value, 
		sobrenome.value, 
		dataNascimento.value, 
		pessoaFuncao.value, 
	)


	if(dado.validarDados()) {
		bd.gravar(dado)

		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML = 'Dado foi cadastrada com sucesso!'
		document.getElementById('modal_btn').innerHTML = 'Voltar'
		document.getElementById('modal_btn').className = 'btn btn-success'

		//dialog de sucesso
		$('#modalRegistradado').modal('show') 
    //limpar campos após registro
        nome.value = '' 
		sobrenome.value = ''
		dataNascimento.value = ''
		pessoaFuncao.value = ''
		
	} else {
		
		document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
		document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
		document.getElementById('modal_btn').className = 'btn btn-danger'

		//dialog de erro
		$('#modalRegistradado').modal('show') 
	}
}

function carregaListadados(dados = [], filtro = false) {

    if(dados.length == 0 && filtro == false){
		dados = bd.recuperarTodosRegistros() 
	}

	let listaDados = document.getElementById("listaDados")
    listaDados.innerHTML = ''
	dados.forEach(function(d){

		//Criando a linha (tr)
		var linha = listaDados.insertRow();

		//Criando as colunas (td)
        
        // 	//Ajustar o tipo
        // 	switch(d.tipo){
            // 		case '1': d.tipo = 'Alimentação'
            // 			break
            // 		case '2': d.tipo = 'Educação'
            // 			break
            // 		case '3': d.tipo = 'Lazer'
            // 			break
            // 		case '4': d.tipo = 'Saúde'
            // 			break
            // 		case '5': d.tipo = 'Transporte'
            // 			break
            //   case '6': d.tipo = 'Outros'
            //     break
			
            // 	}
            
            linha.insertCell(0).innerHTML = d.nome
            linha.insertCell(1).innerHTML = d.sobrenome
            linha.insertCell(2).innerHTML = d.dataNascimento 
            linha.insertCell(3).innerHTML = d.pessoaFuncao

		//Criar o botão de exclusão
		let btn = document.createElement('button')
		btn.className = 'btn btn-danger'
		btn.innerHTML = '<i class="fa fa-times"  ></i>'
		btn.id = `id_dado_${d.id}`
		btn.onclick = function(){
			let id = this.id.replace('id_dado_','')
			//alert(id)
			bd.remover(id)
			window.location.reload()
		}
		linha.insertCell(4).append(btn)
		//console.log(d)
	})

 }
 
 function pesquisarDado(){
	 
	let nome = document.getElementById("nome").value
	let sobrenome = document.getElementById("sobrenome").value
	let dataNascimento = document.getElementById("dataNascimento").value
	let pessoaFuncao = document.getElementById("pessoaFuncao").value

	let dado = new dado(nome, sobrenome, dataNascimento, pessoaFuncao)

	let dados = bd.pesquisar(dado)
	 
	this.carregaListaDados(dados, true)

 }