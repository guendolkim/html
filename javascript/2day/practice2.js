//스크립트 입력모드
'use strict';
const array = new Array(5);

let i = 0;
while( i < array.length){
  let tmp = prompt('임의의 정수를 입력하세요');
  if( !isNaN(parseInt(tmp)) ){
    array[i++] = tmp;
  }else{
    alert('정수를입력하시오');
  }
 }
console.log(array);
;console.log(array.reverse());