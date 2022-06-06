var leaderboard = [];
leaderboard=localStorage.getItem("leaderboard");
localStorage.setItem("leaderboard","");

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var generateBtn = document.querySelector("#view");


if (!leaderboard){
    leaderboard=[];
}
else {
    leaderboard=JSON.parse(leaderboard);
}

// global variable sets

// this part of the code pulls from the HTML source
var test=document.querySelector("#quiz");
var test2=document.querySelector("#view");
var answers=document.querySelector("#results");
var submit=document.querySelector("#submit");




// this part of the code creates all the variables to create elements
var user= document.createElement("input");

var prompt = document.createElement("h2");
var butt =document.createElement("button");
var para = document.createElement("p");
var butt2= document.createElement("button");

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



// global variable for quiz and timer
var seconds =0;
var score = 0;

  
// funtion for timer
function countdown() {
  
    
    var timeInterval = setInterval(function () {
     
      if (seconds > 0) {

        timerEl.textContent = seconds + ' seconds remaining';
        seconds--;
      } 
        // function later on will turn seconds into a string when the code enters the function, this causes the timer to stop
      else if (seconds == "stop") {
        
        timerEl.textContent = '';
        clearInterval(timeInterval);


        

      }

        // if quiz is not finished in time or quiz has been completed it will tell you to enter the page
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        NoTime();
      }
    }, 1000);
};

  


//start page, prompts user to either view the high score or start the quiz

function start (){
    // sets timer and score, this needs to be here so it can reset if you choose to take the quiz again
    seconds =30;
    score = 0;
    test.innerHTML="";
    prompt.innerText = "Do you want to start the quiz?";
    
    butt.innerText="Start Quiz";
    butt2.innerText="View High Score"

    
    butt.onclick= first;
    butt2.onclick=ViewScore;
   

    
   
    test.appendChild(prompt);
    test.appendChild(butt);
    test2.appendChild(butt2)
};




// first question
function first (){
    countdown();
    prompt.innerText = "What color is the sky?";

    // clears out from previous questions if you decide to do the quiz again
    question1.checked=false;
    question2.checked=false;
    question3.checked=false;
    question4.checked=false;

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

    // makes view high score button not work
    butt2.innerText="Question 1"
    butt2.onclick=null;

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
        return;

    }

    else { 
        seconds = seconds-10; 
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
    para3.innerText= "147 *some of our Senators really feel like they've been in office that long"
    para4.innerText= "79"

    butt.innerText="Next Question";
    butt.onclick= third;

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
    butt2.innerText="Question 2"

    // second function will tell you if previous answer was correct
    if (choice){
        para.innerHTML= "PREVIOUS ANSWER WAS CORRECT"
      test.appendChild(para);  
    }

    else {
        para.innerHTML="PREVIOUS ANSWER WAS WRONG"
        test.appendChild(para);
    }
    
};


// third question
function third (){
    if (question4.checked){
        score++;   
    }
       
    else if (!question1.checked && !question2.checked && !question3.checked && !question4.checked){
        alert("Please select one of the choices!");
        return;
   
    }

 
    else { 
        choice=false;
        seconds = seconds - 10;
    }




    // clears out answer choices from previous button
    question1.checked=false;
    question2.checked=false;
    question3.checked=false;
    question4.checked=false;



    prompt.innerText = "What is UT's mascot";


    para1.innerText= "bear"
    para2.innerText= "shark"
    para3.innerText= "unicorn"
    para4.innerText= "longhorn"

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
    butt2.innerText="Question 3"

    // third function will tell if question 2 was correct
    if (choice){
        para.innerHTML= "PREVIOUS ANSWER WAS CORRECT"
      test.appendChild(para);  
    }

    else {
        para.innerHTML="PREVIOUS ANSWER WAS WRONG"
        test.appendChild(para);
    }
    
};

// Page where you enter your score
function final (){

    // should stop the timer when you get to this function
    seconds = "stop"
    
    if (question4.checked){
        score++;   
    }
       
    else if (!question1.checked && !question2.checked && !question3.checked && !question4.checked){
        alert("Please select one of the choices!");
        return;
   
    }

    // three question test, timer stops because the test has ended even if its wrong 
    else { 
        choice=false;
        // seconds = "stop";
    }


    

    test.innerHTML="";
    prompt.innerHTML = "Your Final Score Is "+ score+ ("!");
    butt.innerText="Enter Score";
    butt.onclick= enterscore;

    test.appendChild(prompt);
    // test.appendChild(user);
    test.appendChild(butt);
    butt2.innerText="Score"

    // final function will tell you if function was correct
    if (question4.checked){
        para.innerHTML= "PREVIOUS ANSWER WAS CORRECT"
      test.appendChild(para);  
    }

    else {
        para.innerHTML="PREVIOUS ANSWER WAS WRONG"
        test.appendChild(para);
    }


};

// enter your score after you're done
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


// if you do not finish in time takes you to the enter score page
function NoTime(){
    test.innerHTML="";
    prompt.innerHTML = "You ran out of time, your score is "+ score;
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
    
    // local storage
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

    // shows leaderboard and prompts with option to start again
    test.innerHTML="The High Score is";
    prompt.innerHTML = "";
    butt.innerText="Start";
    user.innerText="";
    butt2.innerText="Do you want to try again?"


    butt2.onclick=start;
    test.appendChild(prompt);
    
    test.appendChild(HiScoreList);
    test2.appendChild(butt2)

   
    
};


start();




