console.log("link");
$("#correctAn").text("too cool for school");
// $("document").ready(function(){
	function submitAnswers(){
		var correct = 0;
		var wrong =0;

		var ques1= document.forms.soccerQuiz.Q1.value;
		var ques2= document.forms.soccerQuiz.Q2.value;
		var ques3= document.forms.soccerQuiz.Q3.value;
		var ques4= document.forms.soccerQuiz.Q4.value;
		var ques5= document.forms.soccerQuiz.Q5.value;

		for (i=1;i<6;i++){
			if (eval("ques"+i)==null || eval ("ques"+i)==""){
				alert("You missed question " + i + "!");
				return false;
			}
		}

		var correctAns=["c","a","a","a","d"]
		for (j=1;j<=5;j++){
			if(eval("ques"+j)== correctAns[j-1]){
				correct++;
			console.log(correct);
			}
			else{
				eval("ques"+j)!= correctAns[j-1]{
					wrong = 0;
					console.log(wrong);
				}
			}
		}
		//gives back the number answers right
			// var correct1 = document.getElementById("correctAn");
			// correct1.innerText("You got" + correct +"answers correct!");
		// $("#correctAn").text("You got"+correct+"answers correct!");
		// return false;
		
		//give back number of wrong answers
			// var wrong1 = document.getElementById("wrongAn");
			// wrong1.innerText("You got" + wrong +"answers wrong!");
			//$("#wrongAn").text("You got " +correct+"answers wrong!");

	//set the timer to count down 3 minutes
		//setTimeout(1000*180){
//			run correct answer logic
//			var correctAns=["c","a","a","a","d"]
			// for (j=1;j<=5;j++){
			// 	if(eval("ques"+j)== correctAns[j-1]){
			// 		correct++;
			// 	console.log(correct);
			// 	}
				//gives back the answers right
			// var correct1 = document.getElementById("correctAn");
			// correct1.innerText("You got" + correct +"answers correct!");
		// $("#correctAn").text("You got"+correct+"answers correct!");
		// return false;
		//give back number of wrong answers
			// var wrong1 = document.getElementById("wrongAn");
			// wrong1.innerText("You got" + wrong +"answers wrong!");
			//$("#wrongAn").text("You got " +correct+"answers wrong!");
			//}
	// submitAnswers();
		}
// });