console.log("link");

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
		for (j=1;j<6;j++){
			if(eval("ques"+j)== correctAns[j-1]){
				correct++;
			console.log(correct);
			}
		}

		// $("#correctAn").text("You got"+correct+"answers correct!");
		// return false;
	};
	// submitAnswers();
// });