//For First Die
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImageSource1= "images/dice" +randomNumber1+ ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//For Second Die
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/dice" +randomNumber2+ ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//If Player 1 wins
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}

//If Player 2 wins
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}

//If it's a draw
else
{
    document.querySelector("h1").innerHTML="Draw!";
}