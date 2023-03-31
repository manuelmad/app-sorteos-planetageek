let participantes;
let cantidad_participantes;

// Establezco estado inicial del botón del sorteo
document.getElementById('button').disabled = false;

function chooseWinNer() {
	// Escojo un ganador al azar
	participantes = crearArray();
	if(participantes) {
		cantidad_participantes = participantes.length;
		console.log('cantidad participantes', cantidad_participantes);
		let indice_ganador = Math.floor(Math.random()*cantidad_participantes);
		let nombre_ganador = participantes[indice_ganador];
		console.log('indice_ganador', indice_ganador);
		console.log('ganador', nombre_ganador);

		// Limpio el párrafo del ganador y desactivo el botón mientras el sorteo está en marcha
		document.getElementById('winner').innerText = '';
		document.getElementById('button').disabled = true;
		document.getElementById('button').style.backgroundColor = '#e9e8e8';
		document.getElementById('gif-container').style.display = 'none';
		window.location.hash = "winner";

		// Hago aparecer nombres al azar en el párrafo del ganador
		let random = setInterval(() => {
			let indice_random = Math.floor(Math.random()*cantidad_participantes);
			//console.log(indice_random);
			let nombre_random = participantes[indice_random];
			//console.log(nombre_random);
			document.getElementById('winner').innerText = `

			${nombre_random}

			`;

		},200);

		// Detengo el proceso anterior, hago aparecer el nombre del ganador elegido y activo el botón nuevamente
		setTimeout(() => {
			clearInterval(random);
			document.getElementById('winner').innerText = `🥳🎉🥳🎉🥳

			(${indice_ganador+1}) ${nombre_ganador}

			🥳🎉🥳`;
			document.getElementById('button').disabled = false;
			document.getElementById('button').style.backgroundColor = '#03fbfa';
			document.getElementById('gif-container').style.display = 'block';
			window.location.hash = "gif-container";
		}, 5000);
	}
}