let click1 = 0;
let click2 = 0;
const time = 5000;
const key1 = "eb68090936cc23672503100ca073897a0e3c9d7ed2bb0d0f0600e8b56d301a50";

let maxclick = localStorage.getItem(key1);

const display = document.querySelector('#time');
const button1 = document.querySelector('#b1');
const counter1 = document.querySelector('#D1');

const counter2 = document.querySelector('#D2');
const maxdisp = document.querySelector("#MaxScore");
const maxdisp2 = document.querySelector("#MaxScore2");


button1.onclick=start;


maxdisp.textContent = "Max Score Player: " + localStorage.getItem(key1);


function start() {
	const startime = Date.now();
    display.textContent=formatTime(time);
    button1.onclick=()=>counter1.textContent="Player Score: " + click1++;


    const interval=setInterval(()=>{
    const delta = Date.now() - startime;
    display.textContent=formatTime(time-delta);
    }, 100);
    const timeout = setTimeout(()=> {
        button1.onclick=null;
        display.textContent="Game Over";
        clearInterval(interval);
        clearTimeout(timeout);
      	if (maxclick < click1) {
      		localStorage.setItem(key1, click1 - 1);
      	}

      	maxdisp.textContent = "Max Score Player: " + localStorage.getItem(key1);

}, time);
}

function formatTime(ms){
    return Number.parseFloat(ms/1000).toFixed(2);
}