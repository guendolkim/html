'user strict'

    // const init = function(){

    const select = document.getElementById('site');
    const moveto = function(evt){
    console.log(evt.target);
    const $url = evt.target.options[evt.target.selectedIndex].value;
    
   // window.open($url,"_blank");
      
      window.open($url,"win","width=300,height=300");
      
    }
      select.addEventListener("change",moveto,false);
    // }
    // windwow.addEventListener('load',init);
