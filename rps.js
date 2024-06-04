let choice,copt,cchoice;
let pscore=0;
let cscore=0;

const rock = document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor = document.getElementById("scissor");

const pchoices=document.querySelectorAll(".buttons");
pchoices.forEach(pchoice => {
    pchoice.addEventListener("click",()=>{
         choice = pchoice.id;
         document.getElementById("playerc").textContent="PLAYER CHOICE: "+choice;
         
         copt=["rock","paper","scissor"];
          cchoice=copt[Math.floor(Math.random()*3)];
          document.getElementById("compc").textContent="COMPUTER CHOICE: "+cchoice;
          if(choice==="rock"){
            switch(cchoice){
                case "rock":
                    document.getElementById("result").textContent="IT'S A TIE";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: "+cscore;
                    break;
                 case "paper":
                    cscore++;
                    document.getElementById("result").textContent="YOU LOST";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: "+cscore;
                    break;
                case "scissor":
                    pscore++;
                    document.getElementById("result").textContent="YOU WON";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: " +cscore;  
                    break;                 
                default:
                    document.getElementById("result").textContent="INVALID";
                    break;
                
                }
          }
          else if(choice==="paper"){
            switch(cchoice){
                case "rock":
                    pscore++;
                    document.getElementById("result").textContent="YOU WON";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: "+cscore;
                    break;
                 case "paper":
                   
                    document.getElementById("result").textContent="IT'S A TIE";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: "+cscore;
                    break;
                case "scissor":
                    cscore++;
                    document.getElementById("result").textContent="YOU LOST";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: " +cscore;  
                    break;                 
                default:
                    document.getElementById("result").textContent="INVALID";
                    break;
                
                }


          }
          else if(choice==="scissor"){
            switch(cchoice){
                case "rock":
                    cscore++;
                    document.getElementById("result").textContent="YOU LOST";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: "+cscore;
                    break;
                 case "paper":
                    pscore++;
                    document.getElementById("result").textContent="YOU WON";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: "+cscore;
                    break;
                case "scissor":
                    
                    document.getElementById("result").textContent="IT'S A TIE";
                    document.getElementById("pscore").textContent="PLAYER SCORE: "+pscore;
                    document.getElementById("cscore").textContent="COMPUTER SCORE: " +cscore;  
                    break;                 
                default:
                    document.getElementById("result").textContent="INVALID";
                    break;
                
                }
               
          }
         

          

      


    
    })
})



