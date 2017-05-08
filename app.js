
function init() {
	var vars = new varInitials();
  printTable(vars.tablePosition);
  var gamers = new playersNumber();
  players(gamers.quantity);
  printPlayers(gamers.cpu);
  turnPlayer();
  document.turn = player_1.turn;
	document.name = player_1.name;

}

function varInitials() {
	this.tablePosition =
			[
				[
					['+'], ['+'], ['+']
				],
				[
					['+'], ['+'], ['+']
				],
				[
					['+'], ['+'], ['+']
				],
			]
}

function printTable(tablePosition) {
	for (var i = 0; i < tablePosition.length; i++) {
		for (var p = 0; p < tablePosition[i].length; p++) {
			var item = '<li class="item-table"></li>';
			document.getElementById('GameTable').innerHTML += item;
		}
	}
}
function printPlayers(cpu){
	for (var i = 1; i <= 2; i++) {
		if (i == 2) {
			if (cpu) {
				document.getElementById('player_'+ i).innerHTML += '<strong>'+ window["player_" + i].name + ' CPU</strong>' ;
				break;
			}
		}
		document.getElementById('player_'+ i).innerHTML += '<strong>'+ window["player_" + i].name + '</strong>' ;
	}
}
function playersNumber() {
	var num = parseInt(prompt('cantidad de jugadores'));
	if (num <= 2 && num >= 1) {
		this.quantity = num;
		this.cpu = false;
		if (num == 1) {
			var names = ['xavi', 'randol', 'alex', 'maury', 'carlos', 'jhosy'];
			pointer = Math.floor(Math.random() * names.length);
			player_2 = new playerName(names[pointer]);
			this.cpu = true;
		}
	}else{
		playersNumber();
	}
}
function players(quantity) {
	for (var i = 1; i <= quantity; i++) {
		window['player_'+i] = new playerName(prompt("nombre del jugador N°" + i)); 
  }
  player_1.turn = 'X';
  player_2.turn = 'O';
}
function playerName(name){
	this.name = name;
}
function message(msg){
  document.querySelector('#message').innerText = msg;
}
function turnPlayer() {
	document.querySelector('#GameTable').addEventListener('click', function(e){
    if (e.target.innerText == '') {
      e.target.innerText = document.turn;
      message("turno de " + document.name);
      switch (document.turn) {
        case 'X':
        document.turn = 'O'
        document.name = player_2.name;
          break;
        default:
        document.turn = 'X'
        document.name = player_1.name;
          break;
      }
    }
  });
}


init()