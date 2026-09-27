const orb =
document.querySelector(".orb");
document.addEventListener("mousemove", (e) => {
const x = 
    e.clientX / innerWidth - 0.5;
const y =
     e.clientY / innerHeight - 0.5;
orb.style.transform = 
`translate(${x*35}px,${y*35}px)
rotate(${x*15}deg)
scale(${1+Math.abs(y)*0.08})`;
});
document.addEventListener("mouseleave", ()=> {
    orb.style.transform = 
    "translate(0) rotate(0) scale(1)";
});