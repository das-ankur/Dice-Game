var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
var img1="dice"+randomNumber1+".png";
var img2="dice"+randomNumber2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src", img1);
document.getElementsByClassName("img2")[0].setAttribute("src", img2);
if(randomNumber1==randomNumber2)
    document.querySelector("h1").textContent="Draw!";
else if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent="Player1 Wins!";
else
    document.querySelector("h1").textContent="Player2 Wins!";