


const target = 'is this all there is?';

//정규표현식 객체 생성하는 방법
//1)리터럴 표기법
// const regExp = /is/;
//2) RegExp 생성자 함수이용
// const regExp = /is/; 
const regExp = new RegExp(/is/);
console.log(regExp.test(target));
console.log(regExp.exec(target));

console.log(target.match(/is/));
