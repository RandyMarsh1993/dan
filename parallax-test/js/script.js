function rotateContent() {
	
	let line = document.getElementsByClassName('parallax__line');
	
	for (let i = 0; i < line.length; i++) {
		line[i].classList.toggle('parallax__line_3d');
	}
}