# js-rock-paper-scissors
First complete from the ground up JavaScript project.
## Constraints
- User must make a selection of "Rock" "Paper" "Scissors". All other text must be checked and then rejected if it is not an option.
- Rock > Scissors
- Scissors > Paper
- Paper > Rock 

```
ON start of game:
	set random selection of RPS to compare.
WHEN user enters RPS Option:
	If option is valid,
		Check to see if option selected has won the game.
		WHEN checking text. 
			IF option is scissors.
				IF option == randomSelection
					output "Game is a tie"
				ELSE IF randomSelection == Paper
					output "Scissors beat paper, you win!!!"
				ELSE IF randomSelection == Rock
					output "Rock beats scissors, damn! You loose!"
				ELSE
					output "Hmmmm not sure how we got here. Check the code.""
			IF option == Rock
				IF option == randomSelection
					output "The game is a tie."
				ELSE if randomSelection == Scissors
					output "Rock beats Scissors, you win"
				ELSE IF randomSelection == Paper
					output "Paper beats rock, you loose!"
				ELSE
					output "This ain't it cheif."
			IF option == Paper
				IF option == randomSelection
					output "The game is a tie."
				ELSE IF randomSeelction == Scissors
					output "Scissors beat Paper, you loose!"
				ELSE IF randomSelection == Rock
					output "Paper beats rock, you win!"
				ELSE
					output "Not sure how this happened."
	Else, option is invalid,
		Output text: "This is not a valid option."
		
```