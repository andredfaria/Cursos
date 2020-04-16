// entrar pelo navegador
// buscar o usuario que te enterrese
// clicar em seguidores
// inspecionar elementos
// colocar as casse do boatao seguir geralmente é o L3NKy
// colocar as casse do boatao seguindo geralmente é o _8A5w5
// rodar o script

let botao;
let contador = 0;

let array = document.querySelectorAll('classDoBotaoSeguir');

array.forEach(v, i) => {
	setTimeout(() => {
		if(!v.classList.contains('ClassDoBotaoSeguindo')){
			v.click();
			contador++;
			console.log('ja seguiu '+contador);
		}else{
			console.log('ja seguiu esse usuario');
		}
	});

}

let botao;
let contador = 0;

let array = document.querySelectorAll('L3NKy');

array.forEach((v, i) => {
	setTimeout(() => {
		if(!v.classList.contains('_8A5w5')){
			v.click();
			contador++;
			console.log('ja seguiu '+contador);
		}else{
			console.log('ja seguiu esse usuario');
		}
	});

});