'use strict';

//도서5권의 제목,저서,가격

const bookArray =  new Array(5);

//Book 객체 정의
// function Book(title, author, price){
//   this.title = title;
//   this.author = author;
//   this.price = price;
// }
// for( let i=0; i<bookArray.length; i++){
// const bookStr = prompt('도서정보를 입력하시오(제목, 저서, 가격)',"제목, 저서, 가격");
// const tokens = bookStr.split(",");
// const book = new Book(tokens[0],tokens[1],tokens[2]);
// bookArray[i] = book;
// }

//book class 정의
class Book {
  constructor(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
  };
  // get title(){
  //   return this.title;
  // }
  // get author(){
  //   return this.author;
  // }
  // get price(){
  //   return this.price;
  // }
}

// console.log(bookArray);

//도서가격이 가장 비싼 도서 인덱스 반환.
function max(arrays){
  let maxBook = arrays[0];
  for(let i=1; i<arrays.length;i++){
    if(maxBook.price < arrays[i].price){
      maxBook = arrays[i];
    }
  }
  return maxBox;
}
//도서정보등록
for( let i=0; i<bookArray.length; i++){
  let bookStr = prompt('도서정보를 입력하시오(제목, 저서, 가격)',"제목, 저서, 가격");
  const tokens = bookStr.split(",");
  bookArray[i] = new Book(tokens[0],tokens[1],tokens[2]);
  //const book = new Object();
  // const book = {};
  // book.title = tokens[0];
  // book.author = tokens[1];
  // book.price = tokens[2];
  // bookArray[i] = book;
  
  }

  console.log( max(bookArray));