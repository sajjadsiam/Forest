let text = document.getElementById('text');
let plant2 = document.getElementById('plant2');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let deer = document.getElementById('deer');
let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');
let tree3 = document.getElementById('tree3');
let tree4 = document.getElementById('tree4');
let moon = document.getElementById('moon');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  deer.style.left = value * 1.7 + 'px';
  plant2.style.top = value * 0.4 + 'px';
  moon.style.top = value * 1.5 + 'px';
  moon.style.opacity = 1 - value * 0.005;

  hill1.style.left = value * -2.5 + 'px';
  hill2.style.left = value * 2.5 + 'px';

  tree1.style.left = value * 1.5 + 'px';
  tree1.style.top = value * 0.5 + 'px';

  tree2.style.left = value * -1.5 + 'px';
  tree2.style.top = value * 0.3 + 'px';

  tree3.style.left = value * 0.5 + 'px';
  tree4.style.left = value * -0.5 + 'px';
});
