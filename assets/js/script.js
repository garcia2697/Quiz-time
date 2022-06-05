var leaderboard = [];
leaderboard=localStorage.getItem("leaderboard");
localStorage.setItem("leaderboard","");

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

if (!leaderboard){
    leaderboard=[];
}
else {
    leaderboard=JSON.parse(leaderboard);
}
var test=document.querySelector("#quiz");
var answers=document.querySelector("#results");
var submit=document.querySelector("#submit");
var score = 0;
var user= document.createElement("input");

var prompt = document.createElement("h2");
var butt =document.createElement("button");
var para = document.createElement("p");

var question1=document.createElement("input");
question1.setAttribute("type","radio");
question1.setAttribute("name","Q");
var para1= document.createElement("span");
var broken1= document.createElement("br");


var question2=document.createElement("input");
question2.setAttribute("type","radio");
question2.setAttribute("name","Q");
var para2= document.createElement("span");
var broken2= document.createElement("br");

var question3=document.createElement("input");
question3.setAttribute("type","radio");
question3.setAttribute("name","Q");
var para3= document.createElement("span");
var broken3= document.createElement("br");

var question4=document.createElement("input");
question4.setAttribute("type","radio");
question4.setAttribute("name","Q");
var para4= document.createElement("span");
var broken4= document.createElement("br");

// global timer for quiz
var seconds =3;

  

function countdown() {
  
    
    var timeInterval = setInterval(function () {
     
      if (seconds > 0) {
        timerEl.textContent = seconds + ' seconds remaining';
        seconds--;
      } 
      
      else if (seconds === 0) {
        // timerEl.textContent = seconds + ' seconds remaining';
        // seconds--;
        timerEl.textContent = '';
        clearInterval(timeInterval);
        enterscore();


        // ViewScore();

      }

        // if quiz is not finished in time or quiz has been completed it will take you to the final page
      else {
        timerEl.textContent = '';
        // alert("Thank you for taking the quiz")
        clearInterval(timeInterval);
        
      }
    }, 1000);
};

  


//start page

function start (){
    prompt.innerText = "Do you want to start the quiz?";
    
    butt.innerText="Start Quiz";
    butt.onclick= first;
    
  

    
    
    test.appendChild(prompt);
    test.appendChild(butt);
    

};




// first question
function first (){
    countdown();
    prompt.innerText = "What color is the sky?";

    para1.innerText= "Red"
    para2.innerText= "Blue"
    para3.innerText= "Neon"
    para4.innerText= "Purple"

    butt.innerText="Next Question";
    butt.onclick= second;

    test.appendChild(prompt);
    test.appendChild(question1);
    test.appendChild(para1);
    test.appendChild(broken1);

    test.appendChild(question2);
    test.appendChild(para2);
    test.appendChild(broken2);
    
    test.appendChild(question3);
    test.appendChild(para3);
    test.appendChild(broken3);

    test.appendChild(question4);
    test.appendChild(para4);
    test.appendChild(broken4);


    test.appendChild(butt);
    
};

var choice = false;

function second (){
    if (question2.checked){
     score++;
     choice = true;   
    }
    
    else if ( !question1.checked && !question2.checked && !question3.checked && !question4.checked){
        alert("Please select one of the choices!");
        first ();
        return;

    }

    else { 
        seconds = seconds-50; 
        choice=false;
        
    }





    // clears out answer choices from previous button
    question1.checked=false;
    question2.checked=false;
    question3.checked=false;
    question4.checked=false;



    prompt.innerText = "How old is Joe Biden?";


    para1.innerText= "10"
    para2.innerText= "32"
    para3.innerText= "147 *some of our Senators really feel like they've been there that long"
    para4.innerText= "79"

    butt.innerText="Next Question";
    butt.onclick= final;

    test.appendChild(prompt);
    test.appendChild(question1);
    test.appendChild(para1);
    test.appendChild(broken1);

    test.appendChild(question2);
    test.appendChild(para2);
    test.appendChild(broken2);
    
    test.appendChild(question3);
    test.appendChild(para3);
    test.appendChild(broken3);

    test.appendChild(question4);
    test.appendChild(para4);
    test.appendChild(broken4);

    
    test.appendChild(butt);

    if (choice){
        para.innerHTML= "Correct"
      test.appendChild(para);  
    }

    else {
        para.innerHTML="WRONG"
        test.appendChild(para);
    }
    
};



// Page where you enter your score
function final (){
    if (question4.checked){
        score++;   
    }
       
    else if ( !question1.checked && !question2.checked && !question3.checked && !question4.checked){
        alert("Please select one of the choices!");
        second ();
        return;
   
    }

    else { 
        choice=false;
        seconds = seconds-50;
    }


    

    test.innerHTML="";
    prompt.innerHTML = "Your Final Score Is "+ score+ ("!");
    butt.innerText="Enter Score";
    butt.onclick= enterscore;

    test.appendChild(prompt);
    // test.appendChild(user);
    test.appendChild(butt);
    

    if (choice){
        para.innerHTML= "Correct"
      test.appendChild(para);  
    }

    else {
        para.innerHTML="WRONG"
        test.appendChild(para);
    }

    // seconds= seconds == 0;

};

function enterscore(){

    test.innerHTML="";
    prompt.innerHTML = "Enter username";
    butt.innerText="View Leaderboard";
    butt.onclick= ViewScore;

    test.appendChild(prompt);
    test.appendChild(user);
    test.appendChild(broken1);
    test.appendChild(broken2);
    test.appendChild(butt);
    

   

}


// shows leaderboard score
function ViewScore () {
    
    var check= false;
    for (i=0; i<leaderboard.length; i++){
        if (leaderboard[i].score<= score){
            check=true;
            leaderboard.splice(i,0,{name:user.value,score});
            break;
        }


    };

    if (!check){
        leaderboard[leaderboard.length]={name:user.value,score};    
    }

    
    localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
    console.log(leaderboard);

    var HiScoreList = document.createElement("ul");

    for (let i of leaderboard){ 
        
        var item = document.createElement("li"); 
        item.innerHTML= i.name + ": " + i.score;
        HiScoreList.appendChild(item); 
    };


    test.innerHTML="The High Scores";
    prompt.innerHTML = "";
    butt.innerText="Start";
    user.innerText="";
    
    test.appendChild(prompt);
    
    test.appendChild(HiScoreList);

};




start();




