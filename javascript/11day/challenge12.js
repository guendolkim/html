'use strict';
const $btnSave=document.getElementById('btn-save');
const $btnSearch=document.getElementById('btn-search');
const $btnDel=document.getElementById('btn-del');
const $btnView=document.getElementById('btn-view');
//버튼찾기

const $eng = document.getElementById('eng');
const $kor = document.getElementById('kor');

const saveHandler=(evt)=>{
  //영어단어 존재하는 지 확인
  if(localStorage.getItem(document.getElementById('eng').value) != null){
    if(confirm('수정하겠습니까?')){
      localStorage.setItem($eng.value.$kor.value)
    }else{
      return;
    }
  }
  //영어단어저장
  localStorage.setItem(
    document.getElementById('eng').value,
    document.getElementById('kor').value
  );
};
//단어저장
const searchHandler=(evt)=>{
  console.log('단어검색');
  const searchedWord =  localStorage.getItem($eng.value);
  if(searchedWord == null){
    alert('검색어를 찾지 못했습니다');
    $kor.value = '';
    $eng.focus();
    return;
  }
  $kor.value = searchedWord;
};
//단어목록

const delHandler=(evt)=>{
  console.log('단어삭제');
  localStorage.removeItem($eng.value);
  if(searchedWord == null) {
    alert('검색어를 찾지 못했습니다');
    $kor.value='';
    $eng.focus();
    return;
  }
};
//단어목록

const viewHandler=(evt)=>{
  console.log('전체보기');
  window.open("challenge12-2.html","_blank","top=100,left=100,width=600,height=500");
};
//전체보기


$btnSave.addEventListener("click",saveHandler,false);
$btnSearch.addEventListener("click",searchHandler,false);
$btnDel.addEventListener("click",delHandler,false);
$btnView.addEventListener("click",viewHandler,false);
//버튼요소에 click이벤트 등록