var randnum1=Math.floor(Math.random()*6)+1;
var img1rand="dice"+randnum1+".png";
var imgsrc="images/"+img1rand;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsrc);


var randnum2=Math.floor(Math.random()*6)+1;
var img2rand="dice"+randnum2+".png";
var imgsrc="images/"+img2rand;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgsrc);


if(randnum1>randnum2)
{
    document.querySelector("h1").innerHTML=" Player 1 win";
}

else if(randnum1<randnum2)
{
    document.querySelector("h1").innerHTML="Player 2 win";
}
else{
    document.querySelector("h1").innerHTML="Game tie";
}