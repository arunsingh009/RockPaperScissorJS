function Start() {
    var name = document.getElementById("uname").value;
    var me = document.getElementById("bigbox");
    var user = document.getElementById("User");
    me.style.display="none";
    if(name.trim() == ""){
    user.innerHTML = "User";
    }else{
        user.innerHTML = name;
    }   
}
function score(){
    var uF = +document.getElementById("ufr").value;
    var cF = +document.getElementById("cfr").value;

    var winner = document.getElementById("win");


    if(winner.innerHTML == "Tie"){
        uF = uF+1;
        cF=  cF+1;
        document.getElementById("ufr").value = uF;
        document.getElementById("cfr").value = cF;
    }else if(winner.innerHTML == "User Wins"){
        uF = uF+1;
        document.getElementById("ufr").value = uF;

    }else if(winner.innerHTML == "Computer Wins"){
        cF=cF+1;
        document.getElementById("cfr").value = cF;

    }
    
}

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
       score();


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
       score();

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
       score();

    }
