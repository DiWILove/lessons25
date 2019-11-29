
// const getMinimal = (x, y) => ((x < y) ? x : y);

// const num1 = +prompt("Num1", 0);
// const num2 = +prompt("Num2", 0);
// console.log(getMinimal(num1, num2));

// Написать функцию, которая принимает 2 числа и знак  (+ - * /), считает пример и возвращает результат.

// function getCalc(x, y, chr) {
//     switch (chr) {
//         case '+':
//             return (x + y);
//             break;
//         case '-':
//             return (x - y);
//             break;
//          case '*':
//              return (x * y);
//              break;
//         case '/':
//             return (x / y);
//             break;
//         default:
//             alert("Not valid char!");
//     }
// }
// const num1 = +prompt("Num 1", 0);
// const num2 = +prompt("Num 2", 0);
// const chr1 = prompt("Enter a calc", 0);

// console.log(getCalc(num1, num2, chr1));

//1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
// 1 – если первое больше, чем второе; и 0 – если числа равны.
// const x = +prompt("Num 1", 0);
// const y = +prompt("Num 2", 0);
// let z;


// function getNum() {
//     let z = 0;
//     if (x < y) {
//         z = - 1;
//     } else if (x > y) {
//         z = 1;
//     } else {
//         z = 0;
//     }
//     return (z)
// }

// console.log(getNum(z));

//2 Написать функцию, которая вычисляет факториал переданного ей числа.

// function calcFact(x) {
//     let i = 1;
//     let b = 1;

//     while (i < x) {
//         b = b + (b * i);
//         i = i + 1;
//     }
//     return (b)
// }
// let y = +prompt('Введите число', '0');
// console.log(calcFact(y));

//3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
//Например: цифры 1, 4, 9 превратятся в число 149.

// function calcNum(x, y, z) {
//     let b = x + y + z;
//     return (b);
// }

// const num1 = prompt('Num1', 0);
// const num2 = prompt('Num2', 0);
// const num3 = prompt('Num3', 0);

// console.log(calcNum(num1, num2, num3));

//4 Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function calcSq(x, y) {
//     let sq;
//     if (y === 0) {
//         sq = Math.pow(x, 2);
//     } else if (x === 0) {
//         sq = Math.pow(y, 2);
//     } else {
//         sq = x * y;
//     }
//     return (sq);
// }

// const a = +prompt('a', 0);
// const b = +prompt('b', 0);

// console.log(calcSq(a, b));

//5 Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.

// function calcNum(x) {
//     let i = 1;
//     let b = 0;
//     while (i < x) {
//         if (x % i === 0) {
//             b = b + i;
//         }
//         i++
//     }
//     if (b == x) {
//         return ("Совершенное")
//     } else {
//         return ('Не совершенное')
//     }
// }

// const num = +prompt('Number', 0)
// console.log(calcNum(num))

//6 Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную 
//ранее функцию, чтобы узнавать, совершенное число или нет. 

// function calcNum(x, y) {
//     while (x <= y) {
//         let i = 1;
//         let b = 0;
//         while (i < x) {
//             if (x % i === 0) {
//                 b = b + i;
//             }
//             i++
//         }
//         if (b == x) {
//             console.log(b)
//         }
//         x++;
//     }
//     return ("that's all for today");
// }
// const num1 = +prompt('Number1', 0);
// const num2 = +prompt('Number2', 0);
// console.log(calcNum(num1, num2));

//7 Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в
// формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// function getTime(x, y, z) {
//     if (x > 0 && x < 10) {
//         x = '0' + x;
//     }
//     if (y > 0 && y < 10) {
//         y = '0' + y;
//     }
//     if (z > 0 && z < 10) {
//         z = '0' + z;
//     }
//     if (x == "") {
//         x = '00';
//     }
//     if (y == "") {
//         y = '00';
//     }
//     if (z == "") {
//         z = '00';
//     }
//     if (x > 60 || y > 60 || z > 60) {
//         return ('Недопустимое значение');
//     }
//     return (`${x}:${y}:${z}`)
// }

// const hh = prompt('Hours', '00');
// const mm = prompt('Minutes', '00');
// const ss = prompt('Seconds', '00');

// console.log(getTime(hh, mm, ss));

//8 Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// function getTime(x, y, z) {
//     return (z = (x * 3600) + (y * 60) + z)
// }

// const hh = +prompt('Hours', 0);
// const mm = +prompt('Minutes', 0);
// const ss = +prompt('Seconds', 0);

// console.log(getTime(hh, mm, ss));

//9 Написать функцию, которая принимает количество секунд, переводит их в часы,
// минуты и секунды и возвращает в виде строки «чч:мм:сс».

// function getTime(ss) {
//     x = Math.floor(ss / 3600);
//     y = Math.floor((ss % 3600) / 60);
//     z = ss - ((x * 3600) + (y * 60));
//     if (x > 0 && x < 10) {
//         x = '0' + x;
//     }
//     if (y > 0 && y < 10) {
//         y = '0' + y;
//     }
//     if (z > 0 && z < 10) {
//         z = '0' + z;
//     }
//     if (ss > 90060) {
//         return ('Укажите другое значение')
//     }
//     return (`${x}:${y}:${z}`)
// }

// const sec = +prompt('Seconds', 0);
// console.log(getTime(sec));

//10 Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров,
// которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении
// задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, 
//узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

// function getTime(x1, y1, z1, x2, y2, z2) {
//     tr = ((x2 * 3600) + (y2 * 60) + z2) - ((x1 * 3600) + (y1 * 60) + z1);
//     trX = Math.floor(tr / 3600);
//     trY = Math.floor((tr % 3600) / 60);
//     trZ = tr - ((trX * 3600) + (trY * 60));

//     if (trX > 0 && trX < 10) {
//         trX = '0' + trX;
//     }
//     if (trY > 0 && trY < 10) {
//         trY = '0' + trY;
//     }
//     if (trZ > 0 && trZ < 10) {
//         trZ = '0' + trZ;
//     }
//     if (trX == "") {
//         trX = '00';
//     }
//     if (trY == "") {
//         trY = '00';
//     }
//     if (trZ == "") {
//         trZ = '00';
//     }

//     return (`${trX}:${trY}:${trZ}`)
// }

// const h1 = +prompt('First Hours', 0);
// const m1 = +prompt('First Minutes', 0);
// const s1 = +prompt('First Seconds', 0);

// const h2 = +prompt('Second Hours', 0);
// const m2 = +prompt('Second Minutes', 0);
// const s2 = +prompt('Second Seconds', 0);

// console.log(getTime(h1, m1, s1, h2, m2, s2));