let wins = 0;
let losses = 0;
let counter = 0;



function randomNum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min +1)) + min;
}

let crystalOne= randomNum(1, 12);
let crystalTwo= randomNum(1, 12);
let crystalThree= randomNum(1, 12);
let crystalFour= randomNum(1, 12);

let randomScoreTarget = randomNum(40, 90)
$("#targetScore").html(randomScoreTarget);



	

	function reset(){
		counter = 0;
		$("#target").html(randomScoreTarget);
		randomScoreTarget = randomNum(40,90);
		$("#playerScore").text(counter);
		crystalOne= randomNum(1, 12);
		crystalTwo= randomNum(1, 12);
		crystalThree= randomNum(1, 12);
		crystalFour= randomNum(1, 12);


	}

	
	$("#purpleDiamond").on("click", function(){
		counter += crystalOne;
		WinLoose();
		$(playerScore).text(counter);
		
	});

	$("#tealDiamond").on("click", function(){
		counter += crystalTwo;
		WinLoose();
		$(playerScore).text(counter);
		

	});

	$("#yellowDiamond").on("click", function(){
		counter += crystalThree;
		WinLoose();
		$(playerScore).text(counter);
		

	});

	$("#greenDiamond").on("click", function(){
		counter += crystalFour;
		WinLoose();
		$(playerScore).text(counter);
		

	});

	function WinLoose (){

	if (counter === randomScoreTarget){
		wins += 1;
		alert("Winner!");
		$(win).text(wins);
		reset();

	} else if(counter > randomScoreTarget){
		losses += 1;
		alert("You lose!");
		$(loss).text(losses);
		reset();
	}
	
}
	


