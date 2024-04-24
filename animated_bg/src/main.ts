import './style.css'

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

const ease_amount = 50;

document.addEventListener('DOMContentLoaded', ()=>{
  const intBubble : HTMLDivElement = document.querySelector<HTMLDivElement>('.interactive')!;

  function move(){
    curX += (tgX - curX) / ease_amount;
    curY += (tgY - curY) / ease_amount;

    const pos = `translate( ${Math.round(curX)}px, ${Math.round(curY)}px)`;
    // const position = `translate(0,${curY}vh)`;
    // console.log(pos);
    intBubble.style.transform = pos;
    requestAnimationFrame(()=>{move();});
  }

  window.addEventListener('mousemove', (event:MouseEvent)=>{
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();

})
