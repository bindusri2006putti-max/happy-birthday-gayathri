function startSurprise() {

document.getElementById("surprise").style.display="block";

window.scrollTo({
top:500,
behavior:"smooth"
});

}
let images = [
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg",
"images/7.jpg",
"images/8.jpg",
"images/9.jpg",
"images/10.jpg",
"images/11.jpg",
"images/12.jpg",
"images/13.jpg",
"images/14.jpg",
"images/15.jpg",
"images/16.jpg",
"images/17.jpg",
"images/18.jpg"
];

let i=0;

setInterval(function(){

i++;

if(i>=images.length){
i=0;
}

document.getElementById("slide").src=images[i];

},2500);

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,300);

function balloon(){

const b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-50px";

b.style.fontSize="40px";

b.style.animation="float 10s linear";

document.body.appendChild(b);

setTimeout(()=>{
b.remove();
},10000);

}

setInterval(balloon,2500);

document.querySelector(".main").style.display="none";

function startSurprise(){

document.getElementById("intro").style.display="none";

document.querySelector(".main").style.display="block";

}
const message = `Happy Birthday Gayathri ❤️

You are one of the most precious friends in my life.

Thank you for every smile,
every memory,
and every moment we shared.

May your life always be filled with happiness,
success and endless smiles.

Happy Birthday Once Again 🎂❤️`;

let index = 0;

function typeEffect() {

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeEffect,50);

    }

}

typeEffect();
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for(let i=0;i<150;i++){
confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2,
d:Math.random()*150
});
}

function drawConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

confetti.forEach(c=>{

ctx.beginPath();

ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

ctx.fill();

c.y+=2;

if(c.y>canvas.height){

c.y=0;

}

});

requestAnimationFrame(drawConfetti);

}

drawConfetti();