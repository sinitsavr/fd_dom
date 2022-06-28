"use strict";

const test = document.getElementById('test')


const btnHandler = (e) =>{
  //e.cancelBubble = true;
  e.stopPropagation();
  console.group()
  console.log(e.target)//на ком произошло событие
  console.log(e.currentTarget)//чей обработчик отработал
  console.groupEnd();
}
test.addEventListener('click', ()=>{console.log(1111)}, {capture:true, once:true});
test.addEventListener('click', btnHandler, {capture:true});
window.addEventListener('click', btnHandler);
document.addEventListener('click', btnHandler, {capture:true});
document.body.addEventListener('click', btnHandler);





