console.log('hello world~!');

//한줄 주석
/* 여러줄 주석*/

//변수선언
//es6 이번버전
var name = '홍길동';

//es6 이후버전
let x =10;
let y =20;
console.log(x+y);

//상수
const z = 30;
// z = 40;

//함수
//호이스팅  실행문을 맨위로 올려서 실행할 수 있음 아래의 메소드(function)을 읽어 올 수 있음
function sum(a,b){
  let result;
  result = a+ b;
  return result;
}
let result = sum(x, y);
console.log(result);

//함수 표현식 -(위와 다르게 실행문을 끌어 올려서 실행 할 수 없다. 호이스팅 안됨! )
let result2 = function(a,b) {
  let result;
  result = a+ b;
  return result;
}
console.log(result2(x,y));

//배열생성 2가지 방법
const array = [1,2,3,4,5];

const array2 = new Array(1,2,3,4,5);

console.log(array.toString());
console.log(array2.toString());

//js에서 배열은 동적으로 요소추구ㅏ 기능.
array[5] = 6;
console.log(array.toString());
console.log(array.length);

array.length =3;
console.log(array.toString());

array.length=10;
console.log(array.toString());

array[7] = 8;
console.log(array.toString());

//빈 배열생성

const array3 = [];
array4 = new Array();
array3[0] = 1;
array3[1] = 2;
array3[3] = 3;
console.log(array3.toString());
array3[5] = 6;
console.log(array3.toString());
console.log(array3.length);
//array3 = ['a' , 'b' , 'c']; --<사용하려면 const 대신 let으로 변수선언

//객체 생성 []=배열 {}객체
//1.리터럴 표현식 : 1회성 객체 생성시 사용
const person = {
  name: '홍길동',
  age : 30,
  eat : function(){
    console.log('먹다');
  },
  smile:function(){
    console.log('웃다');
  }
};
console.log(person.name);
console.log(person.age);
person.eat();
person.smile();
person.bloodType = 'A';
console.log(person);

//2.new Object()로 객체 생성
const person2 = new Object();
person2.name = '홍길순';
person2.age = 20;
person2.smile = function(){
  console.log('웃다');
}
person2.eat = function(){
  console.log('먹다');
}
console.log(person2);
person2.eat();
person2.smile();

//3.{} 빈객체 생성
const person3 = {};
person3.name = '홍길서';
person3.age = 25;
person3.smile =function(){
  console.log('웃다');
}
person3.eat = function(){
  console.log('먹다');
}
console.log(person3);

//4. 생성자 함수
function Person(name,age){
  this.name =name;
  this.age = age;
  this.smile = function(){console.log('웃다');};
  this.eat = function(){console.log('먹다');};
}

const person10 = new Person('홍길북',30);
const person11 = new Person('홍길남',40);
const person12 = new Person('홍길자',50);
console.log(person10);
console.log(person11);
console.log(person12);

//5.class : 생성자함수의 systax sugar(설탕문법)
// 생성자
class Person20{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  //메서드
  smile(){
    console.log('웃다');
  }
  eat(){
    console.log('먹다');
  }
}
  const person30 = new Person20('홍길동',10);
  const person31 = new Person20('홍길서',20);
  const person32 = new Person20('홍길남',30);
  console.log(person30);
  console.log(person31);
  console.log(person32);
  console.log(person32.smile());
  console.log(person32.eat());

  