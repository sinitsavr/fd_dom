"use strict";

/* const list = document.getElementById('article');
list.addEventListener('click', (event)=>{
  console.log(event.target)
  event.target.innerText += '!!!'
}) */

const article = document.getElementById('article');
article.addEventListener('click', ({target})=>{
  if (target === article) {
    return;
  }
  for (const child of article.children){
    child.style.fontStyle = '';
    child.style.fontWeight = '';
  }
target.style.fontStyle = 'italic';
target.style.fontWeight = 700;
})