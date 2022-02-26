function getMoveName(argMoveId) {
	if (argMoveId == 1) {
	  return 'kamień';
	} else if (argMoveId == 2) {
	  return 'papier';
	} else if (argMoveId == 3) {
	  return 'nożyce';
	}
}
  
function displayResult(argPlayerMove, argComputerMove) {
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		printMessage('<i class="fas fa-angry"></i><br>Wygrałeś!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		printMessage('<i class="fas fa-angry"></i><br>Wygrałeś.');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('<i class="fas fa-angry"></i><br>Wygrałeś!!');
	} else if (argPlayerMove == argComputerMove) {
		printMessage('<i class="fas fa-meh-blank"></i><br>Remis! Dawaj jeszcze raz.');
	} else {
		printMessage('<i class="fas fa-grin-tongue-squint"></i><br>Przegrałeś!!!');
	}
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
}
  
function buttonClicked(argButtonName) {
	clearMessages();

	const playerMove = argButtonName;
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	const computerMove = getMoveName(randomNumber);

	displayResult(playerMove, computerMove);
}
  
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function () {
buttonClicked('kamień');
});

buttonPaper.addEventListener('click', function () {
buttonClicked('papier');
});

buttonScissors.addEventListener('click', function () {
buttonClicked('nożyce');
});