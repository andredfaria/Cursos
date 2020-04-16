// entrar pelo navegador
// buscar a hashtag
// inspecionar elementos
// colocar as classe das fotos geralmente é o _9AhH0
// rodar o script

let contador = 0;

let array = document.querySelectorAll('_9AhH0');

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