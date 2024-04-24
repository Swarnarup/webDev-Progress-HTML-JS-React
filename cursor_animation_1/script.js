// const csr_elem = document.querySelector('.cursor');
const csr_elem = document.getElementById('cursor');

const mouse = {x:0, y:0}, csr = {x:0, y:0};

window.addEventListener('mousemove', e =>{
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.05;

const tick = ()=>{

    csr.x += (mouse.x - csr.x)*speed;
    csr.y += (mouse.y - csr.y)*speed;

    // // csr_elem.setAttribute.transform = 'translate(${csr.x}px, ${csr.y}px)';

    // // csr_elem.style.transform = "translate(${csr.x}px, ${csr.y}px)";

    // csr_elem.setAttribute("style", "top: "+(csr.y-20)+"px; left: "+(csr.x-20)+"px;")

    csr_elem.style.transform = "translate(" + csr.x + "px," + csr.y + "px)";

    window.requestAnimationFrame(tick);
}

tick();