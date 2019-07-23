'use strict'

// task 1
let a = '1';
if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = 1;
if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = 3;
if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//task 2
let item = false;
if (item != true){
    console.log('Верно');
} else {
    console.log('Неверно');
}
// item = false; item != true ? console.log('Верно') : console.log('Неверно');

item = true;
if (item != true){
    console.log('Верно');
} else {
    console.log('Неверно');
}
// item = true; item != true ? console.log('Верно') : console.log('Неверно');

//task 3
a = 4;
if (a > 0 && a < 4){
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = 0;
if (a > 0 && a < 4){
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = -3;
if (a > 0 && a < 4){
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = 2;
if (a > 0 && a < 4){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//task 4
let c = 2;
let b = 3;
if (c > 3 && c < 12 || b >= 7 && b < 15){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//task 5
let month = prompt('Чтобы определить время года введите число от 1 до 12');
if( month >= 3 && month <= 5 ){
    console.log("Это месяц 'Весна'");
}
    else if( month >= 6 && month <= 8 ){
        console.log("Это месяц 'Лето'");
}
    else if( month >= 9 && month <= 11 ){
        console.log("Это месяц 'Осень'");
} 
    else if(month <= 2 && month >= 1 || month == 12){
        console.log("Это месяц 'Зима'");
}
    else{
       console.log("Вы ввели некорректное число!!!", "");
} 


//6 task
for(let d = 0; d <= 100; d ++){
    if(d%2 === 0){
        console.log(d);
    }
}