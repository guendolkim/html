


//별칭 유효성체크
function isNickname(nickname){
//한글 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10 자리인지 검사한다.
const nicknamepattern = /^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9]{4,10}$/;
return nicknamepattern.test(nickname);
}

//이메일체크
function isEmail(email){
const emailPattern = /^[\w]([-_\.]?[\w])*@[\w]([-_\.]?[\w])*\.[a-zA-Z]{2,3}$/;
 return emailPattern.test(email);
}

//전화번호체크
function isTel(tel){
const telPattern = /^\d{3}-\d{3,4}-\d{4}$/;
return telPattern.test(tel);
}

//숫자로 입력된 문자인지 체크
function isNum(num){
const numPattern = /^[\d]*$/;
return numPattern.test(num);
}

//숫자로 입력된 문자인지 체크 +  갯수제한 4 ~10
function isNum1(num){
const numPattern1 = /^[\d]{4,10}$/; // /^[0-9]{4,10}$/
return numPattern1.test(num);
}

//비밀번호체크
function isPasswd(passwd){
//대소문자 또는 숫자로 시작하고 끝나며 4~10 자리인지 검사
const passwdPattern = /^[\w]{4,10}$/; ///^[A-Za-Z0-9]{4,10}$/
return passwdPattern.test(passwd);
}