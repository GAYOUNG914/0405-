/*변수선언과 할당*/
// /*변수 선언과 할당을 동시에 할 수 있다.*/
// // var num = 15;
// var num// 변수를 선언한다.
// num = 5//변수에 값을 할당한다. 처음 할당되는 것을 변수를 초기화라고 한다.
// console.log(num);// 1 로직 작동
// num = 10;// 변수에 값을 재할당한다.
// console.log(num);//2 로직 작동


/*변수 다중선언*/
var sum1, sum2, sum3, total;
sum1 = 10;
sum2 = 5;
sum3 = 20;
count = 3;
total = sum1 + sum2 + sum3;
avg = (sum1 + sum2 + sum3)/count
console.log('합계는 '+total+'원 입니다.');// 문자열 변수의 조합으로 출력
console.log('평균은 '+avg+'점 입니다.');

/*원주율*/

var pi = 3.14;
var radius = 10;
var result;//결괏값을 담을 수 있는 변수 선언

/*원둘레*/
result = 2*pi*radius;
console.log('원의 둘레는 '+result+'입니다.');

/*원넓이*/
result = pi*radius*radius;
console.log('원의 넓이는 '+result+'입니다.');

/*자료형의 종류*/
var stringVar = 'string';//문자열 타입
var numberVar = 12345;//숫자 타입
var booleanVar = true;// true,false 값을 반환하는 불타입
var functionVar = function(){};//함수타입
var objectVar = {/*변수,함수,key....*/};//객체 타입
