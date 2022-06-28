"use strict";

const btns= document.querySelectorAll('#root>button')
const root = document.getElementById('root');

const btnColorHandler = ({target})=>{
root.style.backgroundColor = target.dataset.color;
}

for (const btn of btns) {
  btn.addEventListener ('click', btnColorHandler)
}



