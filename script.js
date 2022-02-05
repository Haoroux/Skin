var button = document.getElementById('Samurai');
	console.log(button);


button.addEventListener('click', () => {
	var output = document.getElementById('outputSamurai');

   output.innerHTML = `<div id="outputSamuraiResult"><img src="Samurai/bordeaux.png">
		<img src="Samurai/gris.png">
		<img src="Samurai/Noir.png">
		<img src="Samurai/noirFonce.png">
		<img src="Samurai/panda.png">
		<img src="Samurai/rouge.png">
		<img src="Samurai/rougeVif.png">
		<img src="Samurai/turquoise.png"></div>`;
	var Result = document.getElementById('outputSamuraiResult')
		
		button.addEventListener('dblclick', () => {
			output.removeChild(Result)
	
		});
});


