document.getElementById('ship').addEventListener('click', showHackPoint);
document.getElementById('ship').addEventListener('mouseover', showHackPoint);

function showHackPoint(e) {
	var image = document.getElementById('overlay')
	var system = 'empty'

	if(e.target && e.target.nodeName == "BUTTON") {
		system = e.target.dataset.system
	}

	image.src = image.dataset.path + '/' + system + '.png'
}