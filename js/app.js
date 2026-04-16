const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');

let player={x:1,y:1};
let hero='circle';

document.getElementById('heroSelect').onchange=e=>hero=e.target.value;

function startGame(){
document.getElementById('menu').classList.add('hidden');
canvas.classList.remove('hidden');
draw();
}

function backMenu(){
document.getElementById('menu').classList.remove('hidden');
document.getElementById('instruction').classList.add('hidden');
document.getElementById('settings').classList.add('hidden');
canvas.classList.add('hidden');
}

function showInstruction(){
document.getElementById('menu').classList.add('hidden');
document.getElementById('instruction').classList.remove('hidden');
}

function showSettings(){
document.getElementById('menu').classList.add('hidden');
document.getElementById('settings').classList.remove('hidden');
}

function draw(){
ctx.clearRect(0,0,400,400);

if(hero==='circle'){
ctx.beginPath();
ctx.arc(player.x*20,player.y*20,10,0,Math.PI*2);
ctx.fill();
}else{
let img=new Image();
img.src='assets/'+hero+'.gif';
img.onload=()=>ctx.drawImage(img,player.x*20,player.y*20,20,20);
}
}

canvas.addEventListener('mousedown',e=>{
let dx=e.offsetX-player.x*20;
let dy=e.offsetY-player.y*20;

if(Math.abs(dx)>Math.abs(dy)){
player.x+=dx>0?1:-1;
}else{
player.y+=dy>0?1:-1;
}
draw();
});
