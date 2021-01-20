'use trict';
 // 로그인버튼 
 const $btn_log = document.querySelector('.btn_log');
 $btn_log.addEventListener("click", (evt)=>{
   console.log("클릭됨");
 },false);

 const idTag = document.getElementById('id');
 if(idTag.nodeValue.trim().length == 0){
   alert('아이디를 입력하세요');
  return;
 }

 const pwTag = document.getElementById('pw');
 if(pwTag.nodeValue.trim().length == 0){
   alert('비밀번호를 입력하세요');
   return;
 }
 //로그인상태유지
 // const $check_box = document.querySelector('check_box');
 // const $userid = document.querySelector('userid');
 // const $password = document.querySelector('password');
 // $check_box.addEventListener("click", (evt)=>{
   
 // },false);