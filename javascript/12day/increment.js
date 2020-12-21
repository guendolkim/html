'use strict';
self.addEventListener("message",(evt)=>{
  let input = parseInt(evt.data);
  input++;
  self.postMessage(input);
  self.close();
},false);