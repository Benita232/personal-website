
// Custom cursor
const cur = document.getElementById('cur');
const curR = document.getElementById('cur-r');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.transform=`translate(${mx-4}px,${my-4}px)`;});
function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;curR.style.transform=`translate(${rx-15}px,${ry-15}px)`;requestAnimationFrame(animRing);}
animRing();

// Scroll reveal
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});
},{threshold:0.12});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));