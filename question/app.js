//[基礎編]
//Q1
let nickname = "りな";
let age = 24;
console.log("私のニックネームは" + nickname + "です。年齢は"　+ age + "歳です。");

//Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log("私の好きな言語は" + languages[0] + "です。次は"  + languages[3] + "を勉強してみたいです。");

//Q3
console.log(user.age);

//Q4
console.log(playerList[1].favorites[1]);

//Q5
let totalAge =
    playerList[0].age +
    playerList[1].age +
    playerList[2].age ;
    
let averageAge = totalAge / playerList.length;
console.log(averageAge);

//Q6
function sayHello() {
  console.log("Hello");
}

sayHello();

let sayWorld = function() {
  console.log("World");
};

sayWorld();

//Q7
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log("Hello!");
};

//Q8
//①
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
};
calc.add(3, 4);

//②
calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.subtract(12, 2);

//③
calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);

//④
calc.divide = function(x, y) {
  console.log(x / y);
};
calc.divide(25, 5);

//Q9
function remainder(x, y) {
  return x % y;
}
let result = remainder(5, 3);
console.log("5 を 3 で割った余りは " + result + " です。");

//Q10
//xは関数fooの中で作られているため、使えるスコープがその中だけに限られてしまう。
//そのため、外のconsole.log(x)からはxを参照することができないため、エラーになる。


//[応用編]
//Q1
console.log(Math.floor(Math.random() * 10));

//Q2
function showMessage() {
  console.log("Hello World!");
}

setTimeout(showMessage, 3000);

//Q3
let num = 5; 

if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

//Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

//Q5
for (let i = 0; i < mixed.length; i++) {
  let value = mixed[i];

  if (typeof value === "number") {
    if (value % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  } else {
    console.log("not number");
  }
}