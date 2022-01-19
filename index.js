function play(){ 
    var arr=[0,1,2];
    var random;
    random = Math.floor(Math.random()*arr.length);
    if(random== 0){
        document.getElementById("comp").innerHTML = "Rock";
    }else if(random == 1){
        document.getElementById("comp").innerHTML = "Paper";
    }else if(random == 2){
        document.getElementById("comp").innerHTML = "Scissor";
    }
    }
    function play1(){
        document.getElementById("user").innerHTML="Rock";
        play();
        if(comp.innerHTML == user.innerHTML){
           document.getElementById("win").innerHTML="Tie";
       }else if(comp.innerHTML == "Paper" && user.innerHTML == "Rock" ){
            document.getElementById("win").innerHTML="User Wins";
       }else if(comp.innerHTML == "Scissor" && user.innerHTML == "Rock" ){
            document.getElementById("win").innerHTML="Computer Wins";
       }


    }function play2(){
        document.getElementById("user").innerHTML="Paper";
        play();
        if(comp.innerHTML == user.innerHTML){
           document.getElementById("win").innerHTML="Tie";
       }else if(comp.innerHTML == "Rock" && user.innerHTML == "Paper" ){
            document.getElementById("win").innerHTML="User Wins";
       }else if(comp.innerHTML == "Scissor" && user.innerHTML == "Paper" ){
            document.getElementById("win").innerHTML="Computer Wins";
       }

    }function play3(){
        document.getElementById("user").innerHTML="Scissor";
        play();
        if(comp.innerHTML == user.innerHTML){
           document.getElementById("win").innerHTML="Tie";
       }else if(comp.innerHTML == "Paper" && user.innerHTML == "Scissor" ){
            document.getElementById("win").innerHTML="User Wins";
       }else if(comp.innerHTML == "Rock" && user.innerHTML == "Scissor" ){
            document.getElementById("win").innerHTML="Computer Wins";
       }

    }
