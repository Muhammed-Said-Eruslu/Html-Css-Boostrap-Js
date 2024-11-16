var a = "Hello World!";

a = 23;
a = true;
console.log(a);

const c = "constant variable";

//   c = "zafer"; //TypeError: Assignment to constant variable.

console.log(c);

// Data Types
// Primitive Data Type

var str = "string";
var number = 23;
var boolean = true;
var nullVar = null;
var notANumber = NaN;
var undefined = undefined;
var myvar;
// yourvar;

console.log(str);
console.log(number);
console.log(boolean);
console.log(nullVar);
console.log(notANumber);
console.log(undefined);
console.log(myvar);
// console.log(yourvar);

// case sensitive

// Object
var myObj = {
  name: "John",
  age: 23,
  isEngineer: true,
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj["name"]);

// Yeni property yaratma
myObj.country = "USA";
console.log(myObj);

// Yeni Property Silme
delete myObj.country;
console.log(myObj);

// Property Değeri değiştirmek
myObj.name = "Jane";
console.log(myObj);

// Array
var myArray = ["John", "Jane", 33, 57, true, false, null, NaN];

console.log(myArray);

console.log(myArray.length);

// Read A Value
console.log(myArray[0]);

// Değer Değiştirme
myArray[0] = "Zafer";
console.log(myArray);

// Değer Ekleme
myArray.push("Alice");
console.log(myArray);

//En başa değer ekleme
myArray.unshift("David");
console.log(myArray);

// Değer çıkarma
myArray.pop();
console.log(myArray);

// En baştan değer çıkarma
myArray.shift();
console.log(myArray);

// değer yer değiştirme
var temp = myArray[0];
myArray[0] = myArray[5];
myArray[5] = temp;

console.clear();

// Math Operators
// Toplama

var sum = 23 + 12;
console.log(sum);

//Çıkarma
var sub = 33 - 10;
console.log(sub);

//Çarpma
var mul = 33 * 10;
console.log(mul);

//Bölme
var div = 33 / 10;
console.log(div);

//Mod alma
var mod = 33 % 10;
console.log(mod);

// üs alma
var us = 2 ** 4;
console.log(us);

// Math Shortcuts
var x = 4;
x += 4; // x = x+4;
console.log(x);

x -= 4;
console.log(x);

x *= 4;
console.log(x);

x /= 4;
console.log(x);

// 1 arttırıp, 1 eksiltme
x++;
console.log(x);

x--;
console.log(x);

++x;
console.log(x);

--x;
console.log(x);

console.clear();

// Conditional Operators
var n = 13;
var l = 7;

var con1 = n > l;
console.log(con1);

console.log("n < l :", n < l);

console.log(n == 7);
console.log(n == 13);
console.log(n != 13);

console.log(n === "13");

console.log('n == "13"', n == "13");
console.log('n === "13"', n === "13");
console.log("n === 13", n === 13);

console.log(typeof n);
console.log(typeof "13");

console.log('n !== "13"', n != "13");
console.log('n !=== "13"', n !== "13");

console.clear();
//Karar Yapıları
// If

if (3 > 5) console.log("3 büyüktür 5");

if (5 > 3) console.log("5 büyüktür 3");

var msg = "Hello";

if (msg === "Hello") console.log("Message is Hello");

// yas 45 olarka tanımla
// 65 ve üzerindeyse ekrana ücretsiz binebilirsin. değilse daha gençsin yazsın

var age = 45;
if (age >= 65) console.log("Ulaşım araçlarına ücretsiz binebilirsiniz");
else console.log("Daha gençsin koçum, paranı öde ve geç!");

//else if
var johnAge = 29;

if (johnAge > 45) {
  console.log("45 yaşından büyüksün");
  console.log("45 yaşından büyüksün");
} else if (johnAge > 18) console.log("18 yaşından büyüksün");
else if (johnAge > 12) console.log("12 yaşından büyüksün");
else console.log("çocuksun");

// switch case
var firstname = "Alice";
// Bob
// John
// Alice
// Sen kimsin? Çık dışarı!

switch (firstname) {
  case "Bob":
    console.log("Sen Bob'sun");
    break;
  case "John":
    console.log("Sen John'sun");
    break;
  case "Alice":
    console.log("Sen Alice'sun");
    break;

  default:
    console.log("Sen kimsin? Çık dışarı!");
    break;
}
console.clear();

// Döngüler
//For
var loopArr = ["John", "Alice", "Bob", "Betty"];

for (let index = 0; index < loopArr.length; index++) {
  console.log(loopArr[index]);
}
console.log("");
loopArr.sort();

for (let index = 0; index < loopArr.length; index++) {
  console.log(loopArr[index]);
}

// var keyword'ü global scope'ta değişken yaratır
// let keyword'ü local yada block içinde değişken yaratır

// negatif yönlü for dongusu pozitif for dongusune göre %80 daha performanslı çalışır

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.clear();
// while

let myAge = 23;

while (myAge <= 65) {
  console.log("Hala emekli değilsin");
  myAge++;
}

// Do while
let yourAge = 65;

do {
  console.log("90 yaşından küçüksün");
  yourAge++;
} while (yourAge < 90);

console.clear();
// Functions
Math.pow(2);

// fonksiyonu tanımladım.
function add() {
  console.log("Add function ", 4 + 10);
}

// fonksiyonu çağırdım.
add();

// double isminde bir fonksiyon yaz. içine bir parametre alsın. Ekrana iki katını yazsın.

function double(n) {
  console.log(n * 2);
}

double(5); // fonksiyonu çağırıyorum.
double(1005); // fonksiyonu çağırıyorum.
Math.pow(5, 2); // fonksiyonu çağırıyorum.

//multiple iki parametre alacak. çarpıp ekrana yazacak

function multiple(x, y) {
  console.log(x * y);
}

multiple(3, 5);
multiple(13, -5);

//Anonym function

var addFn = function (a, b) {
  console.log(a + b);
};

addFn(5, 6);

addFn("Zafer", "Dörter");

var divide = function (a, b) {
  return a / b;
};

console.log(divide(10, 2));

var bolme = divide;

bolme(4, 2);

// a değerinin 10 dan büyük oldığıu zaman b değeri iler toplanmasını istiyorum
// a değerinin interger olmaması furumunda consola bir uyarı yazıp fonksiyonu bitirebiliriz.

function conditionalSum(a, b) {
  if (a >= 10) return a + b;

  if (typeof a !== "number") {
    console.log("a değişkeni bir number değildir");
    return;
  }
}

console.log(conditionalSum(4, 5));  //undefined

console.log(conditionalSum(14, 5)); //19

console.log(conditionalSum("Hello", 5)); //a değişkeni bir number değildir

console.log("asdasd")
console.log(conditionalSum("14", 5));  // 145