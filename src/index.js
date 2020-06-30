const player1 = "Vermelho";
const player2 = "Verde";

var playTime = player1;
var gameOver = false;

startSpaces();

function startSpaces(){
	var spaces = document.getElementsByClassName("boardSpot");

	for (var i = 0; i< spaces.length ; i++) {
		spaces[i].addEventListener("click",
			function(){
				if (gameOver) {return;}

				if(this.getElementsByTagName("img").length == 0){

					if(playTime == player1){

						this.innerHTML = "<img src = '../assets/x.png' width=50 height=50>";
						this.setAttribute("jogada", player1);
						playTime = player2;

					}else{

						this.innerHTML = "<img src = '../assets/o.png' width=50 height=50>";
						this.setAttribute("jogada", player2);
						playTime = player1;
					}
					verificaVencedor();
				}
			});
		}
	}

	function verificaVencedor(){

		var a1 = document.getElementById("a1").getAttribute("jogada");
		var a2 = document.getElementById("a2").getAttribute("jogada");
		var a3 = document.getElementById("a3").getAttribute("jogada");

		var b1 = document.getElementById("b1").getAttribute("jogada");
		var b2 = document.getElementById("b2").getAttribute("jogada");
		var b3 = document.getElementById("b3").getAttribute("jogada");

		var c1 = document.getElementById("c1").getAttribute("jogada");
		var c2 = document.getElementById("c2").getAttribute("jogada");
		var c3 = document.getElementById("c3").getAttribute("jogada");

		var vencerdor = "";

		if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != ""){
			vencerdor = a1;
		}else if((b2 == b1 && b2 == b3 || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != ""){
			vencerdor = b2;
		}else if(((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 !=""){
			vencerdor = c3;
		}

		if(vencerdor != ""){
			gameOver = true;
			alert("O vencerdor é o: " + vencerdor);
			limpar();
		}

	}

function limpar(){
   document.getElementById("a1").innerHTML="";
   document.getElementById("a2").innerHTML="";
   document.getElementById("a3").innerHTML="";

   document.getElementById("b1").innerHTML="";
   document.getElementById("b2").innerHTML="";
   document.getElementById("b3").innerHTML="";

   document.getElementById("c1").innerHTML="";
   document.getElementById("c2").innerHTML="";
   document.getElementById("c3").innerHTML="";
} 

