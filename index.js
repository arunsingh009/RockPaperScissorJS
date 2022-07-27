 var n =0;
 var m=5;
 var turns = document.getElementById("tLeft");
 turns.innerHTML=m;
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
       
        if(n<5 && m>0){
            play();
        if(comp.innerHTML == user.innerHTML){
           document.getElementById("win").innerHTML="Tie";
       }else if(comp.innerHTML == "Paper" && user.innerHTML == "Rock" ){
            document.getElementById("win").innerHTML="Computer Wins";
       }else if(comp.innerHTML == "Scissor" && user.innerHTML == "Rock" ){
            document.getElementById("win").innerHTML="User Wins";
       }
       score();
       ++n;
       --m;
       turns.innerHTML=m;
    }else{
        if (document.getElementById("ufr").value < document.getElementById("cfr").value){
            alert("Game over and Computer Wins");
        }else if(document.getElementById("ufr").value > document.getElementById("cfr").value){
            alert("Game over and User Wins");
        }else{
            alert("Game Over and It's a Tie.")
        }
        document.getElementById("ufr").value = 0;
        document.getElementById("cfr").value =0;
        document.getElementById("user").innerHTML="";
        document.getElementById("comp").innerHTML="";
        document.getElementById("win").innerHTML="";
        n=0;
        m=5;
        turns.innerHTML=5;
        document.getElementById("bigbox").style.display="block";
    }

    }function play2(){
        document.getElementById("user").innerHTML="Paper";
       
        if(n<5 && m>0){
         play();
        if(comp.innerHTML == user.innerHTML){
           document.getElementById("win").innerHTML="Tie";
       }else if(comp.innerHTML == "Rock" && user.innerHTML == "Paper" ){
            document.getElementById("win").innerHTML="User Wins";
       }else if(comp.innerHTML == "Scissor" && user.innerHTML == "Paper" ){
            document.getElementById("win").innerHTML="Computer Wins";
       }
       score();
       ++n;
       --m;
       turns.innerHTML=m;
    }else{
        if (document.getElementById("ufr").value < document.getElementById("cfr").value){
            alert("Game over and Computer Wins");
        }else if(document.getElementById("ufr").value > document.getElementById("cfr").value){
            alert("Game over and User Wins");
        }else{
            alert("Game over and It's a Tie.")
        }
        document.getElementById("ufr").value = 0;
        document.getElementById("cfr").value =0;
        document.getElementById("user").innerHTML="";
        document.getElementById("comp").innerHTML="";
        document.getElementById("win").innerHTML="";
        n=0;
        m=5;
        turns.innerHTML=5;
        document.getElementById("bigbox").style.display="block";
    }
    }
    function play3(){
        document.getElementById("user").innerHTML="Scissor";
        
        if(n<5 && m>0){
            play();
        if(comp.innerHTML == user.innerHTML){
           document.getElementById("win").innerHTML="Tie";
       }else if(comp.innerHTML == "Paper" && user.innerHTML == "Scissor" ){
            document.getElementById("win").innerHTML="User Wins";
       }else if(comp.innerHTML == "Rock" && user.innerHTML == "Scissor" ){
            document.getElementById("win").innerHTML="Computer Wins";
       }
       score();
       ++n;
       --m;
       turns.innerHTML=m;
    }else{
        if (document.getElementById("ufr").value < document.getElementById("cfr").value){
            alert("Game over and Computer Wins");
        }else if(document.getElementById("ufr").value > document.getElementById("cfr").value){
            alert("Game over and User Wins");
        }else{
            alert("Game Over and It's a Tie.")
        }
        document.getElementById("ufr").value = 0;
        document.getElementById("cfr").value =0;
        document.getElementById("user").innerHTML="";
        document.getElementById("comp").innerHTML="";
        document.getElementById("win").innerHTML="";
        n=0;
        m=5;
        turns.innerHTML=5;
        document.getElementById("bigbox").style.display="block";
    }
    }
