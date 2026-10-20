
// 1. 숫자 num이 짝수면 "짝수", 홀수이면 "홀수"를 출력하세요
// (%, 삼항 연산자를 사용해서)
var num = 17;
var num2 = (num % 2);
console.log(num2 === 0?"짝수" : "홀수");



// 2. 총 금액 total에 배송비 3000원을 +=로 더한 뒤 출력하세요
var total = 25000;
total += 3000;
console.log(total);


// 3. 아래 비교 결과를 예상해 주석으로 적은 뒤 확인하세요.
// 1 == "1"
console.log(1 == "1");  // true
// 1 === "1"
console.log(1 === "1");   // false
// null == undefined
console.log(null == undefined);   //true
// "b" > "a"
console.log("b" > "a");  // true


// 4. 나이.age가 13이상 19이하라면 true를 출력하세요 (&& 시용)
var age = 13;
console.log(age >= 13 && age <= 19); //truw


// 5. 아래 코드의 출력 결과를 순서대로 예상한 뒤 실행해서 확인하세요.
var x = 3
console.log(x++);  // 1. 화면 출력, 2. 덧셈 => 3   (x = 4)
console.log(++x);  // 2. 화면 출력, 1. 덧셈 => (x = 5) 5
console.log(x); // 화면 출력 => 5
// 예상 값 : 5
