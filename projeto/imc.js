var trsPacientes = document.getElementsByClassName("paciente");

for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {
	
	var pacienteTr = trsPacientes[posicaoAtual]; //monta e adciona paciente no array 'pacientes'
	var nomeTd = pacienteTr.getElementsByClassName("info-nome")[0]; // pega tr do nome do paciente ataul
	var pesoTd = pacienteTr.getElementsByClassName("info-peso")[0]; // pega tr do peso do paciente atual
	var alturaTd = pacienteTr.getElementsByClassName("info-altura")[0]; // pega tr da altura do paciente atual

	var pacienteAtual = {
		nome : nomeTd.textContent,
		peso : pesoTd.textContent,
		altura : alturaTd.textContent,
		pegaImc : function() {
	```
		if(this.altura != 0 && this.peso != 0) {//declarando uma função anônima
			var imc = this.peso / (this.altura * this.altura);
			return imc;
	}	else {
		console.log("Não posso dividir por zero");
	}

	}
	}

	var imc = pacienteAtual.pegaImc(); //invoca a função que declaramos anteriormente //passando o pacienteAtual

	var imcTd = pacienteTr.getElementsByClassName("info-imc")[0]; // pega tr do imc do paciente atual
	imcTd.textContent = imc;
	
	console.log(imc);

}	