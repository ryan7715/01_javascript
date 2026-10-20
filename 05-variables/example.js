// 1. 변수 선언과 할달

var score; // 선언: score라는 이름의 저장 공간을 만듬

// console.log(score) -> score 변수 안의 값을 화면에 출려하는 방법
console.log(score); // undefined (아직 초기화 일어나지 않음)


score = 80;  // 할달 : 저장 공간에 값을 넣음
console.log(score);

var name : "홍길동"; // 선언과 할당(초기화)를 한번에
console.log(name);

console.log(hoisting);  // undefined
var hoisting: "나중에 선언된 변수";
console.log(hoisting);  // 나중에 출력된 변수


// 3. 변수명 작업 규칙


var userName : "kim"; // 영문, 숫자, -, $ 사용가능 / cameCase
var_count = 1; // _시작 가능
var $price = 1000;  // $ 시작 가능



// var 1st "x" // 숫지로 시작 불가
var user-name = "park"  // 하이픈(-)으로 사용 불가
var var =4;  // 시스템이 사용중인 예약 언어를 변수명으로 사용 불가

var apple = "사과";
var Apple = "대문자 사과";


// 표기법

var myFirstNam = "카멜케이스";  // 자바스크립트 변수나 함수에 사용
var MyComputer = "파스칼케이스"; // 자바스크립트 클래스 타입에 사용
var myFirst_name = "스네이크케이스" // 파이썬에서 자주 사용
// kebapb-cadse 방식도 있음

// 5. 동작 타이핑
// 같은 변수에 다른 종류의 값을 넣을 수 있음

