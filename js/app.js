var winning = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
var xplays = [];
var oplays = [];
var oplay = 0;

$(document).ready( function() {

//write computerPlay function >> new random number every time i click....
	function computerPlay() {
		oplay = Math.floor((Math.random() * 9) +1);
		return oplay;
	}

//computer adds random "O" to board
	function RandomPlay() {
		do {
			computerPlay()
				console.log(oplay)
		}
		while  (xplays.includes(oplay) || (oplays.includes(oplay)));
		oplays.push(oplay);
		var oplayString = oplay.toString();
		$("[data-cell="+oplayString+"]").html('<span class="o">O</span>');
		if (CheckWin(oplays)){
			console.log("o wins")
		}
	}

//is there a winner?
	function CheckWin(plays) {
		if (oplays.length + xplays.length == 9) {
			console.log("DRAW!");
			return true;
		}
			return false;
	}


	$('div.grid').click(function() {
		$(this).html('<span class="x">X</span>');
		xplays.push($(this).data('cell'));
			console.log(xplays);
		if (CheckWin(xplays)){
			console.log("x wins")
		}
		else {
			RandomPlay();
		}
	})
});