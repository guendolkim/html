'use strict';
self.addEventListener("message",function(evt){
  //1메인태스크로 부터 테이터 수신
const receiveData = evt.data;


//2계산
const result =  receiveData.val1 * receiveData.val2;


//3처리 결과를 메인 태스크로 전송
self.postMessage(result);
},false);