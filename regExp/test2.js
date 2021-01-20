


//별칭 유효성체크
const nickname = '111별칭22';
//한글 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10 자리인지 검사한다.
const pattern = /^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9]{4,10}$/;
const result =  pattern.test(nickname);
console.log(result);

//이메일체크
const email = 'ungmo2@gmail.com';
const emailPattern = /^[\w]([-_\.]?[\w])*@[\w]([-_\.]?[\w])*\.[a-zA-Z]{2,3}$/;
console.log(emailPattern.test(email));

//전화번호체크
const tel = '010-1234-5678';
const telPattern = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(telPattern.test(tel));

//숫자로 입력된 문자인지 체크
const num = '1234567';
const numPattern = /^[\d]*$/;
console.log(numPattern.test(num));

//숫자로 입력된 문자인지 체크 +  갯수제한 4 ~10
const num1 = '12345';
const numPattern1 = /^[\d]{4,10}$/; // /^[0-9]{4,10}$/
console.log(numPattern1.test(num1));

//비밀번호체크
const passwd = 'test1234';
//대소문자 또는 숫자로 시작하고 끝나며 4~10 자리인지 검사
const passwdPattern = /^[\w]{4,10}$/; ///^[A-Za-Z0-9]{4,10}$/
console.log(passwdPattern.test(passwd));