function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');

	const playerMove = argButtonName;
	console.log('ruch gracza to: ' + playerMove);

	function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
		if (argMoveId == 1) {
		return 'kamień';
		}
		else if (argMoveId == 2) {
		return 'papier';
		}
		else if (argMoveId == 3) {
		return 'nożyce';
		}
	}

	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);

	const computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
  
	function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
		if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		printMessage('<i class="fas fa-angry"></i><br>Wygrałeś!');
		}
		else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		printMessage('<i class="fas fa-angry"></i><br>Wygrałeś.');
		}
		else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('<i class="fas fa-angry"></i><br>Wygrałeś!!');
		}
		else if (argPlayerMove == argComputerMove) {
		printMessage('<i class="fas fa-meh-blank"></i><br>Remis! Dawaj jeszcze raz.');
		}
		else {
		printMessage('<i class="fas fa-grin-tongue-squint"></i><br>Przegrałeś!!!');
		}
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
	}

	displayResult(playerMove, computerMove);
}
  
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });