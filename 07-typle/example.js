var integer = 10;
var float = 3.14;
var negative = -5;

console.log(integer, float, negative);
console.log(typeof integer, typeof float, typeof negative);

console.log(10 / 3);
console.log(10 / 0);
console.log("abc" * 2);
console.log(typeof NaN);


// 문자열 타입

var single = '작은 따옴표';
var double = "큰 따옴표";
var backtick =`백틱`;

console.log(single, double, backtick);
console.log("줄 바꿈을 하고 싶으면 \n이렇게 하면 됩니다.");
console.log(single. length);  // string의 글자 수

// 탬플릿 리터널

var userName = "홍길동";
var age = 20;
var user = {
    id: 40,
    name: "김철수",
    phoneNumber: "010-1234-5678",
}

console.log(`${userName}님의 나이는 ${age}입니다.`);
console.log(`${user.name}님의 전화번호는 ${user.phoneNumber}입니다.`);
console.log(`${userName}님은 내년에 ${age + 1}살이 됩니다.`);

// 탬플릿 리너널은 "값"을 string 안에 출력해주는 것
// age +1 이라는 '평가'된 '값'을 츨력하는 데 무리가 없음


// 불리언 (boolean)

var isStudent = true;
var hasCar = false;


// 이 회원이 관리자인가요? =< isAdmin = true

console.log(10 > 5);

// bigint, symbol
console.log(Number.MAX_SAFE_INTEGER);  // number타입이 정확하게 표현할 수 있는 최대의 수
console.log(9007199254740991 + 2);  // javascript가 다룰 수 있는 number 이상 숫자
                                   // 강제로 시키면 오작동 됨
console.log(9007199254740991n + 2n); // bigint + bigint => 정상 작동


var id1 = Symbol("id"); // "id"걸 재료로 써서 고유한 값
var id2 = Symbol("id");
console.log(id1);
console.log(id2);
console.log(id1 === id2);



var a1 = 123;
var a2 = "123";
console.log(a1);
console.log(a2);
console.log(a1 === a2);
