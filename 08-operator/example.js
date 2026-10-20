
// 1. 산술 연산자

console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.33333333333
// 딱 떨어지지 않는 소숫점 계산을 시키면 믿을 수 없음
console.log(10 % 3); // 1
console.log(2 ** 3); // 8

// 증강연산자 : 전위 증강연산자, 후위 증강연산자
var a = 5;
console.log(a++);  // 화면 : 5 , a의 값: 6
console.log(a);   // 화면 : 6
console.log(++a); // 화면 :7, a의 값 : 7



// 2. 할당 연산자

var total = 10;
total += 5;  // 15
// var temp += 5;      // undefined + 5
total -= 3;
total *= 2;
total /= 4;
console.log(total);

var message = "안녕";
message += "하세요";   // + 연산이 산솔연산이 아닌, 연결 연산 동작
console.log(message); // 안녕하세요


// 3. 비교 연산자
// ==, ===이 있을 때  ===을 기본적으로 사용한다고 생각해야 함
console.log(5 == "5");   // true  (느슨한 비교)
console.log(5 === "5");  // false  (엄격한 비교)
console.log(false == 0); // true (-> 컴퓨터 내부적으로 false는 0으로 기록 둥)
console.log(true == 1);  // true (-> 컴퓨터 내부적으로 true는 1로 기록 중)
console.log(undefined == null);  //  true

console.log(5 != "5");       // !true => false
console.log(5 !== "5");      // !false => true

// 4. 삼항 연산자 => 조건식 ? 식1 : 식2 조건이 참일 때 : 조건이 거짓일 때

var score = 75
var result = score >= 60 ? "합격" : "불합격"
console.log(result);

var age = 25;
var hasTicker = true;
console.log(age < 19 || hasTicker);    // true => 논리함(OR) : 둘 중 하나라도 참이면 참
console.log(age >= 19 && hasTicker);   // true => 논리곱(AND) : 둘 다 참이어야 참
console.log(!hasTicker);              //  false => 부정(NOT) : 반대값






// 6. typeof 연산자
// typeof 넣고 나오는 결과 값 8가지.
// number, string, boolean, undefined, bigint, symbol, object, function
