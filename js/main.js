(() => {
	//this is same as the print() in python
	console.log('loaded');

// same as an array in python
	var choices = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var tigger = document.querySelector("#play");
	var status = document.querySelector(".winlose");

	function play_game() {
		console.log("called game function");


		// generate a random number and use that to pick a weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		console.log(computer);

		var player_choice = player.value;
		console.log(player_choice);

		if (computer.toLowerCase() == player_choice.toLowerCase()) {
			// tie
			console.log('tie');
			status.textContent = "Tie! You live to shoot another day!"
		}

		else if (player_choice.toLowerCase() == "Rock") {
			if (computer.toLowerCase() == "Scissors") {
				console.log('win');
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			} else {
				console.log("lose");
				status.textContent = `You lost! ${computer} beats ${player_choice}!`;
			} 
		}

		else if (player_choice.toLowerCase() == "Paper") {
			if (computer.toLowerCase() == "Rock") {
				console.log('win');
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			} else {
				console.log("lose");
				status.textContent = `You lost! ${computer} beats ${player_choice}!`;
			}
		}

		else if (player_choice.toLowerCase() == "Scissors") {
			if (computer.toLowerCase() == "Paper") {
				console.log('win');
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			} else {
				console.log("lose");
				status.textContent = `You lost! ${computer} beats ${player_choice}!`;
			}
		}

		else {
			alert("input a valid selection")

			}
		}

		trigger.addEventListener("click", play_game);

	})();

