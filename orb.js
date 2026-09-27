const orb =
document.querySelector(".orb");
document.addEventListener("mousemove", (e) => {
const x = 
    e.clientX / innerWidth - 0.5;
const y =
     e.clientY / innerHeight - 0.5;
const movement = Math.min(35, Math.min(innerWidth, innerHeight) * 0.1);
orb.style.transform = 
`translate(${x*movement}px,${y*movement}px)
rotate(${x*15}deg)
scale(${1+Math.abs(y)*0.08})`;
});
document.addEventListener("mouseleave", ()=> {
    orb.style.transform = 
    "translate(0) rotate(0) scale(1)";
});