function rotateContent() {
	
	let firstLine = document.getElementById('line_1');
	let secondLine = document.getElementById('line_2');
	let thirdLine = document.getElementById('line_3');
	let fourthLine = document.getElementById('line_4');

	firstLine.classList.toggle('parallax__line_3d');
	secondLine.classList.toggle('parallax__line_3d');
	thirdLine.classList.toggle('parallax__line_3d');
	fourthLine.classList.toggle('parallax__line_3d');
}