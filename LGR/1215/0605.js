// 문자열 타입은 텍스트 데이터를 나타내는데 사용한다 
// 따옴표(‘ ’) 또는 큰 따옴표(“ ”) 안에 텍스트를 넣어 생성


var str = "string"; // 큰 따옴표
str = 'string';     // 작은 따옴표
str = `string`;     // 백틱(ES6 템플릿 리터럴)

str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열.';
str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열.";
 

// 자바스크립트의 문자열은 원시 타입이며 변경 불가능
// 한 번 문자열이 생성되면, 그 문자열을 변경할 수 없다는 것을 의미
var string = hello; 

/*********************************************************************************************************
 
 첫번째 구문이 실행되면 메모리에 문자열 ‘Hello’가 생성되고 
 식별자 str은 메모리에 생성된 문자열 ‘Hello’의 메모리 주소를 가리킨다. 
 
 그리고 두번째 구문이 실행되면 이전에 생성된 문자열 ‘Hello’을 수정하는 것이 아니라 
 새로운 문자열 ‘world’를 메모리에 생성하고 식별자 str은 이것을 가리킨다. 
 
 이때 문자열 ‘Hello’와 ‘world’는 모두 메모리에 존재하고 있다. 
 변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 변경되었을 뿐이다.
 
 *********************************************************************************************************/