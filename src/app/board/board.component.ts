// Board component
//
// This is a smart component, it is the model of the game.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
	squares: any[] = [];
	xIsNext: boolean = false;
	winner?: string;

  	constructor() { }

	// initial setup work is usually done in lifecycle hooks like this onInit
  	ngOnInit(): void {
		this.newGame();
		
  	}
	// re-instantiate the game
	newGame() {
		this.squares = Array(9).fill(null);
		this.xIsNext = true;
	}
	// accessor for current player
	get player() {
		// computed property (ternary operator)
		return this.xIsNext ? 'X' : 'O';
	}
	// eventHandler for when a move occurs (a square is chosen by a player)
	makeMove(selected: number) {
		// if game is ongoing and the square is empty/null, use splice to replace the value at the index selected with X or O
		if(this.winner == null && !this.squares[selected]) {
			this.squares.splice(selected, 1, this.player);	// this.player is 'X' | 'O'
			this.xIsNext = !this.xIsNext;
		}
		this.winner = this.calculateWinner();
	}
	// calculate the winner of the game, if any exists
	calculateWinner() {
		// each possible winning scenario - each array indicates a line of selected squares that satisfies victory.
		const lines = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2.4,6]
		];
		// check each winning scenario for fulfillment
		for(let i = 0; i < lines.length; i++) {
			const [a,b,c] = lines[i];
			// if squares[a] is non-null, and is the same as the other squares in its line, then that is the winner.
			if(
				this.squares[a] &&
				this.squares[a] === this.squares[b] &&
				this.squares[a] === this.squares[c]
			) {
				return this.squares[a];
			}
		}
		return null;
	}
}
