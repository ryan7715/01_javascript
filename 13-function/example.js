// 13. 함수

// 매개뱐수 : 함수가 실행이 되기 위해 받아야 되는 값의 자리(변수) -> 미지수 x, y
function add(a, b) {    // 이 함수 add는 두 개의 값을 받아서 실행될 수 있음
                       // 이 함수 몸통 안에서 a라고 부를거고 b라고 부를거야
    return a+ b;      // <- 변환(리턴)값
}

// add(2, 3) -> 함수를 실행할건데 실행에 2와 3을 넣어서 실행할거야
//              실제 넣은 2와 3을 인수라고 함
console.log(add(2, 3));   // add(2, 3) 실행되어서 5라는 반환값을 받음
// console.log(5);

function sayHello(name) {
    console.log("안녕하세요, " + name + "님");
}

// function은 return이 있을 수도 있고 없을 수도 있음


console.log(sayHello("홍길동"));
// 0. console.log(값)이 실행되어야 하기 때문에 값을 알아야 함
// 1. sayHello("홍길동")이 실행이 됨  -> 함수 몸통의 코드가 한 줄 한줄 실행이 되면서
//                                 -> console.log("안녕하세요, 홍길동님"); 이 실행이 되었음
// 2. sayHello("홍길동") 함수는 반환값이 없으므로, undefined로 평가됨
// 3. console.log(undefined)이기 때문에 undefined가 화면에 찍힘



// 함수를 사용하는 이유 : 코드의 재사용  -> 유지보수의 용이성 -> 코드의 신회도 상승
//                    함수명을 함축적으로 만들면서, 보는 사람으로서도 바로 이해 가능하도록 함
function getDiscountPrice(price, rate) {
    return price - (price * rate);
}

console.log(getDiscountPrice(10000, 0.1));
console.log(getDiscountPrice(20000, 0.4));

// 함수를 정의하는 방법
// 그 중 함수 생성자 함수는 그냥 Function() 쓰는구나 기억함
// 1. 함수 선언문 (function 키워드를 통해 선언)
function square1(x) {
    return x * x;
}

// 2. 함수 표현식 (익명 함수를 변수에 할당)
var square2 = function (x) {
    return x * x;
}

// 3-1. 화살표 함수
var square3 = function (x) {
    return x * x;
}

// 3-2. 화살표 함수 (함수 몸통이 1줄이고, return이 있다면 생략)
var square4 = (x) => x * x;


// 3-3. 화살표 함수 (매개변수가 하나면 생략)
var square5 = x => x * x;




// 함수 호이스팅
// function 선언 키워드로 선언된 "함수 선언문"만 함수 호이스팅의 대상
//     => 통째로 올라가니까, 어디에서든지 사용(호출) 문제 없음
// 나머지는 var 선언 키워드로 선언된 "변수 선언"만 호이스팅 대상이 되어 롤라감
//     => 변수부분만 올라가니까, 함수 값(= 설계도)이 저장되기 전에 사용하면 오류



// 매개변수의 갯수와 인수 갯수가 다를 때
console.log(add(1));   // NaN   => 인수가 부족해도 함수 실행엔 지장 없음
                          //          다만, 함수 안에서 Y를 찾을 때 문제가 됨
console.log(add(2, 3, 4));    // 5    => 인수가 넘치면 그냥 넘치는 인수는 버려짐


function greet(name, greeting) {
    return greeting + ", " + name + "님!";
}

