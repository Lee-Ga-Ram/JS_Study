/* 스코프 */

// 스코프는 유효범위를 의미한다.

function add(x, y) {
  console.log(x , y);
  return x + y;
}

console.log(add(1,2));

//console.log(x,y); // => reference error x, y는 함수의 매개변수이므로 함수 내부에서는 참조가능하지만(함수 내부 스코프를 가짐) 함수 외부에서는 접근할 수 없다.

// 모든 식별자(변수명, 함수명, 클래스명 등)는 자신이 선언된 위치를 기준으로 스코프가 결정된다.


var x = 1;

function foo() {
  var x = 2;

  console.log(x); // => 2
}

foo();
console.log(x); // => 1

// 위의 예제에서 전역변수로 선언된 x와 함수 foo 내부에 선언된 x 가 있다
// foo 내부에서는 함수 내부에 선언된 x를 참조하여 2를 출력
// 26라인의 x는 전역에 선언된 x를 참조하여 1을 출력한다.
// 함수내부의 x는 외부에서 접근할 수 없는 함수스코프를 갖기때문이다
// 식별자의 이름이 같더라도 자바스크립트 엔진은 식별자 결정을 통해 별개의 변수로 인식한다.


